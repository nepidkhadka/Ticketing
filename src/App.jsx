import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout.jsx";
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
            path="/checkout/"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
