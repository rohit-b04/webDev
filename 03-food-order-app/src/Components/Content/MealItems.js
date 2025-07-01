import ItemRender from "./ItemRender";
import styles from "./MealItem.module.css";
import { useContext } from "react";
//import CartPortal from "../Cart/CartItems";

const MealItems = (props) => {
  const mealsList = [
    {
      name: "Sushi",
      price: 20,
      id: "i1",
    },
    {
      name: "Noodles",
      price: 40,
      id: "i2",
    },
    {
      name: "Soyabean Chilli",
      price: 40,
      id: "i3",
    },
    {
      name: "Veg Paneer",
      price: 40,
      id: "i4",
    },
  ];
  //const [CartContent, setCartContent] = useContext(CartPortal);
  const addToCartHandler = (item) => {
    //console.log(item);
    props.addCartItem(item);
  };
  return (
    <ul className={styles.content}>
      {mealsList.map((meal) => (
        <ItemRender item={meal} key={meal.id} addToCart={addToCartHandler} />
      ))}
    </ul>
  );
};

export default MealItems;
