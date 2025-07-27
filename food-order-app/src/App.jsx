import { AvailableMealsContextProvider } from "./Components/AvailableMealsContext";
import AvailableMeals from "./Components/AvailableMeals";
import Header from "./Components/Header";
import AddToCart from "./Components/FormModal";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./Components/Cart";
import Checkout from "./Components/UI/Checkout";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <AvailableMealsContextProvider>
            <Header />
            <Cart></Cart>
            <Checkout />
            <AvailableMeals />
          </AvailableMealsContextProvider>
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
