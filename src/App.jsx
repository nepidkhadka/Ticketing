import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout.jsx";
import Invoice from "./Components/Invoice.jsx";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";

const App = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/movie/:id"
            element={
              <>
                <Navbar />
                <Cart />
              </>
            }
          />
          <Route
            path="/checkout/:id"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
          <Route path="/invoice/:id" element={<Invoice />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
