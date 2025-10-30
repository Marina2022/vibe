import ModalContainer from '../../common/ModalContainer/ModalContainer';
import s from './MessageSentToEmail.module.scss';
import React, {Dispatch, SetStateAction} from "react";

const MessageSentToEmail = ({setStep}:{setStep: Dispatch<SetStateAction<number>>;}) => {
  return (
    <ModalContainer header={false}>
      <div className={s.scroll}>
        <div className={s.headerRow}>
          <button type="button" className={s.backBtn} onClick={() => setStep(3)}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.41406 0.707153L1.41406 8.70715L9.41406 16.707" stroke="#252526" strokeOpacity="0.8"
                    strokeWidth="2"/>
            </svg>
          </button>
          <h1 className={s.title}>На ваш почтовый ящик отправлено сообщение, содержащее ссылку для подтверждения e-mail адреса</h1>
          <div className={s.step}>4/4</div>
        </div>
      </div>
      <div className={s.text}>Пожалуйста, перейдите по ссылке для завершения</div>

    </ModalContainer>
  );
};

export default MessageSentToEmail;