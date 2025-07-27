import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const { items } = useContext(CartContext);

  const progressCtx = useContext(UserProgressContext)
    

  const itemsCount = +items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0); // we use the reduce method here as we also want to take into consideration, the quantity of items thats why .length is not used here.

  function cartButtonHandler() {
    progressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Rohit Foods Orders</h1>
      </div>
      <nav>
        <Button textOnly onClick={cartButtonHandler}>
          Cart {`(${itemsCount})`}
        </Button>
      </nav>
    </header>
  );
}
