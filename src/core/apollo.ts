import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { getAccessTokenSync,getAccountIdSync } from "./coreAuth";

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_SERVER_URL || ""}/graphql`
});

function authorizationHeader(token: string | undefined) {
  if (!token) return undefined;
  return `Bearer ${token}`;
}
const ACCOUNT_HEADER_NAME = "x-empathy-current-account";

/* eslint-disable @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment */
const authLink = setContext((_, { headers, cache }) => {
  const accountId = getAccountIdSync(cache as InMemoryCache);
  const accessToken = getAccessTokenSync()

  if (!accessToken) {
    return headers;
  }

  return {
    headers: {
      ...headers,
      authorization: authorizationHeader(accessToken),
      [ACCOUNT_HEADER_NAME]: accountId
    }
  };
});
/* eslint-enable @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment */

//in SSR the key should come from the request context
//or we should build some dependecy injection mechanism for using Apollo.
const key = {};
const map = new WeakMap();

export function createApolloInstance() {
  const client = new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });
  map.set(key, client);
  return client;
}

export function getApollo() {
  return map.get(key) as ApolloClient<NormalizedCacheObject>;
}
