'use client';

import {useRouter, useSearchParams} from 'next/navigation';

import s from './LoginForm.module.scss';
import ModalContainer from "@/features/auth/components/common/ModalContainer/ModalContainer";
import Button from "@/components-ui/Button/Button";
import {useForm} from 'react-hook-form';
import {useState, useTransition} from 'react';
import {login} from "@/features/auth/actions/login";

type LoginFormValues = {
  login: string;
  password: string;
};

const LoginForm = () => {

  const router = useRouter();

  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormValues>();
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();

  let token = ''
  token = searchParams.get('token') || ''; // например .../login?token=123

  const onSubmit = (data: LoginFormValues) => {

    setError('');
    startTransition(async () => {
      try {

        // потом добавить условие  - если есть токен в урле, то в экшне нужно проверить его и отправить put {confirm: 1}
        // если есть в урле токен, то переписать

        const result = await login(data, token);

        console.log('result = ', result)
        if (result?.error) {
          setError(result.error);
          return;
        }
        alert('Успешный вход!');

      }  catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Неизвестная ошибка');
        }
      }
    });
  };

  return (
    <ModalContainer>

      <div className={s.headerRow}>
        <button className={s.backBtn} onClick={() => router.push('/')}>
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.41406 0.707153L1.41406 8.70715L9.41406 16.707" stroke="#252526" strokeOpacity="0.8"
                  strokeWidth="2"/>
          </svg>
        </button>
        Авторизация
      </div>

      <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>

        <div>
          <input
            {...register('login', {required: 'Введите логин'})}
            className={s.input} type="text" placeholder="ID / Номер телефона / E-mail"/>
          {errors.login && (
            <p className="text-red-500 text-sm mt-1">{errors.login.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('password', {required: 'Введите пароль'})}
            className={s.input} type="password" placeholder="Пароль"/>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}

        </div>

        <Button className={s.loginBtn}>
          {isPending ? 'Подождите...' : 'Войти'}
        </Button>

      </form>
    </ModalContainer>
  );
};

export default LoginForm;