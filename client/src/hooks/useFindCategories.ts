import { useLazyQuery, } from '@apollo/client'
import {GET_CATEGORIES} from '../utils/graphql/quories'
import parseSortBy from "../utils/parseSortBy"

const useFindCategories = (sortBy: string, filterText: string) => {

  const sortVariables = parseSortBy(sortBy)

  const queryVariables = {
    ...sortVariables,
    searchKeyword: filterText,
    first: 10,
  }

  const [ getSearch, { data, loading, fetchMore, ...result }] = useLazyQuery(GET_CATEGORIES, {
    variables: queryVariables,
    fetchPolicy: "no-cache",
  })

  return {
    getSearch,
    categories: data ? data.categories.edges : undefined,
    loading,
    ...result,
  }
}

export default useFindCategories