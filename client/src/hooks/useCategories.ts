import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../utils/graphql/quories'

const useRepositories = () => {

  const [categories, setCategories] = useState([])

  const { error, loading } = useQuery(GET_ALL_CATEGORIES, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setCategories(data.allCategories)
    },
  })

  return { categories, loading, error }
}

export default useRepositories