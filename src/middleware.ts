import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies(); // ✅ без await в ошибку уходит
  const accessToken = cookieStore.get('access_token')?.value;
  const refreshToken = cookieStore.get('refresh_token')?.value;
  const expiresIn = cookieStore.get('expires_in')?.value;



  console.log('Мидлвара')

  const now = Math.floor(Date.now() / 1000);


  // Проверяем, валиден ли access token
  if (accessToken && expiresIn && Number(expiresIn) > now ) {
    //console.log('Access token валидный, пропускаем запрос');
    return NextResponse.next();
  }

  // Если токен истёк, пробуем обновить через refresh
  if (refreshToken) {
    try {
      const res = await fetch(`${process.env.AUTH_API_URL}/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: 'primetime',
        }),
      });

      if (!res.ok) {
        console.log('Refresh token не сработал, редирект на /login');
        return NextResponse.redirect(new URL('/login', req.url));
      }

      const data = await res.json();
      //console.log('Refresh token сработал, обновляем куки');

      cookieStore.set('access_token', data.access_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30,
      });

      cookieStore.set('refresh_token', data.refresh_token, {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30, // 30 дней
      });

      cookieStore.set('expires_in', data.expires_in, {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: data.expires_in,
      });

      return NextResponse.next();
    } catch (e) {
      console.log('Ошибка при обновлении токена:', e);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Нет refresh token — редирект на логин
  //console.log('Нет refresh token, редирект на /login');
  return NextResponse.redirect(new URL('/login', req.url));
}


export const config = {
  matcher: [
    '/dashboard/:path*',   // защищаем весь /dashboard
    '/profile/:path*',     // другие приватные страницы, если нужно
    // сюда можно добавлять любые другие приватные маршруты
  ],
};