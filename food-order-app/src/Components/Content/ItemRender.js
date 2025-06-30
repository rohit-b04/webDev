import Wrapper from "./../UI/Wrapper";
import styles from "./ItemRender.module.css";
import Button from "./../Button/Button";
import { useState, useContext } from "react";

const ItemRender = (props) => {
  //   const clickHandler = (event) => {
  //     //console.log(item);
  //   };
  const [quantity, setQuantity] = useState(0);
  //const cartHolder = useContext(CartContent)
  const addHandler = () => {
    if (quantity <= 0 || quantity > 10) {
      console.log(
        "You cannot Add ammount equal or less than 0 and more than 10"
      );
      return;
    }
    //console.log(item.name, "clicked", quantity);
    props.addToCart({item: item.name, ammount: quantity, price: item.price})
  };
  const quantityHandler = (event) => {
    setQuantity(event.target.value);

    //console.log(quantity)
  };
  const item = props.item;
  return (
    <div className="">
      <li className={styles.item}>
        <div className={`${styles.item__name}`}> {item.name}</div>

        <div>Desc Of Items</div>
        <div>{item.price}</div>
      </li>
      <div>
        <form>
          <label>amount:</label>{" "}
          <input type="number" min="1" max="10" onChange={quantityHandler} />{" "}
          <Button onClick={addHandler} className={styles.button}>
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ItemRender;
