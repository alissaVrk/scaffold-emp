import { PinInput } from "components";
import { useState } from "react";
import { Helmet } from "react-helmet";

import { formatPhoneNumber } from "../../data/phoneUtils/phoneUtils";

export function LoginPinView({onSubmit, loginError, phoneNumber}: {
  onSubmit: (verificationCode: string) => void,
  phoneNumber: string,
  loginError?: string
}) {
  const [error, setError] = useState<string | undefined>(undefined);
  const currentError = error || loginError;

  return (
    <div className="container overflow-hidden flex flex-col p-8 items-center">
      <Helmet>
        <title>Enter the code</title>
      </Helmet>
      <h3 className="text-h1">Enter the code you received</h3>
      <h3 className="mt-2 text-body-large text-center">
        We sent a verification code to{" "}
        <span className="whitespace-nowrap">
          {formatPhoneNumber(phoneNumber)}
        </span>
        .
      </h3>
      <PinInput
        autoFocus
        className="mt-4"
        onComplete={onSubmit}
        length={6}
        onChange={() => setError(undefined)}
        error={!!error}
      />
      {currentError && (
        <p className="text-center text-error-red text-body-small mt-4">
          {currentError}
        </p>
      )}
      <p className="mt-2 text-plum-80 text-body-tiny">Didn’t get a text?</p>
      <hr />
    </div>
  );
}
