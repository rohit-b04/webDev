import { createContext, useContext, useState } from "react";
import ItemRender from "../Content/ItemRender";

const CartPortal = createContext();
// const CartItems = (props) => {
//   const [CartContent, setCartContent] = useState({
//     cartItems: "",
//     quantity: 1,
//   });
  
  //setCartContent(props.cart)
//};
export default CartPortal;
