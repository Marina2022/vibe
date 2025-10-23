import s from './DashboardContent.module.scss';
import TopUserInfo from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/TopUserInfo";
import NextQualification
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/NextQualification/NextQualification";
import Achievements from "@/components-pages/dashboard/dashboard-main/DashboardContent/Achievements/Achievements";
import Events from "@/components-pages/dashboard/dashboard-main/DashboardContent/Events/Events";
import News from "@/components-pages/dashboard/dashboard-main/DashboardContent/News/News";

const DashboardContent = () => {
  return (
    <div className={s.dashboardContent} >

      <TopUserInfo />
      <NextQualification/>
      <Achievements/>
      <Events />
      <News/>

    </div>
  );
};

export default DashboardContent;