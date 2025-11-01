'use server'

export const getStatByStatId = async (statId: string) => {
  try {

    const res = await fetch(`${process.env.API_URL}/period-stat/${statId}`);

    if (!res.ok) {
      return {error: 'Не удалось загрузить статистику по ID статистики'};
    }

    return await res.json();

  } catch (err) {
    console.error('Ошибка getStatByStatId:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}