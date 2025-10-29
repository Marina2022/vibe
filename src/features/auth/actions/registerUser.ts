import {RegisterFormValues} from "@/features/auth/components/RegistrationFormBlock/RegistrationFormBlock";

export const registerUser = async(data: RegisterFormValues) => {

  console.log('пришло на сервер с формы регистрации', data)

  // try {
  //
  //   const res = await fetch(`${process.env.API_URL}/user/search/${data.login}`)
  //
  //   if (!res.ok) {
  //     return {error: 'Неверный логин или пароль'};
  //   }
  //
  //   const realLogin = await res.json();
  //
  //
  //   const response = await fetch(`${process.env.AUTH_API_URL}/auth`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       grant_type: 'password',
  //       username: realLogin,
  //       password: realLogin,
  //       client_id: 'primetime',
  //     }),
  //   });
  //
  //   if (!response.ok) {
  //     return {error: 'Неверный логин или пароль'};
  //   }
  //
  //   const authResult = await response.json();
  //
  //
  //
  // } catch (err) {
  //   console.error('Ошибка loginAction:', err);
  //   return { error: err instanceof Error ? err.message : 'Неизвестная ошибка' };
  // }
}