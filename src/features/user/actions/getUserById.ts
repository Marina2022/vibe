'use server'

export const getUserById = async (id: string) => {
  try {

    const res = await fetch(`${process.env.API_URL}/user/${id}`)

    if (!res.ok) {
      return {error: 'Не удалось найти пользователя'};
    }

    const user = await res.json();
    return user;


  } catch (err) {
    console.error('Ошибка getUserById:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}