import { ApolloProvider } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import {
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { AllPathsDocument } from "generated/graphql";
import { getMockedApollo } from "test-utils";

import { AllPaths } from "./AllPaths";

describe("AllPaths", () => {
  it("should render loading.. if no data - there is error", () => {
    render(
      <MockedProvider>
        <AllPaths />
      </MockedProvider>
    );

    const element = screen.getByTestId("loading");
    expect(element).toHaveTextContent("loading...");
  });

  it("should renders paths", async () => {
    const apollo = getMockedApollo();
    apollo.mockQuery(AllPathsDocument, {
      paths: [
        {
          id: "1",
          name: "Yossi",
          __typename: "Path"
        },
        {
          id: "2",
          name: "Moshe",
          __typename: "Path"
        }
      ]
    });

    render(
      <ApolloProvider client={apollo}>
        <AllPaths />
      </ApolloProvider>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    const element = screen.getByText("Yossi");
    expect(element).toHaveTextContent("Yossi");
  });
});
