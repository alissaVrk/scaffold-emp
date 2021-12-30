import axios from "axios";
import { DEFAULT_AXIOS_CONFIG, getApollo } from "core";
import { queryCurrentAccountId } from "modules/account";

import {
  LoginDocument,
  ServerUserFragment,
  TestUserLogin,
  UserDocument,
  UserTokenFragment
} from "./authDocsAndTypes";

function writeCurrentUser(userData: ServerUserFragment) {
  const apollo = getApollo();
  apollo.cache.writeQuery({
    query: UserDocument,
    data: {
      currentUser: {
        __typeName: "CurrentUser",
        email: userData.email,
        id: userData.sub,
        name: userData.name
      }
    }
  });
}

function writeUserToken(loginData: UserTokenFragment) {
  const apollo = getApollo();
  apollo.cache.writeQuery({
    query: LoginDocument,
    data: {
      userToken: {
        accessToken: loginData.accessToken
      }
    }
  });
}

export async function loginTestUser(userLogin: TestUserLogin) {
  const res = await axios.post<{
    userInfoResponse: ServerUserFragment;
    loginResponse: UserTokenFragment;
  }>(
    "/auth/signIn",
    userLogin,
    DEFAULT_AXIOS_CONFIG
  );

  writeCurrentUser(res.data.userInfoResponse);
  writeUserToken(res.data.loginResponse);

  localStorage.setItem("token", res.data.loginResponse.accessToken);

  const accountId = await queryCurrentAccountId();
  if (accountId) {
    // NOOP
  }

  const apollo = getApollo();
  void apollo.reFetchObservableQueries(true).catch(err => {
    console.log("some query failed", err);
  });
}

export async function logout() {
  localStorage.removeItem("token");
  return getApollo().cache.reset();
}
