import { ButtonHTMLAttributes } from "react";
import s from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  className?: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, href='', onClick, children, ...rest }: ButtonProps) => {

  if (href) return (
    <Link
      href={href}
      className={`${s.button} ${className || ""}`}
    >
      {children}
    </Link>
  )


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
