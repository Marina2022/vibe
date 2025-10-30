'use server'

export const searchUser = async (data: string) => {


  try {
    const response = await fetch(`${process.env.API_URL}/user/search/${data}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      // сервер может прислать ошибку в разных полях: detail, message, error
      const errorMessage =
        result?.detail || result?.message || result?.error || 'Такого аккаунта не существует';
      return { error: errorMessage };
    }

    return { data: result };

  } catch (err) {
    console.error('Ошибка searchUser action:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}