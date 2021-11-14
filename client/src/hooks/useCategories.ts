import { useQuery } from '@apollo/client'
import {GET_CATEGORIES} from '../utils/graphql/quories'
import parseSortBy from "../utils/parseSortBy"

// const useCategories = (sortBy: any, filterText: string) => {
const useCategories = (sortBy: string, filterText: string) => {

  const sortVariables = parseSortBy(sortBy);

  const queryVariables = {
    ...sortVariables,
    searchKeyword: filterText,
    first: 2,
  };

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.categories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_CATEGORIES,
      variables: {
        after: data.categories.pageInfo.endCursor,
        ...queryVariables,
      },
    });
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_CATEGORIES, {
    variables: queryVariables,
    fetchPolicy: "cache-and-network",
  });

  return {
    categories: data ? data.categories.edges : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useCategories