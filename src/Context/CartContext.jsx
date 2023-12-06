import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [ticketdata, setticketdata] = useState({
    ticketprice: null,
    moviename: null,
    qty: null,
    subtotal: null,
    tax: 130,
    discount: 0,
    totalprice:null,
    movieposter:""
  });

  const [userData, setuserData] = useState({
    fullname:"",
    email:"",
    address:"",
    country:"",
    state:"",
    city:"",
    zipcode:"",
  });

  return (
    <CartContext.Provider value={{ ticketdata, setticketdata, userData, setuserData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
