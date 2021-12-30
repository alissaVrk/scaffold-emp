import { DocumentNode } from "graphql";
import { createMockClient } from "mock-apollo-client";
import { MyMockApolloClient } from "test-utils";
//should work since it seems that jest creates a new require context for each spec (file)
//and it runs files in parallel, not single tests.

let mockedClient: MyMockApolloClient | undefined;

export function getApollo() {
  if (!mockedClient) {
    const client = createMockClient() as MyMockApolloClient;
    client.disableNetworkFetches = true;
    client.clearMock = clear;
    client.mockQuery = mockQuery;
    mockedClient = client;
  }
  return mockedClient;
}

function clear() {
  mockedClient = undefined;
}

function mockQuery(query: DocumentNode, data: Record<string, unknown>) {
  if (!mockedClient) {
    throw new Error(
      "how did you get here without an instance...? did you call clear after getting the apollo client?"
    );
  }
  mockedClient.setRequestHandler(query, () =>
    Promise.resolve({
      data
    })
  );
}
