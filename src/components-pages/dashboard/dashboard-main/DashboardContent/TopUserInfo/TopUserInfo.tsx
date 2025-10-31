'use client'

import s from './TopUserInfo.module.scss';
import UserCardBlock
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/UserCardBlock/UserCardBlock";
import AdditionalUserInfo
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/AdditionalUserInfo/AdditionalUserInfo";
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";
import {User} from "@/features/user/types/User";
import {Dispatch, SetStateAction} from "react";
import {StatsPeriods} from "@/features/user/types/StatsPeriods";

type Props = {
  initialCurrentPeriod: PeriodStatByUser;
  user: User;
  periods: StatsPeriods;
  selectedMonth: number;
  setSelectedMonth: Dispatch<SetStateAction<number>>;
  currentPeriod: PeriodStatByUser;
}

const TopUserInfo = ({selectedMonth, setSelectedMonth, currentPeriod, user, periods}: Props) => {

  return (
    <div className={s.topUserInfo}>
      <UserCardBlock periods={periods} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} user={user} currentPeriod={currentPeriod} />
      <AdditionalUserInfo currentPeriod={currentPeriod} user={user} />
    </div>
  );
};

export default TopUserInfo;