import s from './ModalContaner.module.scss';
import {ReactNode} from "react";

const ModalContainer = ({children}  : {children: ReactNode}) => {
  return (
    <div className={s.underlay}>
      <div>header</div>
    <div className={s.modalContainer}>
      {children}

    </div>
      <div className={s.footer}>footer</div>
    </div>
  );
};

export default ModalContainer;