'use server'

export const sendCode = async (id: string) => {


  try {
    const response = await fetch(`${process.env.API_URL}/user/send-code/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      // сервер может прислать ошибку в разных полях: detail, message, error
      const errorMessage =
        result?.detail || result?.message || result?.error || 'Код не отправился';
      return { error: errorMessage };
    }

    return { data: result };

  } catch (err) {
    console.error('Ошибка send-code action:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}