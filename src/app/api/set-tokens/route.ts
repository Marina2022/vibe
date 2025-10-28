import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { refresh_token } = await req.json()

  const refreshed = await fetch(`${process.env.AUTH_API_URL}/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token,
      client_id: 'primetime',
    }),
  }).then(res => res.json())

  if (!refreshed.access_token) {
    return NextResponse.redirect('/login')
  }

  const res = NextResponse.json({ ok: true, access_token: refreshed.access_token })
  res.cookies.set('access_token', refreshed.access_token, { httpOnly: true, path: '/', secure: true })
  res.cookies.set('refresh_token', refreshed.refresh_token, { httpOnly: true, path: '/', secure: true })
  res.cookies.set('expires_in', refreshed.expires_in, { httpOnly: true, path: '/', secure: true })

  return res
}
