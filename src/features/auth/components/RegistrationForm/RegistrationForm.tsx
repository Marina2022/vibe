'use client'

import {useEffect, useState} from "react";
import {getUserById} from "@/features/user/actions/getUserById";
import {getUserBySearch} from "@/features/user/actions/getUserBySearch";
import {UserBySearch} from "@/features/user/actions/types/UserBySearch";
import MiniSpinner from "@/components-ui/miniSpinner/MiniSpinner";
import SpinnerWrapper from "@/components-ui/SpinnerWrapper/SpinnerWrapper";
import {User} from "@/features/user/actions/types/User";
import NoMentorPopup from "@/features/auth/components/RegistrationForm/NoMentorPopup/NoMentorPopup";

interface Props {
  refLink?: string,
  login?: string,
}

const RegistrationForm = ({refLink, login}: Props) => {

    console.log({refLink, login})

    const [mentor, setMentor] = useState<User | UserBySearch | string | null>(null)
    const [isLoading, setIsLoading] = useState(false);

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

    if (isLoading) return (
      <SpinnerWrapper>
        <MiniSpinner big={true}/>
      </SpinnerWrapper>
    )

    if (typeof mentor === 'string') return <NoMentorPopup />

    return (
      <div>
        {mentor && mentor.login}
      </div>
    );
  }
;

export default RegistrationForm;