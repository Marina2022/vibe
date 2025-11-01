import s from './UserCardBlock.module.scss';
import MonthDropdown from "@/components-ui/MonthDropdown/MonthDropdown";
import {Dispatch, SetStateAction, useState} from "react";
import {User} from "@/features/user/types/User";
import { PeriodStatByUser } from '@/features/user/types/PeriodStatByUser';
import {StatsPeriods} from "@/features/user/types/StatsPeriods";
import {qualCardColor} from "@/features/user/consts";

type Props = {
  user: User;
  currentPeriod: PeriodStatByUser;
  selectedMonth: number;
  setSelectedMonth: Dispatch<SetStateAction<number>>;
  periods: StatsPeriods;
}

const UserCardBlock = ({user, currentPeriod, selectedMonth, setSelectedMonth, periods}:Props) => {


  const color = qualCardColor[currentPeriod.qual_name]

  let coloredStyle

  if (color === 'purple') coloredStyle = s.purple
  if (color === 'pink') coloredStyle = s.pink
  if (color === 'orange') coloredStyle = s.orange
  if (color === 'green') coloredStyle = s.green
  if (color === 'blue') coloredStyle = s.blue


    const backgroundStyle = `${s.userCardBackground} ${coloredStyle}`;

  return (
    <div className={s.userCardBlock}>
      <div className={s.userCard + ' ' + backgroundStyle}>

        <div className={s.cardTopBlock}>
          <div className={s.cardLeftTop}>
            <div className={s.userName}>{user.first_name} {user.last_name}</div>
            <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} monthOptions={periods} triggerClassName={s.trigger} />
          </div>
          <img className={s.cardLogo} src="/img/lk/lk-main/card-logo.svg" alt="logo"/>
        </div>
        <div className={s.cardBottomBlock}>
          <div>
            <div className={s.conto}>
              Денежный счет
            </div>
            <div className={s.cardAmount}>
              {user.account_gift.balance.toLocaleString('ru-RU')} ₽
            </div>
          </div>
          <div className={s.qualif}>{currentPeriod.qual_name}</div>
        </div>
      </div>
      <div className={s.userCardBottom}>
        <div>
          <div className={s.subtitle}>Подарочный счет</div>
          <div className={s.amount}>{user.account_bonus.balance.toLocaleString('ru-RU')} ₽</div>
        </div>
        <div className={s.vibes}>
          <img className={s.vibesIcon} src="/img/lk/lk-main/v-icon.png" alt="vibes icon"/>
          <div>
            <div className={s.vibesNumber}>
              {currentPeriod.premium + currentPeriod.premium_gift}</div>
            <div className={s.vibesText}>vibes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCardBlock;