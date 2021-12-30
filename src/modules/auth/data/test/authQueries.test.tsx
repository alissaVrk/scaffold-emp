import { ApolloProvider } from "@apollo/client";
import { act, renderHook } from "@testing-library/react-hooks";
import { ReactNode } from "react";
import { auth, getMockedApollo } from "test-utils";

import { useAuthData } from "../authQueries";

describe("authQueries", () => {
  beforeEach(() => {
    getMockedApollo().clearMock();
  });

  describe("useAuthData", () => {
    type hookRetType = ReturnType<typeof useAuthData>;

    it("should return undefined if no data", async () => {
      const apollo = getMockedApollo();
      const wrapper = ({ children }: { children?: ReactNode }) => (
        <ApolloProvider client={apollo}>{children}</ApolloProvider>
      );

      let data: hookRetType;
      await act(async () => {
        // eslint-disable-next-line @typescript-eslint/await-thenable
        data = await renderHook<unknown, hookRetType>(() => useAuthData(), {
          wrapper
        }).result.current;
      });

      expect(data).toBeUndefined();
    });

    it("should return user + token", async () => {
      const apollo = getMockedApollo();
      await auth.signUserIn({ sub: "myId" });

      const wrapper = ({ children }: { children?: ReactNode }) => (
        <ApolloProvider client={apollo}>{children}</ApolloProvider>
      );

      let data: hookRetType;
      await act(async () => {
        // eslint-disable-next-line @typescript-eslint/await-thenable
        data = await renderHook<unknown, hookRetType>(() => useAuthData(), {
          wrapper
        }).result.current;
      });

      expect(data).toBeDefined();
      expect(data?.id).toBe("myId");
    });
  });
});
