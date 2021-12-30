import { getApollo } from "core";
import { CurrentAccountDocument, CurrentAccountIdDocument, CurrentAccountIdQuery,CurrentAccountQuery } from "generated/graphql";

export const queryCurrentAccount = async () => {
  const accountResults = await getApollo().query<CurrentAccountQuery>({
    query: CurrentAccountDocument
  });

  return accountResults.data?.currentAccount;
};

export const queryCurrentAccountId = async () => {
  const queryResults = await getApollo().query<CurrentAccountIdQuery>({
    query: CurrentAccountIdDocument
  });

  return queryResults.data?.currentAccount?.id;
}