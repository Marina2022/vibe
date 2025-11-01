import s from './dashboard-page.module.scss';
import DashboardSidebar from "@/components-pages/dashboard/dashboard-main/DashboardSidebar/DashboardSidebar";
import DashboardContent from "@/components-pages/dashboard/dashboard-main/DashboardContent/DashboardContent";
import {getUser} from "@/features/auth/lib/getUser";
import {getPeriods} from "@/features/user/actions/getPeriods";
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";

const Page = async () => {

  const user = await getUser();

  const periods = await getPeriods();

  const resp2 = await fetch(`${process.env.API_URL}/period-stat?user=${user.id}&period=${periods[0].id}&&ext=1`);
  const initialCurrentPeriod = await resp2.json();

  const resp2PrevValue = await fetch(`${process.env.API_URL}/period-stat?user=${user.id}&period=${periods[1].id}&&ext=1`);
  const initialCurrentPeriodPrevValue = await resp2PrevValue.json();

  const values = Object.values(initialCurrentPeriod);
  const periodData = values[0] as PeriodStatByUser;

  const valuesPrevValue = Object.values(initialCurrentPeriodPrevValue);
  const periodDataPrevValue = valuesPrevValue[0] as PeriodStatByUser;

  const resp3 = await fetch(`${process.env.API_URL}/period-stat/${periodData.id}`);
  const statsByStatId = await resp3.json();

  const resp3PrevValue = await fetch(`${process.env.API_URL}/period-stat/${periodDataPrevValue.id}`);
  const statsByStatIdPrevValue = await resp3PrevValue.json();

  return (
    <div className="container">
      <div className={s.dashboardPageWrapper}>
        <DashboardSidebar user={user} />

        <DashboardContent statsByStatIdPrevValue={statsByStatIdPrevValue} statsByStatId={statsByStatId} initialCurrentPeriod={periodData} user={user} periods={periods} />
      </div>
    </div>
  );
};

export default Page;