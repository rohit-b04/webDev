import { createContext  } from "react";

export const CartContext = createContext({ // It can be passed any value you want
    items: [],
    addItemToCart: ()=> {},
});

