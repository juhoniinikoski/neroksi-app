import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../utils/graphql/quories'

const useUserCategories = () => {

  const [categories, setCategories] = useState([])

  const { error, loading } = useQuery(GET_CATEGORIES, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setCategories(data.categories)
    },
  })

  return { categories, loading, error }
}

export default useUserCategories