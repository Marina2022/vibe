'use client';

import s from './LoginForm.module.scss';
import ModalContainer from "@/features/auth/components/common/ModalContainer/ModalContainer";
import Button from "@/components-ui/Button/Button";
import {useForm} from 'react-hook-form';
import {useRouter, useSearchParams} from 'next/navigation';
import {useState, useTransition} from 'react';
import {login} from "@/features/auth/actions/login";
import {toast} from 'sonner'
import MiniSpinner from "@/components-ui/miniSpinner/MiniSpinner";
import Link from "next/link";

type LoginFormValues = {
  login: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const {register, handleSubmit, formState: {errors, isValid}} = useForm<LoginFormValues>({mode: 'onChange'});
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

        if (result.error) {
          toast.error(result.error)
        }

        if (result?.error) {
          setError(result.error);
          return;
        }
        alert('Успешный вход!');

      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Неизвестная ошибка');
        }
      }
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ModalContainer>
      <div className={s.headerRow}>
        <button className={s.backBtn} onClick={() => router.push('/')}>
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.41406 0.707153L1.41406 8.70715L9.41406 16.707" stroke="#252526" strokeOpacity="0.8"
                  strokeWidth="2"/>
          </svg>
        </button>
        <h1 className={s.title}>Авторизация</h1>
      </div>

      <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.controlWrapper}>
          {/*<label className={s.label} htmlFor="login">Данные для входа</label>*/}
          <div className={s.inputWrapper}>
            <input
              id="login"
              {...register('login', {required: 'Введите логин'})}
              className={`${s.input}  ${errors.login ? s.redBorder : ''}`}
              type="text" placeholder="ID / Номер телефона / E-mail"
            />
          </div>

          {errors.login && (
            <p className={s.errorMessage}>{errors.login.message}</p>
          )}
        </div>

        <div className={s.controlWrapper}>
          {/*<label className={s.label} htmlFor="password">Пароль</label>*/}
          <div className={s.inputWrapper}>
            <input
              id="password"
              {...register('password', {required: 'Введите пароль'})}
              className={`${s.input} ${s.passwordInput}  ${errors.password ? s.redBorder : ''}`}
              type={showPassword ? "text" : "password"} placeholder="Пароль"
            />

            <button className={s.eyeIconBtn} type="button" onClick={() => setShowPassword(prev => !prev)}>
              <svg className={showPassword ? s.eyeIconMuted : ''} width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.8515 13.2479C21.9245 13.3702 21.9717 13.5051 21.9906 13.645C22.0096 13.7848 21.9997 13.9269 21.9617 14.0632C21.9237 14.1994 21.8583 14.327 21.7692 14.4388C21.6801 14.5506 21.569 14.6444 21.4423 14.7148C21.3157 14.7852 21.1759 14.8308 21.0309 14.8491C20.886 14.8673 20.7387 14.8579 20.5976 14.8212C20.4564 14.7845 20.3242 14.7214 20.2083 14.6354C20.0924 14.5494 19.9953 14.4422 19.9223 14.32L18.3615 11.6846C17.4906 12.2133 16.5517 12.6296 15.5687 12.9228L16.0584 15.7493C16.1065 16.0297 16.0373 16.3171 15.866 16.5483C15.6947 16.7794 15.4352 16.9355 15.1447 16.9821C15.0836 16.9925 15.0216 16.9976 14.9595 16.9973C14.6972 16.9971 14.4434 16.9072 14.2432 16.7437C14.0429 16.5802 13.909 16.3536 13.8653 16.104L13.3886 13.3525C12.4638 13.4513 11.5306 13.4513 10.6059 13.3525L10.1337 16.1066C10.09 16.3566 9.95586 16.5834 9.7552 16.747C9.55455 16.9105 9.30034 17.0002 9.0377 17C8.97563 17.0003 8.91367 16.9952 8.85255 16.9848C8.70867 16.9614 8.57096 16.9109 8.44731 16.8362C8.32366 16.7614 8.21647 16.6639 8.13188 16.5492C8.04729 16.4344 7.98695 16.3047 7.95431 16.1675C7.92167 16.0303 7.91737 15.8882 7.94164 15.7493L8.43135 12.9156C7.44832 12.6224 6.50936 12.2062 5.63845 11.6774L4.07769 14.32C4.00475 14.4422 3.90757 14.5494 3.79171 14.6354C3.67584 14.7214 3.54356 14.7845 3.40241 14.8212C3.26126 14.8579 3.11401 14.8673 2.96907 14.8491C2.82413 14.8308 2.68433 14.7852 2.55765 14.7148C2.43098 14.6444 2.31991 14.5506 2.2308 14.4388C2.14168 14.327 2.07625 14.1994 2.03826 14.0632C2.00027 13.9269 1.99044 13.7848 2.00936 13.645C2.02827 13.5051 2.07554 13.3702 2.14848 13.2479L3.85366 10.3758C3.27572 9.87218 2.73991 9.32524 2.25124 8.74014C2.07872 8.51809 2.00216 8.24014 2.03766 7.96473C2.07316 7.68933 2.21794 7.43795 2.44157 7.26345C2.66519 7.08896 2.95023 7.00495 3.23672 7.02911C3.52321 7.05327 3.78883 7.1837 3.97771 7.39297C5.46256 9.16715 8.06013 11.2826 12 11.2826C15.9399 11.2826 18.5374 9.16715 20.0223 7.39297C20.2081 7.17391 20.4762 7.03467 20.768 7.00565C21.0598 6.97663 21.3517 7.06018 21.5799 7.23806C21.8081 7.41595 21.9541 7.67372 21.9861 7.95513C22.0181 8.23655 21.9334 8.51874 21.7506 8.74014C21.2613 9.32531 20.7249 9.87225 20.1463 10.3758L21.8515 13.2479Z"
                  fill="#89AC3D"/>
              </svg>
            </button>
          </div>
          {errors.password && (
            <p className={s.errorMessage}>{errors.password.message}</p>
          )}
        </div>

        <Link className={s.forgotPassword} href="/forgot-password">Забыли пароль?</Link>

        <div className={s.buttons}>
          <Button className={s.loginBtn} disabled={!isValid || isPending}>
            {isPending ? <MiniSpinner/> : 'Войти'}
          </Button>
          <Button onClick={() => router.push('/registration')} className={s.registerBtn} type="button">
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default LoginForm;