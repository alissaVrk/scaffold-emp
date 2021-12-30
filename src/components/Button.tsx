import cx from "classnames";
import React from "react";

import { LoadingAnimation } from "./LoadingAnimation";

type ButtonVariant = "dark" | "bordered" | "light" | "bordered-light";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  className,
  fullWidth,
  disabled = false,
  loading = false,
  ...props
}) => {
  const clickable = !disabled && !loading;
  const cName = cx(
    "inline-flex text-center justify-center px-8 py-3 border-2 border-transparent text-body-small font-medium rounded-lg",
    {
      "text-beige bg-plum hover:bg-plum-80 focus:outline-plum":
        variant === "dark",
      "disabled:bg-plum-16 disabled:hover:bg-plum-16 disabled:text-white":
        variant === "dark" && disabled,
      "text-plum border-plum bg-transparent hover:bg-plum-8 active:bg-plum-16 focus:outline-plum":
        variant === "bordered",
      "disabled:border-plum-40 disabled:hover:border-plum-40 disabled:hover:bg-transparent disabled:text-plum-40":
        variant === "bordered" && disabled,
      "w-full": !!fullWidth
    },
    className
  );
  return (
    <button className={cName} disabled={!clickable} {...props}>
      {loading ? <LoadingAnimation className="w-10 h-[22px]" /> : title}
    </button>
  );
};
