'use server'

export const getUserStatByPeriod = async (periodId: string, userId: string) => {
  try {

    const res = await fetch(`${process.env.API_URL}/period-stat?user=${userId}&period=${periodId}&ext=1`);

    if (!res.ok) {
      return {error: 'Не удалось загрузить статистику пользователя по периоду'};
    }

    const currentPeriod = await res.json();

    if (currentPeriod.length === 0) return {error: 'Нет данных по этому периоду'};

    return currentPeriod;

  } catch (err) {
    console.error('Ошибка getUserStatByPeriod:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}