'use server'

import {cookies} from 'next/headers'
import {logout} from "@/features/auth/actions/logout";


export async function fetchFromServerWithAuth(url: string, options: RequestInit = {}) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access_token')?.value
  const refreshToken = cookieStore.get('refresh_token')?.value

  if (!refreshToken || !accessToken) await logout()

  // отправится в запросе:
  // console.log('➡️ FETCH →', url)
  // console.log('🔸 Request headers:',{
  //   Authorization: `Bearer ${accessToken}`,
  //   ...(options.headers || {}),
  // })

  // выполняем основной запрос
  let res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(options.headers || {}),
    }
  })

  // если токен истёк, пробуем обновить

  if (res.status === 401 && refreshToken) {
    // console.log('Пробуем refresh')
    const refreshed = await refreshTokens(refreshToken)
    console.log('refreshed', refreshed)

    // если рефреш токен не удалось получить - разлогиниваем и редиректим на логин
    if (!refreshed) await logout()

    // засетать куки получится только если в server-action этот fetch вызываем
    const cookiesStore = await cookies()
    cookiesStore.set('access_token', refreshed.access_token, { httpOnly: true, path: '/', secure: true })
    cookiesStore.set('refresh_token', refreshed.refresh_token, { httpOnly: true, path: '/', secure: true })
    cookiesStore.set('expires_in', refreshed.expires_in, { httpOnly: true, path: '/', secure: true })

    // повторим запрос с новым токеном
    res = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${refreshed.access_token}`,
        ...(options.headers || {}),
      }
    })
  }

  return await res.json()
}

// вспомогательная функция для /refresh
async function refreshTokens(refreshToken: string) {
  try {
    const res = await fetch(`${process.env.AUTH_API_URL}/auth`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: 'primetime',
      }),
    });
    if (!res.ok) throw new Error('Refresh failed')
    return res.json()
  } catch (err) {
    console.error('Refresh error:', err)
    return null
  }
}
