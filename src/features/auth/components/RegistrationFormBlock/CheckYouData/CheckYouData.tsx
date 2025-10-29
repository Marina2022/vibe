import s from './CheckYouData.module.scss'
import {Dispatch, SetStateAction} from "react";
import {RegisterFormValues} from "@/features/auth/components/RegistrationFormBlock/RegistrationFormBlock";
import {User} from "@/features/user/actions/types/User";
import {UserBySearch} from "@/features/user/actions/types/UserBySearch";

type Props =
  {
    values: RegisterFormValues;
    setStep: Dispatch<SetStateAction<number>>;
    mentor: User | UserBySearch;
  }

const CheckYouData = ({values, setStep, mentor}:Props) => {

  console.log('values ===', values)

  return (
    <div>
      CheckYouData
    </div>
  );
};

export default CheckYouData;