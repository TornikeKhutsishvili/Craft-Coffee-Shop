import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (body, url, method = "GET") => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: body && method !== "GET" ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) throw new Error("Request failed");

      return await res.json();
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, loading, error };
};

export default useRequest;
