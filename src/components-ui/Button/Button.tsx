import { ButtonHTMLAttributes } from "react";
import s from "./Button.module.scss";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, onClick, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${className || ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
