import AvailableMeals from "./Components/AvailableMeals";
import Header from "./Components/Header";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./Components/Cart";
import Checkout from "./Components/UI/Checkout";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Cart />
          <Checkout />
          <AvailableMeals />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
