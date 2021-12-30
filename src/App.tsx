import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject
} from "@apollo/client";
import { CurrentUser } from "modules/auth";

import { Router } from "./Router";

function App({
  apolloClient
}: {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}) {
  return (
    <main className="min-h-screen flex-1 bg-beige">
      <ApolloProvider client={apolloClient}>
        <CurrentUser />
        <Router />
      </ApolloProvider>
    </main>
  );
}

export default App;
