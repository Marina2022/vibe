import React from 'react';
import s from './StatusUserInfo.module.scss';
import Badge from "@/components-ui/Badge/Badge";

const StatusUserInfo = () => {
  return (
    <div className={s.statusUserInfo}>
      <h3 className={s.text}>Статус</h3>
      <p className={s.title}>
        <span>Партнер</span>
        <Badge>Активный</Badge>
      </p>
    </div>
  );
};

export default StatusUserInfo;