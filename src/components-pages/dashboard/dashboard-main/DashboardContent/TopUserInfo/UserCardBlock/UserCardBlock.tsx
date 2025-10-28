'use client'

import s from './UserCardBlock.module.scss';
import MonthDropdown from "@/components-ui/MonthDropdown/MonthDropdown";
import {useState} from "react";
import {getLastMonths} from "@/utils/lk-utils/common-lk-utils";

const UserCardBlock = () => {

  const backgroundStyle = s.userCardBackground;
  const monthOptions = getLastMonths(6);
  const [selectedMonth, setSelectedMonth] = useState(monthOptions[0]);

  return (
    <div className={s.userCardBlock}>
      <div className={s.userCard + ' ' + backgroundStyle}>

        <div className={s.cardTopBlock}>
          <div className={s.cardLeftTop}>
            <div className={s.userName}>Иванов Иван</div>
            <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} monthOptions={monthOptions} triggerClassName={s.trigger} />
          </div>
          <img className={s.cardLogo} src="/img/lk/lk-main/card-logo.svg" alt="logo"/>
        </div>
        <div className={s.cardBottomBlock}>
          <div>
            <div className={s.conto}>
              Денежный счет
            </div>
            <div className={s.cardAmount}>
              15 990 ₽
            </div>
          </div>
          <div className={s.qualif}>Beginner  I</div>
        </div>
      </div>
      <div className={s.userCardBottom}>
        <div>
          <div className={s.subtitle}>Подарочный счет</div>
          <div className={s.amount}>4 990 ₽</div>
        </div>
        <div className={s.vibes}>
          <img className={s.vibesIcon} src="/img/lk/lk-main/v-icon.png" alt="vibes icon"/>
          <div>
            <div className={s.vibesNumber}>290,4</div>
            <div className={s.vibesText}>vibes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCardBlock;