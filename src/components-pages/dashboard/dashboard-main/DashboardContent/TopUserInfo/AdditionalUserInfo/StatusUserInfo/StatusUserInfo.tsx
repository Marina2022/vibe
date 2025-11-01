import React from 'react';
import s from './StatusUserInfo.module.scss';
import Badge from "@/components-ui/Badge/Badge";
import {PeriodStatByUser} from "@/features/user/types/PeriodStatByUser";

const StatusUserInfo = ({currentPeriod}:{currentPeriod:PeriodStatByUser}) => {
  return (
    <div className={s.statusUserInfo}>
      <h3 className={s.text}>Статус</h3>
      <p className={s.title}>
        <span>{currentPeriod?.user?.state_name || ''}</span>
        {
          currentPeriod?.active === 1 && <Badge>Активный</Badge>
        }
      </p>
    </div>
  );
};

export default StatusUserInfo;