import { useQuery } from '@apollo/client'
import {GET_QUESTIONS} from '../utils/graphql/quories'

export const useCategoryQuestions = (categoryId: string, regularFetch: number, initialFetch: number) => {

  const queryVariables = {
    categoryId,
    first: initialFetch,
  }

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.questions.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      query: GET_QUESTIONS,
      variables: {
        after: data.questions.pageInfo.endCursor,
        first: regularFetch,
        categoryId: categoryId
      },
    })
  }

  const { data, loading, fetchMore, ...result } = useQuery(GET_QUESTIONS, {
    variables: queryVariables,
    fetchPolicy: "cache-and-network",
  })

  return {
    questions: data ? data.questions.edges : undefined,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  }
}

export const useCollectionQuestions = (collectionId: string, regularFetch: number, initialFetch: number) => {

  const queryVariables = {
    collectionId,
    first: initialFetch,
  }

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.questions.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      query: GET_QUESTIONS,
      variables: {
        after: data.questions.pageInfo.endCursor,
        first: regularFetch,
        collectionId
      },
    })
  }

  const { data, loading, fetchMore, ...result } = useQuery(GET_QUESTIONS, {
    variables: queryVariables,
    fetchPolicy: "cache-and-network",
  })

  return {
    questions: data ? data.questions.edges : undefined,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  }
}