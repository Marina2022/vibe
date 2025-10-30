'use server'

import {RegisterFormValues} from "@/features/auth/components/RegistrationFormBlock/RegistrationFormBlock";

export const registerUser = async (data: RegisterFormValues, parentLogin: string) => {

  const str = data.phone;
  const phoneNoSpaces = str.replace(/\s+/g, '');

  try {
    const response = await fetch(`${process.env.API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          pat_name: data.pat_name,
          login: "",
          password: "",
          gender: "",
          email: data.email,
          settlement: data.city,
          settlement_fias_id: "",
          instagram: "",
          telegram: "",
          parent: parentLogin,
          state: "user",
          vibe: 1,
        phone: phoneNoSpaces
        }
      ),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      // сервер может прислать ошибку в разных полях: detail, message, error
      const errorMessage =
        result?.detail || result?.message || result?.error || 'Ошибка при регистрации';
      return { error: errorMessage };
    }

    return { data: result };


  } catch (err) {
    console.error('Ошибка registerAction:', err);
    return {error: err instanceof Error ? err.message : 'Неизвестная ошибка'};
  }
}