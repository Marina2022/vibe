import s from './TableUserInfo.module.scss';
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";

const TableUserInfo = ({currentPeriod}:{currentPeriod:PeriodStatByUser}) => {
  return (
    <div className={s.tableUserInfo}>

      <div className={s.row + ' ' + s.row1}>
        <div className={s.cell}>ЛО</div>
        <div className={s.cell + ' ' + s.centerCell}>НЛО</div>
        <div className={s.cell}>ГО</div>
      </div>

      <div className={s.row + ' ' + s.row2}>
        <div className={s.cell}>{Math.round(currentPeriod.lo)} PV</div>
        <div className={s.cell + ' ' + s.centerCell}>{Math.round(currentPeriod.nlo).toLocaleString('Ru-ru')} PV</div>
        <div className={s.cell}>{Math.round(currentPeriod.go).toLocaleString('Ru-ru')} PV</div>
      </div>

    </div>
  );
};

export default TableUserInfo;