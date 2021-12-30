import { getApollo } from "core";
import { DocumentNode } from "graphql";
import { MockApolloClient } from "mock-apollo-client";

export type MyMockApolloClient = MockApolloClient & {
  clearMock: () => void;
  mockQuery: (query: DocumentNode, data: Record<string, unknown>) => void;
};

export function getMockedApollo() {
  return getApollo() as MyMockApolloClient;
}
