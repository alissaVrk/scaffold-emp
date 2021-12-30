import cx from "classnames";
import { Button } from "components";
import { FormEvent, useState } from "react";

import { isPhoneValid, isTestNumber } from "../../data/phoneUtils";
import { PhoneInput } from "./PhoneInput";

export function LoginPhoneView({onSubmit, initialValue}:
  {
    onSubmit: (phoneNumber: string) => void,
    initialValue: string
  }) {
  const [error, setError] = useState<string | undefined>(undefined);
  const [phoneNumber, setPhoneNumber] = useState(initialValue);

  const onChangeText = (value: string) => {
    setError(undefined);
    setPhoneNumber(value);
  };

  const submit = (ev: FormEvent) => {
    setError(undefined);
    ev.preventDefault();
    const valid = isTestNumber(phoneNumber) || isPhoneValid(phoneNumber);
    if (!valid) {
      setError("Invalid phone number");
      return;
    }
    onSubmit(phoneNumber);
  };

  return (
    <div className="container overflow-hidden flex flex-col p-8 items-center">
      <h3 className="text-h1">Get Started</h3>
      <h3 className="mt-2 text-body-large text-center">
        Enter your phone number to sign in or create a new account.{" "}
      </h3>
      <form onSubmit={submit}>
        <PhoneInput
          autoFocus
          className={cx("mt-8", { "animate-shake": error })}
          onChangeText={onChangeText}
          value={phoneNumber}
          data-testid="phone-input"
        />
        {error && (
          <p className="text-center text-error-red text-body-small mt-2">
            {error}
          </p>
        )}
        <p className="mt-2 text-plum-80 text-body-tiny">
          We will send a text with a verification code.
        </p>
        <Button
          data-testid="submit-button"
          type="submit"
          title="Next"
          variant="dark"
          fullWidth
          className="mt-8"
        />
      </form>
    </div>
  );
}
