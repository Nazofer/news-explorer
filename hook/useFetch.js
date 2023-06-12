import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://newsapi.org/v2/${endpoint}`,
    params: {
      ...query,
      apiKey: '92dc3b19a99f441289468d6a8aee3fad',
      language: 'en',
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setData(response.data?.articles);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
