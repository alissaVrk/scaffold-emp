import { InMemoryCache, useQuery } from "@apollo/client";
import { getAccessTokenSync, getAccountIdSync, getApollo } from "core"
import { useMemo } from "react";

import {
  LoginDocument,
  LoginQuery,
  UserDocument,
  UserQuery
} from "./authDocsAndTypes";

export function useAuthData() {
  const { data: userData } = useQuery<UserQuery>(UserDocument);
  const { data: loginData } = useQuery<LoginQuery>(LoginDocument);

  const res = useMemo(
    () =>
      !!userData && !!loginData
        ? { ...userData.currentUser, ...loginData.userToken }
        : undefined,
    [userData, loginData]
  );

  return res;
}

export function isUserLoggedInAndHasAccount() {
  return getAccountIdSync(getApollo().cache as InMemoryCache) && getAccessTokenSync();
}
