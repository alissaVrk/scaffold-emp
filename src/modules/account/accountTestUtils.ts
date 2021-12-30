import { CurrentAccountDocument, CurrentAccountIdDocument } from "generated/graphql";
import { getMockedApollo } from "test-utils/coreTestUtils";

export function mockAccount(
  id: string,
  attr?: Array<[key: string, val: string]>
) {
  const apollo = getMockedApollo();
  apollo.mockQuery(CurrentAccountDocument, {
    currentAccount: {
      id,
      accountAttributes: attr || []
    }
  });
  apollo.mockQuery(CurrentAccountIdDocument, {
    currentAccount: {
      id
    }
  });
}
