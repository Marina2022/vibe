import s from './TableUserInfo.module.scss';

const TableUserInfo = () => {
  return (
    <div className={s.tableUserInfo}>

      <div className={s.row + ' ' + s.row1}>
        <div className={s.cell}>ЛО</div>
        <div className={s.cell + ' ' + s.centerCell}>НЛО</div>
        <div className={s.cell}>ГО</div>
      </div>

      <div className={s.row + ' ' + s.row2}>
        <div className={s.cell}>45 PV</div>
        <div className={s.cell + ' ' + s.centerCell}>400 PV</div>
        <div className={s.cell}>500 PV</div>
      </div>

    </div>
  );
};

export default TableUserInfo;