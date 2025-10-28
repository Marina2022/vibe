'use server';

import {cookies} from "next/headers";
import { redirect } from 'next/navigation';

export const login = async (data: { login: string; password: string }, token: string)=>
{

  try {

    const res = await fetch(`${process.env.API_URL}/user/search/${data.login}`)

    if (!res.ok) {
      return {error: 'Неверный логин или пароль'};
    }

    const realLogin = await res.json();


    const response = await fetch(`${process.env.AUTH_API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'password',
        username: realLogin,
        password: data.password,
        client_id: 'primetime',
      }),
    });

    if (!response.ok) {
      return {error: 'Неверный логин или пароль'};
    }

    const authResult = await response.json();


    // flow при авторизации - в процессе регистрации:

    // до установки кук надо проверить токены!

    // if (token)  // если токен не равен пустой строке
    // послать запрос на юзера (достать его из access-токена), из user получить значение confirm-кода
    // сравнить токены из юзера и аргументов. Если не совпадают, то вернуть
    // return {error: 'Токен не соответствует'};

    // послать put confirm


    const cookieStore = await cookies();

    // access_token
    cookieStore.set('access_token', authResult.access_token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
    });

    // refresh_token
    cookieStore.set('refresh_token', authResult.refresh_token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30, //  30 дней
    });

    // expires_in
    cookieStore.set('expires_in', authResult.expires_in, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: authResult.expires_in, // берем как есть
    });


  } catch (err) {
    console.error('Ошибка loginAction:', err);
    return { error: err instanceof Error ? err.message : 'Неизвестная ошибка' };
  }

  redirect('/dashboard');
}

