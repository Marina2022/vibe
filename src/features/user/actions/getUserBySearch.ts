'use server'

export const getUserBySearch = async (login: string) => {
  try {

    const res = await fetch(`${process.env.API_URL}/user/search/${login}`)

    if (!res.ok) {
      return {error: 'Не удалось найти пользователя'};
    }

    const user = await res.json();
    return user;


  } catch (err) {
    console.error('Ошибка getUserBySearch:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}