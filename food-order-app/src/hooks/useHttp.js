import { useEffect, useState, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();
  //console.log(resData);

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to fetch your request"
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  function clearData() {
    setData(initialData)
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);

      try {
        const resData = await sendHttpRequest(url, {...config, body: data});
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && (config.method === "GET" || !config.method) || !config) {
      sendRequest();
    }
  }, [sendRequest]);

  return {
    isLoading,
    error,
    data,
    sendRequest,
    clearData
  };
}
