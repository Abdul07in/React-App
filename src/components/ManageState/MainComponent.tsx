import { useState } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

const MainComponent = () => {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length}></Navbar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default MainComponent;
