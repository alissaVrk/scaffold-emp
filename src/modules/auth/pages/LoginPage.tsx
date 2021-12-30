import React from "react";
import {Navigate} from "react-router-dom";

import {OnboardingFlow} from "../../onboarding/onboarding";
import {LoginFlow} from "../components/login-flow/LoginFlow";
import {isUserLoggedInAndHasAccount, useAuthData} from "../data/authQueries";

export function LoginPage() {
  const authData = useAuthData();
  const isUserAuthenticated = isUserLoggedInAndHasAccount();

  if (isUserAuthenticated) {
    return <Navigate to="/welcome" />
  }

  if (authData?.accessToken) {
    return <OnboardingFlow />
  }

  return (
    <LoginFlow />
  );
}
