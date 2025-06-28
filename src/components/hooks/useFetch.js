// client/src/hooks/useFetch.js

import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url, options = {}, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (overrideUrl = url) => {
    setLoading(true);
    try {
      const response = await axios.get(overrideUrl, options);
      setData(response.data);
      setError(null);
    } catch (err) {
      console.error("❌ useFetch error:", err);
      setError(
        err.response?.data?.message ||
        err.message ||
        'Something went wrong while fetching data.'
      );
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    if (autoFetch) fetchData();
  }, [fetchData, autoFetch]);

  return {
    data,
    loading,
    error,
    refetch: () => fetchData(),
    isEmpty: !loading && !data,
  };
};

export default useFetch;
