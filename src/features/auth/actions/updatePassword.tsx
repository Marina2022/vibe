'use server'

export const updatePassword = async (id: string,  password: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password
      }),
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
    console.error('Ошибка update-password action:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}