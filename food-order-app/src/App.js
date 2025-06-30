import ItemRender from "./Components/Content/ItemRender";
import MealItems from "./Components/Content/MealItems";
import NavBar from "./Components/Header/NavBar";
import React, { createContext, useState } from "react";
import CartPortal from "./Components/Cart/CartItems";

function App() {
  // const renderList = mealsList.map((meal) => (
  //   <ItemRender itemName={meal.name} itemPrice={meal.price} />
  // ));

  // const renderItems = mealsList.map(meal=> (
  //   <ItemRender item = {meal} />
  // ))
  const [CartContent, setCartContent] = useState([
    {
      cartItems: "",
      quantity: 1,
    },
  ]);
  const cartItemHandler = (cartItem) => {
    console.log(cartItem);
    setCartContent((prevState) => {
      return [
        ...prevState,
        { cartItems: cartItem.item, quantity: cartItem.ammount, price: cartItem.price },
      ];
    });
  };
  return (
    <>
      <CartPortal.Provider value={[CartContent, setCartContent]}>
        <NavBar cartList={CartContent} />
        {/*renderItems*/}
        <MealItems addCartItem={cartItemHandler} />
      </CartPortal.Provider>
    </>
  );
}

export default App;
