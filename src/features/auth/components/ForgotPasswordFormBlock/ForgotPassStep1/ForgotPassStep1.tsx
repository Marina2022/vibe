import s from './ForgotPassStep1.module.scss';
import React, {Dispatch, SetStateAction, useState, useTransition} from "react";
import ModalContainer from "@/features/auth/components/common/ModalContainer/ModalContainer";
import {useRouter} from "next/navigation";
import Button from "@/components-ui/Button/Button";
import {searchUser} from "@/features/auth/actions/searchUser";
import {toast} from "sonner";
import {UserBySearch} from "@/features/user/types/UserBySearch";
import MiniSpinner from "@/components-ui/miniSpinner/MiniSpinner";
import {sendCode} from "@/features/auth/actions/sendCode";

type Props = {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
  setCurrentUser: Dispatch<SetStateAction<UserBySearch | null>>;
}

const ForgotPassStep1 = ({setStep, setData, data, setCurrentUser}: Props) => {

  const router = useRouter();

  const [emptyError, setEmptyError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleContinue = async () => {
    if (!data) {
      setEmptyError(true);
      return;
    }


    startTransition(async () => {
      try {
        const result = await searchUser(data)

        if (result.error === 'User not found') {
          setNotFoundError(true);
          return
        } else if (result.error) {
          toast.error(result.error)
          return
        }

        // сетаем юзера на уровне выше
        setCurrentUser(result.data)

        const sendResult = await sendCode(result.data.id)

        setStep(2);

      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message);
        } else {
          toast.error('Неизвестная ошибка');
        }
      }
    })
  }

  return (
    <ModalContainer>
      <div className={s.scroll}>
        <div className={s.headerRow}>
          <button type="button" className={s.backBtn} onClick={() => router.back()}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.41406 0.707153L1.41406 8.70715L9.41406 16.707" stroke="#252526" strokeOpacity="0.8"
                    strokeWidth="2"/>
            </svg>
          </button>
          <h1 className={s.title}>Восстановление пароля</h1>
        </div>
        <div className={s.controlWrapper}>
          <div className={s.inputWrapper}>
            <input
              onChange={(e) => {
                setNotFoundError(false);
                setData(e.target.value);
                setEmptyError(false);
              }}
              value={data}
              id="data"
              className={`input  ${emptyError ? 'redBorder' : ''}`}
              type="text" placeholder="ID / E-mail / Номер телефона"
            />
          </div>

          {emptyError && (
            <p className='errorMessage'>Введите даные</p>
          )}
          {notFoundError && (
            <p className='errorMessage'>Такого аккаунта не существует</p>
          )}
        </div>

        <Button
          type="button"
          disabled={emptyError || isPending} // обычно дизейблим и при загрузке
          onClick={handleContinue}
          className={s.restoreBtn}
        >
          {isPending ? <MiniSpinner/> : 'Получить код подтверждения'}
        </Button>
      </div>
    </ModalContainer>
  );
};

export default ForgotPassStep1;