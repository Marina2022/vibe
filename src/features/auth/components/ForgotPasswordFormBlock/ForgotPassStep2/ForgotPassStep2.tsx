import s from './ForgotPassStep2.module.scss';
import React, {ChangeEvent, Dispatch, SetStateAction, useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import ModalContainer from "@/features/auth/components/common/ModalContainer/ModalContainer";
import Button from "@/components-ui/Button/Button";
import OtpInput from 'react-otp-input';
import {UserBySearch} from "@/features/user/types/UserBySearch";
import Badge from "@/components-ui/Badge/Badge";
import {searchUser} from "@/features/auth/actions/searchUser";
import {toast} from "sonner";
import Timer from "@/components-ui/Timer/Timer";
import {sendCode} from "@/features/auth/actions/sendCode";


const ForgotPassStep2 = ({setStep, data, currentUser}: {
  currentUser: UserBySearch | null,
  setStep: Dispatch<SetStateAction<number>>,
  data: string
}) => {

  const router = useRouter();
  const [emptyError, setEmptyError] = useState(false);
  const [wrongCodeError, setWrongCodeError] = useState(false);

  const [otp, setOtp] = useState('');

  const [showTimer, setShowTimer] = useState(true)

  const renderInputWithValidation = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {value} = e.target;

      // Проверяем, является ли введенный символ цифрой
      if (value === '' || /^[0-9]$/.test(value)) {
        // Если да, то передаем управление библиотеке
        props.onChange?.(e);
      }
      // Если нет, просто игнорируем ввод, фокус не меняется
    };

    return <input {...props} onChange={handleChange}/>;
  };

  const [isPending, startTransition] = useTransition();

  const handleConfirm = () => {

    if (!otp) {
      setEmptyError(true)
      return
    }

    startTransition(async () => {
      try {
        const result = await searchUser(data)

        if (result.error === 'User not found') {
          toast('Пользователь не нашелся почему-то')
          return
        } else if (result.error) {
          toast.error(result.error)
          return
        }

        if (otp === result.data.restore_code) {
          setStep(3);

        } else {
          setWrongCodeError(true)
          toast.error('Неверный код')
          return
        }

      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message);
        } else {
          toast.error('Неизвестная ошибка');
        }
      }
    })
  }

  const handleSendAgain = () => {

    startTransition(async () => {
      try {
        if (currentUser) await sendCode(currentUser.id)
        setShowTimer(true)

      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message);
        } else {
          toast.error('Неизвестная ошибка');
        }
      }
    })
  }

  if (!currentUser) return null

  return (
    <ModalContainer>

      <div className={s.scroll}>
        <div className={s.headerRow}>
          <button type="button" className={s.backBtn} onClick={() => setStep(1)}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.41406 0.707153L1.41406 8.70715L9.41406 16.707" stroke="#252526" strokeOpacity="0.8"
                    strokeWidth="2"/>
            </svg>
          </button>
          <h1 className={s.title}>Восстановление пароля</h1>
        </div>

        <div className={s.userInfo}>
          <div>
            {currentUser.first_name} {currentUser.last_name}
          </div>
          <Badge className={s.badge}>ID {currentUser.login}</Badge>
        </div>

        <label className={s.label} htmlFor="code">Код подтверждения</label>
        <div className={s.controlWrapper}>

          <OtpInput
            value={otp}
            onChange={(value) => {
              setOtp(value)
              setWrongCodeError(false)
              setEmptyError(false)
            }}
            numInputs={6}
            placeholder={'000000'}
            inputStyle={`${s.otpInput} ${wrongCodeError || emptyError ? s.redBorder : ''} `}
            containerStyle={s.containerStyle}
            renderInput={renderInputWithValidation}
          />
        </div>

        {wrongCodeError && (
          <p className={s.errorMessage}>Неверный код</p>
        )}

        {emptyError && (
          <p className={s.errorMessage}>Введите код</p>
        )}

        {
          showTimer && (
            <div className={s.again}>Отправить код повторно можно будет через&nbsp;
              <span className={s.time}>
                <Timer secondsNumber={120} onComplete={() => setShowTimer(false)}/>
              </span></div>
          )
        }

        {
          !showTimer && (
            <div onClick={handleSendAgain} className={s.sendAgain}>Отправить код повторно</div>
          )
        }

        <div className={s.btns}>
          <Button onClick={handleConfirm} className={s.restoreBtn}>Подтвердить</Button>
          <Button className={s.cancelBtn} onClick={() => router.back()}>Отменить</Button>
        </div>
      </div>
    </ModalContainer>
  );
};


export default ForgotPassStep2;