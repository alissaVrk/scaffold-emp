import { AllPaths } from "modules/all-paths";
import { LoginPage,ProtectedPageWrap } from "modules/auth";
import { LandingPage, LoggedInPage } from "modules/static";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route index={true} element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/landing" element={<LandingPage />} />

      <Route element={<ProtectedPageWrap />} >
        <Route path="/welcome" element={<LoggedInPage /> } />
        <Route path="/paths" element={<AllPaths />} />
      </Route>
    </Routes>
  );
};
