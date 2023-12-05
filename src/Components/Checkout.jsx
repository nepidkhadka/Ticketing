import React, { useContext } from "react";
import CartContext from "../Context/CartContext";

const Checkout = () => {
  const { ticketdata } = useContext(CartContext);
  return (
    <section>
      <div className="container py-10 mx-auto">
        <div className="px-2 sm:p-0 text-xl font-medium">
          <h2>Order Confirmation</h2>
        </div>
        <div className="line w-full my-6 bg-[#252d3c] h-[1px]"></div>
        <div className="flex justify-center sm:justify-between flex-wrap ">
          <div className="bg-[#1c1c24] p-6 mt-6 rounded-md border-[#252d3c] border w-2/3 ">
            <h4 className="text-lg">Information</h4>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="eg. Jane Copper"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email*
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Address*
                </label>

                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Country
                </label>

                <select
                  id="country"
                  className="mt-2 w-full rounded-md h-10 p-2 outline-none dark:text-white border-[#252d3c] bg-inherit border"
                >
                  <option className="bg-[#252d3c]" value="nepal">
                    Nepal
                  </option>
                  <option className="bg-[#252d3c]" value="usa">
                    USA
                  </option>
                  <option className="bg-[#252d3c]" value="china">
                    China
                  </option>
                  <option className="bg-[#252d3c]" value="canada">
                    Canada
                  </option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  State
                </label>

                <input
                  type="text"
                  id="state"
                  name="address"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  City
                </label>

                <input
                  type="text"
                  id="city"
                  name="address"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="zipcode"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Zipcode
                </label>

                <input
                  type="text"
                  id="zipcode"
                  name="address"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
              </div>
            </form>
          </div>
          <div className="bg-[#1c1c24] p-6 mt-6 rounded-md border-[#252d3c] border w-[300px] sm:w-[400px]">
            <h4 className="text-lg">Checkout Summary</h4>
            <div className="line w-full my-4 bg-[#252d3c] h-[1px]"></div>
            <div className="">
              <h2 className="font-bold text-lg">
                {ticketdata.moviename ? ticketdata.moviename : "Empty"}
              </h2>
              <p className="text-[#98abc0] text-sm my-2">
                Movie ● Kathmandu, Nepal
              </p>
            </div>
            <div className="line w-full my-4 bg-[#252d3c] h-[1px]"></div>
            <div className="flex justify-between my-2">
              <span className="text-[#98abc0]">Normal</span>
              <span>X{ticketdata.qty}</span>
              <span className="font-bold">
                ${ticketdata.ticketprice ? ticketdata.ticketprice : "Empty"}
              </span>
            </div>
            <div className="flex justify-between my-2">
              <span className="text-[#98abc0]">Sub Total</span>
              <span className="font-bold">
                ${ticketdata.subtotal ? ticketdata.subtotal : "Empty"}
              </span>
            </div>
            <div className="flex justify-between my-2">
              <span className="text-[#98abc0]">Tax ( 13% )</span>
              <span className="font-bold">${ticketdata.tax}</span>
            </div>
            <div className="flex justify-between my-2">
              <span className="text-[#98abc0]">Discount ( 0% )</span>
              <span className="font-bold">${ticketdata.discount}</span>
            </div>
            <div className="line w-full my-4 bg-[#252d3c] h-[1px]"></div>
            <div className="flex justify-between">
              <h4 className="text-[#98abc0]">Total</h4>
              <p className="text-[#98abc0]">
                USD{" "}
                <span className="text-white font-medium text-xl">
                  ${ticketdata.subtotal + ticketdata.tax}
                </span>{" "}
              </p>
            </div>
            <div className="line w-full my-4 bg-[#252d3c] h-[1px]"></div>
            <button className="bg-[#e14658] w-full p-2 rounded-md font-semibold ">
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
