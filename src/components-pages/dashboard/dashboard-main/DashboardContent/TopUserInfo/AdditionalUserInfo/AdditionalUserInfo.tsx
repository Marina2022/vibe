import s from './AdditionalUserInfo.module.scss';
import QualificationUserInfo
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/AdditionalUserInfo/QualificationUserInfo/QualificationUserInfo";
import TableUserInfo
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/AdditionalUserInfo/TableUserInfo/TableUserInfo";
import StatusUserInfo
  from "@/components-pages/dashboard/dashboard-main/DashboardContent/TopUserInfo/AdditionalUserInfo/StatusUserInfo/StatusUserInfo";
import Button from "@/components-ui/Button/Button";

import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";
import {User} from "@/features/user/types/User";

const AdditionalUserInfo = ({currentPeriod, user}:{currentPeriod: PeriodStatByUser, user: User}) => {

  return (
    <div className={s.additionalUserInfo}>
      <QualificationUserInfo currentPeriod={currentPeriod} />
      <TableUserInfo currentPeriod={currentPeriod} />
      <StatusUserInfo currentPeriod={currentPeriod} />
      <div className={s.buttons}>
        <Button href={`/registration/${user.login}/mentor`} className={s.btn}>Зарегистрировать</Button>
        <Button href="/dashboard/ref-links" className={s.btn}>Реферальные ссылки</Button>
      </div>
    </div>
  );
};

export default AdditionalUserInfo;