import styles from "./NavBar.module.css";

const NavBar = (props) => {
  let cartPrice = 0;

  const calculateTotalCartPrice = props.cartList.map((item) => {
    //console.log(typeof item);
    if(isNaN(item.price)) return;
    return Number((cartPrice += item.price * Number(item.quantity)));
  });
  //console.log(calculateTotalCartPrice);
  //console.log(props);
  return (
    <header className={styles.headerContainer}>
      <h3>REACTMeals - Order food</h3>
      <h4>Cart: ${isNaN(cartPrice) ? 0 : cartPrice}</h4>
    </header>
  );
};

export default NavBar;
