import s from './Badge.module.scss';
import {ReactNode} from "react";

type BadgeProps = {
  height?: number; // ? означает, что пропс необязательный
  children: ReactNode;
  className?: string;
};

const Badge = ({className='',  height = 28, children  }: BadgeProps) => {
  return (
      <span style={{ height, borderRadius: height === 28 ? 32 : 8 }} className={`${s.badge} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
