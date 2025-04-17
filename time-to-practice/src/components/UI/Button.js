const Button = (props) => {
  const clickHandler = (event) => {
    props.onClick(event);
  };
  return (
    <button
      type={props.type}
      className={`${props.className}`}
      onClick={clickHandler}
    >
      {props.name}
    </button>
  );
};

export default Button;
