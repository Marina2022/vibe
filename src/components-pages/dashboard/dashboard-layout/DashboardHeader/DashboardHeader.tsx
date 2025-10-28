'use client'

import Link from 'next/link';
import s from './DashboardHeader.module.scss';
import BurgerMenu from "@/components-pages/dashboard/dashboard-layout/DashboardHeader/BurgerMenu/BurgerMenu";
import {testAction} from "@/features/auth/actions/testAction";

const DashboardHeader = () => {

  const handleTest = async () => {
    const result = await testAction()


    console.log('result = ', result)
  }

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerWrapper}>
          <Link href="/">
            <img src="/img/header/logo.svg" alt="logo" width={208} height={36} className={s.logo}/>
          </Link>

          <button onClick={handleTest}>Test</button>
          <div className={s.buttons}>
            <div className={s.messageButtonWrapper}>
              <button>
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.375 0H3.625C2.7962 0 2.00134 0.258603 1.41529 0.71892C0.82924 1.17924 0.5 1.80356 0.5 2.45455L0.5 18H25.5V2.45455C25.5 1.80356 25.1708 1.17924 24.5847 0.71892C23.9987 0.258603 23.2038 0 22.375 0ZM3.625 1.63636H22.375C22.6513 1.63636 22.9162 1.72256 23.1116 1.876C23.3069 2.02944 23.4167 2.23755 23.4167 2.45455V3.00027L15.2104 9.44673C14.6234 9.90598 13.8286 10.1638 13 10.1638C12.1714 10.1638 11.3766 9.90598 10.7896 9.44673L2.58333 3.00027V2.45455C2.58333 2.23755 2.69308 2.02944 2.88843 1.876C3.08378 1.72256 3.34873 1.63636 3.625 1.63636ZM2.58333 16.3636V5.31818L9.31667 10.6036C10.2944 11.3697 11.619 11.7999 13 11.7999C14.381 11.7999 15.7056 11.3697 16.6833 10.6036L23.4167 5.31818V16.3636H2.58333Z"
                    fill="#252526"/>
                </svg>
              </button>
              <div className={s.messageBadge}>
                2
              </div>
            </div>
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6H0V21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V6H18ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6H8C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM22 21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V8H6V10H8V8H16V10H18V8H22V21Z"
                  fill="#252526"/>
              </svg>
            </button>
            <BurgerMenu/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;