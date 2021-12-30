import * as Sentry from "@sentry/react";
import { Header } from "components";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {useLocation, useNavigate} from "react-router-dom";

import { loginTestUser } from "../../data/authActions";
import { LoginPhoneView } from "./LoginPhoneView";
import { LoginPinView } from "./LoginPinView";

type LoginLocationState = {
  isProtected?: boolean;
} | null;

export function LoginFlow() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string>();
  const [showPhoneScreen, setShowPhoneScreen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as LoginLocationState;

  const submitPhoneNumber = (phoneNumber: string) => {
    Sentry.captureMessage("submitting phone number");
    setPhoneNumber(phoneNumber);
    setShowPhoneScreen(false);
  };

  const login = async (verificationCode: string) => {
    if (!phoneNumber) {
      throw new Error("you have to set the phone number first");
    }
    try {
      await loginTestUser({ phoneNumber, verificationCode });
      if (locationState?.isProtected) {
        navigate(-1);
      } else {
        navigate("/welcome");
      }
    } catch (err) {
      setError(`could not login user with phone number ${phoneNumber}`);
    }
  };

  const onBack = showPhoneScreen ? (() => {
    setShowPhoneScreen(true);
    setError(undefined);
  }) : undefined

  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Header
        onBack={onBack}
        onClose={() => navigate("/landing")}
      />
      {showPhoneScreen ? (
        <LoginPhoneView
          onSubmit={submitPhoneNumber}
          initialValue={phoneNumber}
        />
      ) : (
        <LoginPinView
          onSubmit={login}
          phoneNumber={phoneNumber}
          loginError={error}
        />
      )}
    </>
  );
}
