import React, { useContext } from "react";
import { TbLocationCheck } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { FiScissors } from "react-icons/fi";
import { HiMiniTicket } from "react-icons/hi2";

const Invoice = () => {
  const { userData, ticketdata } = useContext(CartContext);

  //
  const { id } = useParams();
  
  // Random Order Date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDay();

//   useEffect(()=>{
//     setTimeout(()=>{
//         const confirm = window.confirm("Save As PDF")
//         if(confirm){
//             window.print()
//         }
//     }, 2000)
//   }, [])

  return (
    <>
      <header>
        <div className="bg-[#FFA732] w-full h-20">
          <div className="container mx-auto">
            <nav>
              <div className="w-full h-20 flex items-center">
                <div className="logo flex items-center sm:gap-2 md:gap-6 lg:gap-12">
                  <div className="flex items-center gap-1">
                    <TbLocationCheck className="ml-2 sm:w-8 sm:h-10 h-8 w-6 text-white" />
                    <Link to="/">
                      <span className="text-white sm:text-lg md:text-2xl font-medium cursor-pointer">
                        Ticketing
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <section className="bg-white min-h-screen max-h-max">
        <div className="container mx-auto">
          <h2 className="text-black font-semibold text-lg py-4">Invoice</h2>
          <div className="text-[#556987] flex justify-between py-2">
            <p>Invoice to {userData.fullname?userData.fullname:"No User"}</p>
            <p>
              Invoice ID : YCCURW-{id}
            </p>
          </div>
          <div className="text-[#556987] flex justify-between py-2 ">
            <p>
              {userData.address?userData.address:"No Address"}, {userData.city?userData.city:"No City"}
              <br />
              {userData.state?userData.state:"No State"}, {userData.country?userData.country:"No Country"}
            </p>
            <p>Order Date : {day + "/" + month + "/" + year}</p>
          </div>
          <div className="flex flex-col text-black">
            <div className="overflow-x-auto my-4 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-md">
                  <table className="w-full text-left text-sm font-light border border-[#d5dae1]">
                    <thead className="border-b font-medium text-[#556987] bg-[#f7f8f9] dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Event Details
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Event Type
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Ticket
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Unit Price
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Discount
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {ticketdata.moviename?ticketdata.moviename:"No Event"}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Movie
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          X{ticketdata.qty}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          ${ticketdata.ticketprice}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          ${ticketdata.discount}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          ${ticketdata.totalprice}
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan={7}
                          className="text-right whitespace-nowrap px-6 py-8 font-bold text-xl"
                        >
                          Invoice Total : USD ${ticketdata.totalprice}{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {ticketdata.qty > 0 &&
            Array.from({ length: ticketdata.qty }).map((_,index) => (
              <div key={index}>
                <div className="flex justify-between items-center mt-4">
                  <FiScissors className="text-black" />
                  <div className="border-dashed border-t-2 w-[95%]"></div>
                </div>
                <div className="border w-8/12 mt-4 flex p-6 gap-4">
                  <div className="rounded-lg h-[180px] w-[140px]">
                    <img
                      className="h-full w-full rounded-lg"
                      src={`https://image.tmdb.org/t/p/original/${ticketdata.movieposter}`}
                    />
                  </div>
                  <div className="text-black p-4 mb-16">
                    <h2 className="font-bold">{ticketdata.moviename}</h2>
                    <p className="mt-2 text-[#556987]">
                      Sat, Apr 30, 2022 11:30 AM
                    </p>
                    <HiMiniTicket className="text-red-500 inline" />
                    <span className="px-2">x{ticketdata.qty}</span>
                    <p className="text-[#556987]">
                      Total:
                      <span className="font-bold text-black">
                        {" "}
                        ${ticketdata.ticketprice}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Invoice;
