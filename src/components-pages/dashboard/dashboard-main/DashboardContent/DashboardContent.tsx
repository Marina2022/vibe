import s from './DashboardContent.module.scss';
import TopUserInfo from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/TopUserInfo";

const DashboardContent = () => {
  return (
    <div className={s.dashboardContent} >

      <TopUserInfo />

    </div>
  );
};

export default DashboardContent;