'use client'

import {useState, useTransition} from "react";
import {UserBySearch} from "@/features/user/actions/types/UserBySearch";
import {User} from "@/features/user/actions/types/User";
import NoMentorPopup from "@/features/auth/components/RegistrationFormBlock/NoMentorPopup/NoMentorPopup";
import ForgotPassStep1 from "@/features/auth/components/ForgotPasswordFormBlock/ForgotPassStep1/ForgotPassStep1";
import ForgotPassStep2 from "@/features/auth/components/ForgotPasswordFormBlock/ForgotPassStep2/ForgotPassStep2";
import ForgotPassStep3 from "@/features/auth/components/ForgotPasswordFormBlock/ForgotPassStep3/ForgotPassStep3";
import ForgotPassStep4 from "@/features/auth/components/ForgotPasswordFormBlock/ForgotPassStep4/ForgotPassStep4";


const ForgotPasswordFormBlock = () => {

  const [mentor, setMentor] = useState<User | UserBySearch | string | null>(null)
  const [isLoading, setIsLoading] = useState(false);

  const [step, setStep] = useState(1)
  const [data, setData] = useState('');
  const [currentUser, setCurrentUser] = useState<UserBySearch | null>(null);

  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();




  if (typeof mentor === 'string') return <NoMentorPopup/>

  console.log({data})

  return (

    <>

      {
        step === 1 && <ForgotPassStep1 setStep={setStep} data={data} setData={setData} setCurrentUser={setCurrentUser} />
      }

      {
        step === 2 && <ForgotPassStep2 setStep={setStep} data={data} currentUser={currentUser} />
      }

      {
        step === 3 && <ForgotPassStep3 setStep={setStep} data={data} currentUser={currentUser}/>
      }

      {
        step === 4 && <ForgotPassStep4/>
      }


    </>

  )}


  export default ForgotPasswordFormBlock