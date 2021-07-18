import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_QUESTIONS } from '../utils/graphql/quories'

const useQuestions = (id: number) => {

  const [questions, setQuestions] = useState([])

  const { error, loading } = useQuery(GET_QUESTIONS, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
    onCompleted: (data) => {
      setQuestions(data.findQuestions)
    },
  })

  return { questions, loading, error }
}

export default useQuestions