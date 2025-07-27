import { useContext, useActionState } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function FormModal() {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext)

  const cartTotal = cartCtx.items.reduce((totalCartAmount, item) => {
    return totalCartAmount + item.quantity * item.price;
  }, 0);

  function addToCartAction(prevFormState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const quantity = formData.get("qty");

    let errors = [];
    if (name.trim().length < 2) {
      errors.push("Please Enter valid Name");
    }
    if (!email.includes("@")) errors.push("Enter a Valid Email Address");
    if (+quantity <= 0) errors.push("Quantity must be 1 or more");

    return { errors, name, email, quantity };
  }

  const [formState, formAction, isPending] = useActionState(addToCartAction, {
    errors: [],
    name: null,
    email: null,
    quantity: 0,
  });

  //formState === null ? console.log("")  : console.log(formState);

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  return (
    <form action={formAction}>
      <p> Total Amount-{currencyFormatter.format(cartTotal)} </p>

      <Input label="Full Name" type="text" id="full-name" />
      <Input label="Email Address" type="email" id="email" />
      <Input label="Street" type="text" id="street" />
      <div className="control-row">
        <Input label="Postal Code" type="text" id="postal-code" />
        <Input label="City" type="text" id="city" />
      </div>

      <p className="modal-actions">
        <Button textOnly type="button" onClick={handleCloseCheckout}>Close</Button>

        <button>Submit Order</button>
      </p>
    </form>
  );
}
