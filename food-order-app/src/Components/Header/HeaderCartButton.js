import Button from "../Button/Button";
const HeaderCartButton = (props) => {
  const clickHandler = () => {
    console.log(props);
  };
  return (
    <Button className="button" onClick={clickHandler}>
      <span>CI</span>
      <span>Your Cart:</span>{" "}
      <span> {isNaN(props.cartQuantity) ? 0 : props.cartQuantity}</span>
    </Button>
  );
};

export default HeaderCartButton;