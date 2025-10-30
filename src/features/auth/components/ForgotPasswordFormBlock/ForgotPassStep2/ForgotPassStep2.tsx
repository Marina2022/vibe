import s from './ForgotPassStep2.module.scss';
import React, {ChangeEvent, Dispatch, SetStateAction, startTransition, useState} from "react";
import {useRouter} from "next/navigation";
import ModalContainer from "@/features/auth/components/common/ModalContainer/ModalContainer";
import Button from "@/components-ui/Button/Button";
import OtpInput from 'react-otp-input';
import {UserBySearch} from "@/features/user/actions/types/UserBySearch";
import Badge from "@/components-ui/Badge/Badge";
import {searchUser} from "@/features/auth/actions/searchUser";
import {toast} from "sonner";


const ForgotPassStep2 = ({setStep, data, currentUser}: { currentUser: UserBySearch | null,  setStep: Dispatch<SetStateAction<number>>, data: string }) => {

  const router = useRouter();
  const [emptyError, setEmptyError] = useState(false);
  const [code, setCode] = useState('');


  const [otp, setOtp] = useState('');


  const renderInputWithValidation = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEmptyError(false)
      const { value } = e.target;

      // Проверяем, является ли введенный символ цифрой
      if (value === '' || /^[0-9]$/.test(value)) {
        // Если да, то передаем управление библиотеке
        props.onChange?.(e);
      }
      // Если нет, просто игнорируем ввод, фокус не меняется
    };

    return <input {...props} onChange={handleChange} />;
  };


  const handleConfirm = () => {
    startTransition(async () => {
      try {


        const result = await searchUser(data)

        console.log('Последний юзер = ', result.data)

        if (result.error === 'User not found') {
          toast('Пользователь не нашелся почему-то')
          return
        } else if (result.error) {
          toast.error(result.error)
          return
        }
        console.log('search result = ', result)

        if (otp === result.data.restore_code) {
          setStep(3);
        } else {
          toast.error('Неверный код')
        }



      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message);
        } else {
          toast.error('Неизвестная ошибка');
        }
      }
    })


    setStep(3);
  }

  if(!currentUser) return null

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
            onChange={setOtp}
            numInputs={6}

            placeholder={'000000'}
            inputStyle={s.otpInput}
            containerStyle={s.containerStyle}
            renderInput={renderInputWithValidation}
          />
        </div>

        {emptyError && (
          <p className={s.errorMessage}>Введите даные</p>
        )}

        <p className={s.again}>Отправить код повторно можно будет через </p>

        <div className={s.btns}>
        <Button disabled={!otp} onClick={handleConfirm} className={s.restoreBtn}>Подтвердить</Button>
        <Button className={s.cancelBtn} onClick={()=>router.back()} >Отменить</Button>
        </div>
      </div>
    </ModalContainer>
  );
};


export default ForgotPassStep2;