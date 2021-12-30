import { account, auth, getMockedApollo } from "test-utils";

import { loginTestUser } from "../authActions";
import { UserDocument, UserQuery } from "../authDocsAndTypes";

describe("authActions", () => {
  describe("loginDefaultUser", () => {
    it("should write the user to apollo cache", async () => {
      auth.mockNetworkSignIn(
        {
          sub: "id1",
          name: "yossi",
          email: "a@w.com"
        },
        { accessToken: "1234321" }
      );

      account.mockAccount("yossiAcc");
      await loginTestUser({phoneNumber: "1234", verificationCode: "123"});

      const apollo = getMockedApollo();
      const stuff = apollo.cache.readQuery<UserQuery>({ query: UserDocument });
      expect(stuff?.currentUser?.id).toBe("id1");
    });
  });
});
