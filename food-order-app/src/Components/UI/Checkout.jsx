import Modal from "./Modal";
import UserProgressContext from "../../store/UserProgressContext";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import Input from "./Input";
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";
import FormModal from "../FormModal";
import useHttp from "../../hooks/useHttp";
import Error from "../Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const {
    data,
    error,
    isLoading: isSending,
    sendRequest,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce((totalCartAmount, item) => {
    return totalCartAmount + item.quantity * item.price;
  }, 0);

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {}


  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button textOnly type="button" onClick={handleCloseCheckout}>
        Close
      </Button>

      <Button>Submit Order</Button>
    </>
  );

  if (isSending) actions = <span>Sending orders data...</span>;

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleCloseCheckout}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully</p>
        <p className="modal-actions">
          <Button onClick={handleCloseCheckout}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <p> Total Amount-{currencyFormatter.format(cartTotal)} </p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to Send Orders" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
