import s from './ModalContaner.module.scss';
import {ReactNode} from "react";

const ModalContainer = ({children, header=true}: { children: ReactNode, header?: boolean }) => {
  return (
    <div>
      <div className={s.underlay}>
        {
          header && <div className={s.header}>
            <img className={s.logo} src="/img/footer/footerLogo.svg" alt=""/>
          </div>
        }


        <div className={s.modalContainer}>
          {children}
        </div>

        {
          header && <div className={s.footer}>ООО &#34;ВАЙБ&#34; г. Новосибирск</div>
        }

      </div>
    </div>
  );
};

export default ModalContainer;