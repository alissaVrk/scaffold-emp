import axios from "axios";
import { mockAccount } from "modules/account/accountTestUtils";

import { loginTestUser } from "./data/authActions";
import { ServerUserFragment, UserTokenFragment } from "./data/authDocsAndTypes";

type MockedAxios = typeof axios & {
  mockSignIn: (data: Record<string, unknown>) => void;
};

export function mockNetworkSignIn(
  userData: ServerUserFragment,
  loginData: UserTokenFragment
) {
  (axios as MockedAxios).mockSignIn({
    userInfoResponse: userData,
    loginResponse: loginData
  });
}
const DEFAULT_USER = {
  sub: "id1",
  name: "yossi",
  email: "a@w.com"
};

const DEFAULT_LOGIN = { accessToken: "1234321" };

export async function signUserIn(
  userData: Partial<ServerUserFragment>,
  accountData?: Parameters<typeof mockAccount>,
  tokenData?: UserTokenFragment
) {
  const user = { ...DEFAULT_USER, ...userData };
  const login = { ...DEFAULT_LOGIN, ...tokenData };
  mockNetworkSignIn(user, login);

  mockAccount(...(accountData || ["yossiAcc"]));
  await loginTestUser({phoneNumber: "1234", verificationCode: "123"});
}
