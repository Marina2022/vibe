'use server'
import { cookies } from 'next/headers';


export const getNews = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;

  try {

    const res = await fetch(`${process.env.API_URL}/news`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return {error: 'Не удалось загрузить новости'};
    }

    return await res.json();

  } catch (err) {
    console.error('Ошибка getNews:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}