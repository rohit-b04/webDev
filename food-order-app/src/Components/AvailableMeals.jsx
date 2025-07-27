import useHttp from "../hooks/useHttp.js";
import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";

const requestConfig = {};

export default function AvailableMeals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (error) {
    return <Error title="Failed To fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {isLoading ? (
        <p className="center">Wait HUNGRILY while we get your meals</p>
      ) : (
        meals.map((meal) => (
          <MealItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            description={meal.description}
            image={meal.image}
            id={meal.id}
          />
        ))
      )}
    </ul>
  );
}
