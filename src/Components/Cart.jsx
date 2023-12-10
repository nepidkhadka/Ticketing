import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import CartContext from "../Context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const [price, setprice] = useState({
    ticketprice: 500,
    qty: 1,
    subtotal: 500,
  });

  const { ticketdata, setticketdata } = useContext(CartContext);

  //UseState for Movie Data & Loading
  const [currentMovie, setcurrentMovie] = useState();
  const [loading, setLoading] = useState(true);

  //API ID & URL
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

  //Minus Button Click Funtion
  const handleClickMinus = () => {
    if (price.qty > 1) {
      setprice({
        ...price,
        qty: price.qty - 1,
        subtotal: price.ticketprice * (price.qty - 1),
      });
    }
  };

  //Plus Button Click Function
  const handleClickPlus = () => {
    if (price.qty < 10) {
      setprice({
        ...price,
        qty: price.qty + 1,
        subtotal: price.ticketprice * (price.qty + 1),
      });
    }
  };

  //Save Data To Cart Context
  const handleCheckout = () => {
    const mytempsubtotal = price.subtotal;
    setticketdata({
      ...ticketdata,
      ticketprice: price.ticketprice,
      moviename: currentMovie.original_title,
      movieposter : `https://image.tmdb.org/t/p/original${currentMovie.poster_path}`,
      qty: price.qty,
      subtotal: price.subtotal,
      totalprice : mytempsubtotal+ticketdata.tax
    });
    navigate("/checkout/"+id);
  };

  //SideEffects for Fetching API Data & To Set Loading Value To False
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setcurrentMovie(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  //Loading Animation
  if (loading)
    return (
      <div className="absolute left-2/4 top-1/2">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 text-white border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );

  return (
    // Section & Container For Movie & Event Box
    <section>
      <div className="container py-20 px-6 sm:px-1 mx-auto">
        <div className="cart sm:relative flex flex-col items-center sm:block">
          <div className="moviebox max-w-[240px]">
            <Link to={`/movie/${currentMovie.id}`}>
              <div className="poster rounded-lg h-[340px] w-[240px] relative">
                <img
                  className="h-full w-full rounded-lg"
                  src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`}
                  alt={currentMovie.original_title}
                />
                <div className="absolute top-4 right-4 bg-[#1c3246] rounded-md text-white text-center">
                  <p className="text-sm font-medium px-4 py-2">Movies</p>
                </div>
              </div>
            </Link>

            <div className="details text-white text-center mt-2">
              <h2 className=" text-xl font-bold">
                {currentMovie.original_title.slice(0, 20)}
              </h2>
              {/* <p className=" font-extralight">{movie.overview.slice(0,60)+"..."}</p> */}
              <p className="font-semibold">
                {currentMovie.release_date} ●{" "}
                {currentMovie.original_language.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="eventbox mt-8 sm:mt-0 sm:absolute top-0 right-0 h-[460px] w-[280px] sm:w-[380px] bg-[#1c1c24] border border-[#252d3c] rounded-md p-4">
            <h2 className="py-2 font-semibold text-xl">Event Details</h2>
            <div className="line w-full my-2 bg-[#252d3c] h-[1px]"></div>
            <div className="flex py-2 items-center gap-4">
              <div className="icon grid bg-[#292932] h-8 w-8 rounded-full">
                <IoCalendarOutline className="ml-2 mt-2" />
              </div>
              <div className="text inline">
                <h4 className="text-[#98abc0]">Date and Time</h4>
                <p className="font-medium">Sat, Apr 30, 2022 11:30 AM</p>
              </div>
            </div>
            <div className="line w-full my-2 bg-[#252d3c] h-[1px]"></div>
            <div className="flex py-2 items-center gap-4">
              <div className="icon grid bg-[#292932] h-8 w-8 rounded-full">
                <FaLocationDot className="ml-2 mt-2" />
              </div>
              <div className="text inline">
                <h4 className="text-[#98abc0]">Location</h4>
                <p className="font-medium">Kathmandu, Nepal</p>
                <p className="text-sm my-2 cursor-pointer text-[#FFA732]">
                  View On Map
                </p>
              </div>
            </div>
            <div className="line w-full my-2 bg-[#252d3c] h-[1px]"></div>
            <h2 className="py-2 font-semibold text-xl">Select Tickets</h2>
            <div className="flex items-center justify-between">
              <div className="p-2">
                <p className="text-[#8799ac] py-1 ">{price.qty}x Ticket(s)</p>
                <p className="font-bold py-1">USD ${price.ticketprice}.00</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleClickMinus}
                  className="bg-[#292932] h-8 w-8 rounded-md hover:bg-[#FFA732]"
                >
                  <FaMinus className="inline-block" />
                </button>
                <div className="font-bold text-xl">{price.qty}</div>
                <button
                  onClick={handleClickPlus}
                  className="bg-[#292932] h-8 w-8 rounded-md hover:bg-[#FFA732]"
                >
                  <FaPlus className="inline-block" />
                </button>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-[#FFA732] w-full p-2 rounded-md font-semibold"
            >
              Check Out for ${price.subtotal}.00
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
