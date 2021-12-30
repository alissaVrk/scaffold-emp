import cx from "classnames";
import React, { useEffect, useRef } from "react";
import ReactPinField, { PinField } from "react-pin-field";

interface Props {
  className?: string;
  inputClassName?: string;
  onChange: (pin: string) => void;
  onComplete: (pin: string) => void;
  length: number;
  autoFocus?: boolean;
  error?: boolean;
}

export const PinInput: React.FC<Props> = ({
  onChange,
  onComplete,
  length = 6,
  error = false,
  autoFocus,
  className,
  inputClassName
}) => {
  const ref = useRef<PinField>(null);

  useEffect(() => {
    if (autoFocus) {
      ref.current?.inputs[0].focus();
    }
  }, [autoFocus]);

  return (
    <div
      className={cx(
        "self-center grid justify-center",
        {
          "animate-shake": error
        },
        className
      )}
    >
      <ReactPinField
        ref={ref}
        length={length}
        inputMode="numeric"
        validate={/\d/}
        onChange={onChange}
        onComplete={onComplete}
        className={cx(
          " bg-white mx-1 text-h2 w-10 h-14 text-center border border-plum-8 rounded focus:outline-plum caret-plum-80",
          inputClassName
        )}
      />
    </div>
  );
};
