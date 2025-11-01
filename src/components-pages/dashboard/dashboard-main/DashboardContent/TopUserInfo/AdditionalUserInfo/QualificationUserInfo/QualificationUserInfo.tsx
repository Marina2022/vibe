import s from './QualificationUserInfo.module.scss';
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";

const QualificationUserInfo = ({currentPeriod}:{currentPeriod:PeriodStatByUser}) => {
  return (
    <div className={s.qualificationUserInfo}>
      <h3 className={s.title}>{currentPeriod.qual_name}</h3>
      <p className={s.text}>Квалификация</p>
    </div>
  );
};

export default QualificationUserInfo;