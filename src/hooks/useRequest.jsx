import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (body, custom) => {
    setLoading(true);
    const res = await fetch(url || custom, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      const error = new Error("Network response was not ok");
      setError(error);
      throw error;
    }

    return data;
  };

  return { sendRequest, loading, error };
};

export default useRequest;
