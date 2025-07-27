import { currencyFormatter } from "../../util/formatting";

export default function CartItem({ name, quantity, price, ...props }) {


  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={props.onDecrease}>-</button>
        <span>QTY</span>
        <button onClick={props.onIncrease}>+</button>
      </p>
    </li>
  );
}
