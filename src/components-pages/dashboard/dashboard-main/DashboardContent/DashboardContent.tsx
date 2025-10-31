'use client'

import s from './DashboardContent.module.scss';
import TopUserInfo from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/TopUserInfo";
import NextQualification
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/NextQualification/NextQualification";
import Events from "@/components-pages/dashboard/dashboard-main/DashboardContent/Events/Events";
import News from "@/components-pages/dashboard/dashboard-main/DashboardContent/News/News";
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";
import {User} from "@/features/user/types/User";
import {StatsPeriods} from "@/features/user/types/StatsPeriods";
import {useEffect, useState} from "react";
import {getUserStatByPeriod} from "@/features/user/actions/getUserStatByPeriod";
import {StatByPeriodId} from "@/features/user/types/StatByPeriodId";

type Props = {
  initialCurrentPeriod: PeriodStatByUser;
  user: User;
  periods: StatsPeriods;
  statsByPeriod: StatByPeriodId
}

const DashboardContent = ({statsByPeriod, initialCurrentPeriod, periods, user}: Props) => {

  const [selectedMonth, setSelectedMonth] = useState(0);
  const [currentPeriod, setCurrentPeriod] = useState(initialCurrentPeriod);

  useEffect(() => {

    const getCurrentPeriodData = async () => {

      const data = await getUserStatByPeriod(periods[selectedMonth].id, user.id)

      const values = Object.values(data);
      const periodData = values[0] as PeriodStatByUser;

      setCurrentPeriod(periodData)
    }

    getCurrentPeriodData()
  }, [selectedMonth, user.id, periods]);


  return (
    <div className={s.dashboardContent}>
      <TopUserInfo
        initialCurrentPeriod={initialCurrentPeriod}
        user={user}
        periods={periods}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        currentPeriod={currentPeriod}
      />
      <NextQualification currentPeriod={currentPeriod} statsByPeriod={statsByPeriod} />

      {/*<Achievements/>*/}
      <Events/>
      <News/>
    </div>
  );
};

export default DashboardContent;