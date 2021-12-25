import { useQuery } from '@apollo/client'
import {GET_COLLECTIONS} from '../utils/graphql/quories'
import parseSortBy from "../utils/parseSortBy"

const useCollections = (sortBy: string, userId: string) => {

  const sortVariables = parseSortBy(sortBy)

  const queryVariables = {
    ...sortVariables,
    userId: userId,
    first: 10,
  }

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.collections.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_COLLECTIONS,
      variables: {
        after: data.collections.pageInfo.endCursor,
        ...queryVariables,
      },
    });
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_COLLECTIONS, {
    variables: queryVariables,
    fetchPolicy: "cache-and-network",
  });

  return {
    collections: data ? data.collections.edges : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useCollections