import s from './Badge.module.scss';
import {ReactNode} from "react";

type BadgeProps = {
  height?: number; // ? означает, что пропс необязательный
  children: ReactNode;
};

const Badge = ({ height = 28, children  }: BadgeProps) => {
  return (
    <div style={{ height, borderRadius: height === 28 ? 32 : 8 }} className={s.badge}>
      {children}
    </div>
  );
};

export default Badge;
