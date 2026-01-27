import { useCallback, useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const useFetch = ({ url, method = "GET" }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Request failed with status`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error fetching:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, method]);

  useEffect(() => {
    onFetch();
  }, [onFetch]);

  return {
    response,
    loading,
    error,
    refetch: onFetch,
  };
};

export default useFetch;
