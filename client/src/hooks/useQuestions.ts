import { useQuery } from '@apollo/client'
import {GET_QUESTIONS} from '../utils/graphql/quories'

const useQuestions = (id: string, regularFetch: number, initialFetch: number) => {

  const queryVariables = {
    id,
    first: initialFetch,
  }

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.category.questions.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      query: GET_QUESTIONS,
      variables: {
        after: data.category.questions.pageInfo.endCursor,
        first: regularFetch,
        id: queryVariables.id
      },
    })
  }

  const { data, loading, fetchMore, ...result } = useQuery(GET_QUESTIONS, {
    variables: queryVariables,
    fetchPolicy: "cache-and-network",
  });

  return {
    questions: data ? data.category.questions.edges : undefined,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useQuestions