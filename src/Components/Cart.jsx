import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


const Cart = () => {
  const [price, setprice] = useState({
    ticketprice: "500",
    qty: 1,
    totalprice: "",
  });
  const [currentMovie, setcurrentMovie] = useState();
  const [loading, setloading] = useState(true);

  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

  useEffect(() => {
    getdata();
    setTimeout(() => {
      setloading(false);
    }, 600);
  }, []);

  const getdata = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setcurrentMovie(data);
    console.log(data);
  };

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
    <div className="container py-20 px-6 mx-auto">
      <div className="cart relative">
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
        <div className="eventbox absolute top-0 right-0 h-[460px] w-[380px] bg-[#1c1c24] border border-[#252d3c] rounded-md p-4">
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
              <p className="text-sm my-2 cursor-pointer text-[#e14658]">
                View On Map
              </p>
            </div>
          </div>
          <div className="line w-full my-2 bg-[#252d3c] h-[1px]"></div>
          <h2 className="py-2 font-semibold text-xl">Select Tickets</h2>
          <div className="flex items-center justify-between">
            <div className="p-2">
              <p className="text-[#8799ac] py-1 ">1x Ticket(s)</p>
              <p className="font-bold py-1">USD ${price.ticketprice}.00</p>
            </div>
            <div className="flex gap-3">
              <div className="bg-[#292932] h-8 w-8 rounded-md">
                <FaMinus className="inline-block ml-2 mt-1" />
              </div>
              <div className="font-bold text-xl">
                {price.qty}
              </div>
              <div className="bg-[#292932] h-8 w-8 rounded-md">
                <FaPlus className="inline-block ml-2 mt-1" />
              </div>
            </div>
          </div>
          <button className="bg-[#e14658] w-full p-2 rounded-md font-semibold " >Check Out for ${price.totalprice}.00</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
