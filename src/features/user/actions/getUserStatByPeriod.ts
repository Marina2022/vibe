'use server'

export const getUserStatByPeriod = async (periodId: string, userId: string) => {
  try {

    const res = await fetch(`${process.env.API_URL}/period-stat?user=${userId}&period=${periodId}&ext=1`);

    if (!res.ok) {
      return {error: 'Не удалось загрузить статистику пользователя по периоду'};
    }

    const currentPeriod = await res.json();
    return currentPeriod;

  } catch (err) {
    console.error('Ошибка getUserStatByPeriod:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}