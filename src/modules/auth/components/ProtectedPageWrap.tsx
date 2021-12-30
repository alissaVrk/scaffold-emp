import { Navigate, Outlet } from "react-router-dom"

import { isUserLoggedInAndHasAccount } from "../data/authQueries";

export function ProtectedPageWrap() {
  const isUserAuthenticated = isUserLoggedInAndHasAccount();

  if (!isUserAuthenticated) {
    return <Navigate to="/login" state={{ isProtected: true }}/>
  }

  return <Outlet />;
}
