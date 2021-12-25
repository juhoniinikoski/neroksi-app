import { useQuery } from '@apollo/client'
import {GET_AUTHORIZED_USER} from '../utils/graphql/quories'

const useCurrentUser = () => {

  const { data, loading, ...result } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });

  return {
    user: data ? data.authorizedUser : undefined,
    loading,
    ...result,
  };
};

export default useCurrentUser