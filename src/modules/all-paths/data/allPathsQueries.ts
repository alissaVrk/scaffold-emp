import { useQuery } from "@apollo/client";
import { AllPathsDocument, AllPathsQuery, AllPathsQueryVariables } from "generated/graphql";

export function useAllPathsQuery() {
  const { data, loading, error } = useQuery<AllPathsQuery, AllPathsQueryVariables>(
    AllPathsDocument
  );
  return { paths: data?.paths, loading, error };
}
