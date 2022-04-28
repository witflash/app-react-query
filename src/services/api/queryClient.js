import { QueryClient } from 'react-query';

import axios from 'services/api/axios';

import { API_URL } from './config';

const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(
    `${API_URL}${queryKey[0]}`,
  );
  return data;
};

export default new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
