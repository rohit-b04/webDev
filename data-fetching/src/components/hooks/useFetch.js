import { useEffect,useState } from "react";


export function useFetch(fetchUserData, initialState) {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
    const [userData, setUserData] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        setUserData(userData);
        setError({
          message: error.message || "Error fetchging the user places data",
        });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchUserData]);

  return {isFetching, error, userData, setUserData}
}
