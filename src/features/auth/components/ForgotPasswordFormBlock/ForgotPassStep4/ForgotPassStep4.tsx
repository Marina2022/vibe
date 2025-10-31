import s from './ForgotPassStep4.module.scss';
import React from "react";
import ModalContainer from "@/features/auth/components/common/ModalContainer/ModalContainer";
import Button from "@/components-ui/Button/Button";

const ForgotPassStep4 = () => {
  return (
    <ModalContainer>
      <div className={s.scroll}>
        <div className={s.headerRow}>
          <h1 className={s.title}>Ваш пароль успешно изменен</h1>
        </div>
        <Button href='/login' className={s.btn} >Войти </Button>
      </div>
    </ModalContainer>
  );
};


export default ForgotPassStep4;