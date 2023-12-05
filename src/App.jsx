import React from "react";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <>
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
        {/* <Route path='/order:id' element={<Movies/>}/> */}
      </Routes>
    </>
  );
};

export default App;
