'use client'

import {useEffect, useState, useTransition} from "react";
import {getUserById} from "@/features/user/actions/getUserById";
import {getUserBySearch} from "@/features/user/actions/getUserBySearch";
import {UserBySearch} from "@/features/user/actions/types/UserBySearch";
import MiniSpinner from "@/components-ui/miniSpinner/MiniSpinner";
import SpinnerWrapper from "@/components-ui/SpinnerWrapper/SpinnerWrapper";
import {User} from "@/features/user/actions/types/User";
import NoMentorPopup from "@/features/auth/components/RegistrationFormBlock/NoMentorPopup/NoMentorPopup";
import RegistrationForm from "@/features/auth/components/RegistrationFormBlock/RegistrationForm/RegistrationForm";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {registerUser} from "@/features/auth/actions/registerUser";
import CheckYouData from "@/features/auth/components/RegistrationFormBlock/CheckYouData/CheckYouData";
import s from './RegistrationFormBlock.module.scss'
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import RegistrationFormStep2
  from "@/features/auth/components/RegistrationFormBlock/RegistrationFormStep2/RegistrationFormStep2";

interface Props {
  refLink?: string,
  login?: string,
}

export type RegisterFormValues = {
  last_name: string;
  first_name: string;
  pat_name: string;
  email: string;
  phone: string;
  city: string;
  birthday: Date;
};


const RegistrationFormBlock = ({refLink, login}: Props) => {

    const [mentor, setMentor] = useState<User | UserBySearch | string | null>(null)
    const [isLoading, setIsLoading] = useState(false);

    const [step, setStep] = useState(1)

    useEffect(() => {
      let finalRefLink: string | null = null;

      if (refLink) {
        localStorage.setItem('ref-link', refLink);
        finalRefLink = refLink;
      }

      if (!refLink && !login) {
        const lsRefLink = localStorage.getItem('ref-link');
        if (lsRefLink) finalRefLink = lsRefLink;
      }

      const getData = async () => {
        setIsLoading(true); // старт загрузки
        try {
          if (finalRefLink) {
            const mentorData = await getUserById(finalRefLink);
            setMentor(mentorData);
          }

          if (login) {
            const mentorData = await getUserBySearch(login);
            setMentor(mentorData);
          }

          if (!finalRefLink && !login) {
            setMentor('absent');
          }

        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false); // конец загрузки
        }
      };

      getData();

    }, [login, refLink]);


    const {register, handleSubmit, formState: {errors, isValid}, watch, control} = useForm<RegisterFormValues>({mode: 'onChange'});
    const [error, setError] = useState('');
    const [isPending, startTransition] = useTransition();

    const allValues = watch()

    const onSubmit = (data: RegisterFormValues) => {

      console.log('onSubmit')

      setError('');
      startTransition(async () => {
        try {

          const result = await registerUser(data);

          //todo - потом вернуть

          // if (result.error) {
          //   toast.error(result?.error)
          // }
          //
          // if (result.error) {
          //   setError(result.error);
          //   return;
          // }

        } catch (e: unknown) {
          if (e instanceof Error) {
            setError(e.message);
          } else {
            setError('Неизвестная ошибка');
          }
        }
      });
    };


    if (isLoading) return (
      <SpinnerWrapper>
        <MiniSpinner big={true}/>
      </SpinnerWrapper>
    )

    if (typeof mentor === 'string') return <NoMentorPopup/>

    if (mentor)
      return (

        <>
          <div style={{height: 200}}>header</div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {
              step === 1 &&
              <RegistrationForm mentor={mentor} setStep={setStep} register={register} errors={errors} isValid={isValid} control={control} />
            }

            {
              step === 2 && <RegistrationFormStep2 control={control} mentor={mentor} setStep={setStep} register={register} errors={errors} isValid={isValid}/>
            }

            {
              step === 3 && <CheckYouData mentor={mentor} values={allValues} setStep={setStep}/>
            }
          </form>

          <div style={{height: 200}}>footer</div>
        </>

      );
  }
;

export default RegistrationFormBlock;