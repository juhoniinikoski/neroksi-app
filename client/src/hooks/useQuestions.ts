import { useQuery } from '@apollo/client'
import {GET_QUESTIONS} from '../utils/graphql/quories'
import parseSortBy from "../utils/parseSortBy";

const useQuestions = (sortBy: string, filterText: string, categoryId: string) => {

  const sortVariables = parseSortBy(sortBy);

  const queryVariables = {
    ...sortVariables,
    categoryId,
    searchKeyword: filterText,
    first: 2,
  };

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.questions.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_QUESTIONS,
      variables: {
        after: data.questions.pageInfo.endCursor,
        ...queryVariables,
      },
    });
  };

  const { data, loading, fetchMore, ...result } = useQuery(GET_QUESTIONS, {
    variables: queryVariables,
    fetchPolicy: "cache-and-network",
  });

  return {
    questions: data ? data.questions.edges : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useQuestions