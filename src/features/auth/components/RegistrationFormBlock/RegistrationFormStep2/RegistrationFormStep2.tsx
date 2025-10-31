import React, {Dispatch, SetStateAction, useState} from 'react';
import {User} from "@/features/user/types/User";
import {UserBySearch} from "@/features/user/types/UserBySearch";
import {Control, Controller, FieldErrors, UseFormClearErrors, UseFormRegister, UseFormTrigger} from "react-hook-form";
import {RegisterFormValues} from "@/features/auth/components/RegistrationFormBlock/RegistrationFormBlock";
import s from "./RegistrationFormStep2.module.scss";
import Button from "@/components-ui/Button/Button";
import Badge from "@/components-ui/Badge/Badge";
import ModalContainer from "@/features/auth/components/common/ModalContainer/ModalContainer";

;
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.ru'

type Props =
  {
    trigger: UseFormTrigger<RegisterFormValues>;
    mentor: User | UserBySearch;
    setStep: Dispatch<SetStateAction<number>>;
    register: UseFormRegister<RegisterFormValues>;
    errors: FieldErrors<RegisterFormValues>;
    isValid: boolean;
    control: Control<RegisterFormValues>

    check1isChecked: boolean;
    setCheck1isChecked: Dispatch<SetStateAction<boolean>>;
    check2isChecked: boolean;
    setCheck2isChecked: Dispatch<SetStateAction<boolean>>;
    clearErrors: UseFormClearErrors<RegisterFormValues>;

  }


const RegistrationFormStep2 = ({
                                 clearErrors,
                                 trigger,
                                 mentor, setStep, register, errors, isValid, control,
                                 check1isChecked,check2isChecked, setCheck1isChecked, setCheck2isChecked
}: Props) => {


  const [check1Error, setCheck1Error] = useState(false)
  const [check2Error, setCheck2Error] = useState(false)

  console.log(check1Error)

  console.log({check1isChecked, check2isChecked})

  return (
    <ModalContainer header={false}>
      <div className={s.scroll}>
        <div className={s.headerRow}>
          <button type="button" className={s.backBtn} onClick={() => setStep(1)}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.41406 0.707153L1.41406 8.70715L9.41406 16.707" stroke="#252526" strokeOpacity="0.8"
                    strokeWidth="2"/>
            </svg>
          </button>
          <h1 className={s.title}>Регистрация</h1>
          <div className={s.step}>2/4</div>
        </div>

        <div className={s.text}>
          Вы регистрируете&nbsp;Соглашение о партнерстве
          с компанией VIBE в структуре наставника
        </div>

        <div className={s.partnerDescription}>
          <svg width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.0017 3.00345C17.0017 2.73823 17.1071 2.48388 17.2946 2.29634C17.4822 2.1088 17.7365 2.00345 18.0017 2.00345H30.0017C30.267 2.00345 30.5213 2.1088 30.7088 2.29634C30.8964 2.48388 31.0017 2.73823 31.0017 3.00345C31.0017 3.26866 30.8964 3.52302 30.7088 3.71055C30.5213 3.89809 30.267 4.00345 30.0017 4.00345H18.0017C17.7365 4.00345 17.4822 3.89809 17.2946 3.71055C17.1071 3.52302 17.0017 3.26866 17.0017 3.00345ZM30.0017 8.00345H18.0017C17.7365 8.00345 17.4822 8.1088 17.2946 8.29634C17.1071 8.48388 17.0017 8.73823 17.0017 9.00345C17.0017 9.26866 17.1071 9.52302 17.2946 9.71055C17.4822 9.89809 17.7365 10.0034 18.0017 10.0034H30.0017C30.267 10.0034 30.5213 9.89809 30.7088 9.71055C30.8964 9.52302 31.0017 9.26866 31.0017 9.00345C31.0017 8.73823 30.8964 8.48388 30.7088 8.29634C30.5213 8.1088 30.267 8.00345 30.0017 8.00345ZM30.0017 14.0034H21.0017C20.7365 14.0034 20.4822 14.1088 20.2946 14.2963C20.1071 14.4839 20.0017 14.7382 20.0017 15.0034C20.0017 15.2687 20.1071 15.523 20.2946 15.7106C20.4822 15.8981 20.7365 16.0034 21.0017 16.0034H30.0017C30.267 16.0034 30.5213 15.8981 30.7088 15.7106C30.8964 15.523 31.0017 15.2687 31.0017 15.0034C31.0017 14.7382 30.8964 14.4839 30.7088 14.2963C30.5213 14.1088 30.267 14.0034 30.0017 14.0034ZM17.9705 16.7534C18.0032 16.8807 18.0105 17.0131 17.992 17.1431C17.9735 17.2732 17.9296 17.3983 17.8627 17.5114C17.7958 17.6244 17.7074 17.7232 17.6023 17.8021C17.4973 17.8809 17.3777 17.9383 17.2505 17.9709C17.169 17.9929 17.0849 18.0038 17.0005 18.0034C16.7787 18.0036 16.5632 17.9299 16.3878 17.7942C16.2124 17.6584 16.0872 17.4682 16.0317 17.2534C15.2617 14.2609 12.2392 12.0034 9.00049 12.0034C5.76174 12.0034 2.73924 14.2597 1.96924 17.2534C1.90294 17.5104 1.73728 17.7304 1.50872 17.8652C1.28016 18 1.00742 18.0385 0.750491 17.9722C0.493562 17.9059 0.273496 17.7402 0.138705 17.5117C0.00391282 17.2831 -0.0345632 17.0104 0.031741 16.7534C0.730491 14.0397 2.76174 11.8422 5.33924 10.7534C4.34678 9.98902 3.61848 8.93313 3.25647 7.73385C2.89446 6.53457 2.91691 5.25206 3.32067 4.06618C3.72443 2.8803 4.48924 1.85055 5.50785 1.12133C6.52646 0.392106 7.74777 0 9.00049 0C10.2532 0 11.4745 0.392106 12.4931 1.12133C13.5117 1.85055 14.2766 2.8803 14.6803 4.06618C15.0841 5.25206 15.1065 6.53457 14.7445 7.73385C14.3825 8.93313 13.6542 9.98902 12.6617 10.7534C15.2405 11.8422 17.2717 14.0397 17.9705 16.7534ZM9.00174 10.0034C9.79287 10.0034 10.5662 9.76885 11.224 9.32932C11.8818 8.8898 12.3945 8.26508 12.6973 7.53418C13 6.80328 13.0792 5.99901 12.9249 5.22308C12.7705 4.44716 12.3896 3.73443 11.8302 3.17502C11.2708 2.61561 10.558 2.23465 9.7821 2.0803C9.00618 1.92596 8.20191 2.00518 7.47101 2.30793C6.7401 2.61068 6.11539 3.12337 5.67586 3.78117C5.23634 4.43896 5.00174 5.21232 5.00174 6.00345C5.00174 7.06431 5.42317 8.08173 6.17331 8.83187C6.92346 9.58202 7.94088 10.0034 9.00174 10.0034Z"
              fill="#B8E05F"/>
          </svg>

          <div>
            {mentor.first_name} {mentor.last_name}
          </div>
          <Badge className={s.idBadge}>ID {mentor.login}</Badge>
        </div>

        <div className={s.controlWrapper}>
          <div className={s.inputWrapper}>
            <input
              {...register('email', {
                required: 'Введите e-mail',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Некорректный e-mail',
                },
              })}
              onChange={(e) => {
                clearErrors('email'); // убираем ошибку при вводе
              }}
              className={`${s.input}  ${errors.email ? s.redBorder : ''}`}
              type="text" placeholder="E-mail"
            />
          </div>

          {errors.email && (
            <p className={s.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        <div className={s.controlWrapper}>
          <div className={s.inputWrapper}>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Введите номер телефона',
                minLength: {value: 10, message: 'Слишком короткий номер'},
              }}
              render={({field}) => (
                <Cleave
                  {...field}
                  options={{
                    // prefix: '+7',
                    phone: true,
                    phoneRegionCode: 'RU',

                    blocks: [1, 3, 3, 4],       // 1 цифра, затем 3-3-4
                    delimiters: [' ', ' ', ' '],
                    numericOnly: true,
                  }}
                  className={`${s.input} ${errors.phone ? s.redBorder : ''}`}
                  placeholder="+7 000 000 00 00"

                  onChange={(e) => {
                    field.onChange(e.target.value)
                    clearErrors('phone')
                  }} // сохраняем "чистое" значение без маски
                />
              )}
            />
          </div>

          {errors.phone && (
            <p className={s.errorMessage}>{errors?.phone?.message}</p>
          )}
        </div>

        <div className={s.controlWrapper}>
          <div className={s.inputWrapper}>
            <input
              {...register('city', {required: 'Введите город'})}
              onChange={(e) => {
                clearErrors('city'); // убираем ошибку при вводе
              }}
              className={`${s.input}  ${errors.city ? s.redBorder : ''}`}
              type="text" placeholder="Введите город"
            />
          </div>

          {errors.city && (
            <p className={s.errorMessage}>{errors.city.message}</p>
          )}
        </div>

        <div className={s.checkboxBlock} onClick={() => setCheck1isChecked(prev=>!prev)} >
          <div className={check1isChecked ? s.checkboxChecked : check1Error ? `${s.checkbox} ${s.redBorder}` : s.checkbox}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="#252526" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={s.checkboxText}>Принимаю условия <a href="">Правил дистанционной торговли</a></div>
        </div>

        <div className={s.checkboxBlock} onClick={() => setCheck2isChecked(prev=>!prev)}>

            <div className={check2isChecked ? s.checkboxChecked : check2Error ? `${s.checkbox} ${s.redBorder}` : s.checkbox}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="#252526" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.766846 4.36685L3.30653 6.76685L8.76685 0.766846" stroke="black" strokeOpacity="0.2" strokeWidth="1.5338" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={s.checkboxText}>Согласен с <a href="">Политикой конфиденциальности</a></div>
        </div>

        <Button onClick={
          () => {
            if (!isValid) {
              trigger()

              if (!check1isChecked ) {
                setCheck1Error(true)
              }

              if (!check2isChecked ) {
                setCheck2Error(true)
              }
              return
            }

            if (!check1isChecked ) {
              setCheck1Error(true)
              return
            }

            if (!check2isChecked ) {
              setCheck2Error(true)
              return
            }


            setStep(3)
          }

        } type="button" className={s.continueBtn} >
          Продолжить
        </Button>
      </div>
    </ModalContainer>
  );
};

export default RegistrationFormStep2;