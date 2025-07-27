import { createContext, useEffect, useState } from "react";

// This is a context which needs to be created at the first so that we can alter values inside it later
const AvailableMealsContext = createContext({
  meals: [],
  isLoading: true,
  error: null,
});

export function AvailableMealsContextProvider({ children }) {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error("Unable to Fetch the Data");
        }

        const meals = await response.json();
        //console.log(meals);
        setAvailableMeals(meals);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }

    fetchMeals();
  }, []);

  const contextValue = {
    meals: availableMeals,
    isLoading,
    error,
  };

  return (
    <AvailableMealsContext.Provider value={contextValue}>
      {children}
    </AvailableMealsContext.Provider>
  );
}

export default AvailableMealsContext;
