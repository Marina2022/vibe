import s from './AdditionalUserInfo.module.scss';
import QualificationUserInfo
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/AdditionalUserInfo/QualificationUserInfo/QualificationUserInfo";
import TableUserInfo
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/AdditionalUserInfo/TableUserInfo/TableUserInfo";
import StatusUserInfo
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/AdditionalUserInfo/StatusUserInfo/StatusUserInfo";
import Button from "@/components-ui/Button/Button";

const AdditionalUserInfo = () => {
  return (
    <div className={s.additionalUserInfo}>
      <QualificationUserInfo />
      <TableUserInfo />
      <StatusUserInfo />
      <div className={s.buttons}>
        <Button className={s.btn}>Зарегистрировать</Button>
        <Button className={s.btn}>Реферальные ссылки</Button>
      </div>
    </div>
  );
};

export default AdditionalUserInfo;