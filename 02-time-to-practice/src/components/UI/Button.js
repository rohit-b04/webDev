const Button = (props) => {
  const clickHandler = (event) => {
    props.onClick(event);
  };
  return (
    <button
      type={!props.type? "submit" :props.type}
      className={`${props.className}`}
      onClick={!props.onClick?null:clickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
