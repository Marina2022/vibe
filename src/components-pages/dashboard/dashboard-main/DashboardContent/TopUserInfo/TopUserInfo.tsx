import s from './TopUserInfo.module.scss';
import UserCardBlock
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/UserCardBlock/UserCardBlock";
import AdditionalUserInfo
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/AdditionalUserInfo/AdditionalUserInfo";

const TopUserInfo = async() => {

  return (
    <div className={s.topUserInfo}>
      <UserCardBlock/>
      <AdditionalUserInfo />
    </div>
  );
};

export default TopUserInfo;