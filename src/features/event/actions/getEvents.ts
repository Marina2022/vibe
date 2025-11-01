'use server'

export const getEvents = async () => {
  try {

    const res = await fetch(`${process.env.API_URL}/events`);

    if (!res.ok) {
      return {error: 'Не удалось загрузить события'};
    }

    return await res.json();

  } catch (err) {
    console.error('Ошибка getEvents:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}