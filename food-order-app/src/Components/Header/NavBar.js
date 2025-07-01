import styles from "./NavBar.module.css";
import mealsImage from "./../../Assets/meals.jpg";
import Button from "../Button/Button";
import HeaderCartButton from "./HeaderCartButton";

const NavBar = (props) => {
  let cartPrice = 0;
  let cartQuantity = 0;
  const calculateTotalCartPrice = props.cartList.map((item) => {
    //console.log(typeof item);
    if (isNaN(item.price)) return;
    cartQuantity += Number(item.quantity);
    return Number((cartPrice += item.price * Number(item.quantity)));
  });
  //console.log(calculateTotalCartPrice);
  //console.log(props);
  const clickHandler = () => {
    console.log(props.cartList);
  };
  return (
    <>
      <header className={styles.headerContainer}>
        <h3>REACTMeals - Order food</h3>
        <HeaderCartButton cartQuantity={cartQuantity} />
        
      </header>
      <div>
        <img src={mealsImage} alt="The image of meals" />
      </div>
    </>
  );
};

export default NavBar;
