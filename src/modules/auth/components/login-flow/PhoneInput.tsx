import { Input } from "components";
import React from "react";

import { maskPhone, stripNumbers } from "../../data/phoneUtils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeText?: (value: string) => void;
  value: string;
}

export const PhoneInput: React.FC<Props> = ({
  className,
  onChangeText,
  value,
  ...props
}) => {
  const maskedNumber = maskPhone(value).maskedNumber || "";
  const hideCountryCode = value.startsWith("+");

  const onChangeTextInternal = (text: string) => {
    let number = stripNumbers(text);
    if (!text.startsWith("+")) {
      number = `+1${number}`;
    }
    onChangeText && onChangeText(number);
  };

  return (
    <Input
      type="tel"
      name="phone"
      autoComplete="tel-national"
      placeholder="(212) 555 4236"
      className={className}
      fullWidth
      {...props}
      value={maskedNumber}
      onChange={(ev) => {
        onChangeTextInternal(ev.target.value);
      }}
      pre={
        hideCountryCode ? null : (
          <>
            <span>+1</span>
            <span className="text-body-large leading-none mx-1 relative top-[1px]">
              |
            </span>
          </>
        )
      }
    />
  );
};
