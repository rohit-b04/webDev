import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({
  image,
  name,
  price,
  description,
  ...props
}) {
  const { addItem } = useContext(CartContext);
  const handleOnAdd = () => {
    const id = props.id
    const item = { image, name, price, description,id };
    addItem(item);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleOnAdd}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
