import cx from "classnames";
import React, { ReactNode } from "react";

interface Props extends React.PropsWithRef<React.InputHTMLAttributes<HTMLInputElement>> {
  fullWidth?: boolean;
  inputClassName?: string;
  pre?: ReactNode;
  disabled?: boolean;
}

export const Input: React.FC<Props> = ({
  disabled,
  fullWidth,
  className,
  inputClassName,
  pre,
  ...props
}) => {
  return (
    <div
      className={cx(
        "bg-white rounded py-4 px-6 focus-within:outline-blue text-body-standard flex flex-row items-center",
        { "w-full max-w-[320px]": fullWidth },
        { "opacity-50": disabled },
        className
      )}
    >
      {pre}
      <input
        className={cx(
          "outline-none placeholder-plum-40 disabled:bg-transparent",
          inputClassName
        )}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};
