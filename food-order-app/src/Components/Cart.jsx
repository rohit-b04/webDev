import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./UI/CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce((totalCartPrice, item) => {
    return totalCartPrice + item.price * item.quantity;
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }
  function handleCheckout() {
    //...
    userProgressCtx.showCheckout();
  }

  const isCart = userProgressCtx.progress === "cart";
  return (
    <Modal className="cart" open={isCart} onClose={isCart? handleCloseCart: null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
