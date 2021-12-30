import { gql,InMemoryCache } from "@apollo/client";

export function getAccountIdSync(cache: InMemoryCache): string | undefined {
  //I'm sure there's a shorter way
  const account = cache.readQuery<
    undefined | { currentAccount: { id: string } }
  >({
    query: gql`
      query MyAccount {
        currentAccount {
          id
        }
      }
    `
  });
  return account?.currentAccount?.id;
}

export function getAccessTokenSync(){
  return localStorage.getItem("token");
}