import React from 'react';
import ModalContainer from "@/features/auth/components/common/ModalContainer/ModalContainer";
import s from "./NoMentorPopup.module.scss";
import Button from "@/components-ui/Button/Button";
import {useRouter} from "next/navigation";

const NoMentorPopup = () => {

  const router = useRouter();

  return (
    <ModalContainer>
      <div className={s.headerRow}>
        <button className={s.backBtn} onClick={() => router.back()}>
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.41406 0.707153L1.41406 8.70715L9.41406 16.707" stroke="#252526" strokeOpacity="0.8"
                  strokeWidth="2"/>
          </svg>
        </button>
        <h1 className={s.title}>Регистрация</h1>
      </div>
      <p className={s.goToMentor}>
        Чтобы зарегистрироваться, обратитесь к действующему партнёру компании. Если вам порекомендовал VIBE знакомый, свяжитесь с ним — он пришлёт ссылку и поможет с регистрацией и первым заказом.
      </p>
      <Button href="/login">Авторизация</Button>
    </ModalContainer>
  );
};

export default NoMentorPopup;