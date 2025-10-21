'use client'

import s from './BurgerMenu.module.scss';
import {useState} from "react";

const BurgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <button>

      {
        isOpen && <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9998 1.51471L1.02919 18.4853" stroke="#252526" strokeWidth="2"/>
          <path d="M17.9988 18.4853L1.02822 1.5147" stroke="#252526" strokeWidth="2"/>
        </svg>
      }


      {
        !isOpen &&  <svg className={s.menuIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4H0V6H24V4Z" fill="#252526"/>
            <path d="M24.0001 9H8.00012V11H24.0001V9Z" fill="#252526"/>
            <path d="M24.0001 19H8.00012V21H24.0001V19Z" fill="#252526"/>
            <path d="M24 14H0V16H24V14Z" fill="#252526"/>
        </svg>
      }

    </button>
  );
};

export default BurgerMenu;