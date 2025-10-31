'use server'

export const getPeriods = async () => {
  try {

    const res = await fetch(`${process.env.API_URL}/period`);

    if (!res.ok) {
      return {error: 'Не удалось получить периоды'};
    }

    const periods = await res.json();
    return periods;

  } catch (err) {
    console.error('Ошибка getPeriods:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}