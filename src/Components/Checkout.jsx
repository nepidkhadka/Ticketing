import React, { useContext, useEffect, useRef } from "react";
import CartContext from "../Context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { FormValidation } from "../Utils/FormValidation";

const Checkout = () => {
  const navigate = useNavigate();
  const fullNameRef = useRef();
  const { id } = useParams();
  const { ticketdata, userData, setuserData } = useContext(CartContext);

  // Formik Form Validation
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: userData,
    validationSchema: FormValidation,
    onSubmit: (values) => {
      setuserData({
        fullname: values.fullname,
        email: values.email,
        address: values.address,
        country: values.country,
        state: values.state,
        city: values.city,
        zipcode: values.zipcode,
      });
      navigate("/invoice/" + id);
    },
  });

  // AutoFocus To FullName Input
  useEffect(() => {
    fullNameRef.current.focus();
  }, []);

  return (
    <section>
      <div className="container py-10 px-2 mx-auto">
        <div className="px-2 sm:p-0 text-xl font-medium">
          <h2>Order Confirmation</h2>
        </div>
        <div className="line w-full my-6 bg-[#252d3c] h-[1px]"></div>
        <div className="flex justify-center sm:justify-between flex-wrap">
          <div className="bg-[#1c1c24] p-6 mt-6 rounded-md border-[#252d3c] border w-3/5 ">
            <h4 className="text-lg">Information</h4>
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Full Name
                </label>

                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  ref={fullNameRef}
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="eg. Jane Copper"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
                <br />
                {errors.fullname && (
                  <small className="text-red-500 p-2 font-medium">
                    {errors.fullname}
                  </small>
                )}
                <br />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email*
                </label>

                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="eg. janecopper@xyz.com"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
                <br />
                {errors.email && (
                  <small className="text-red-500 p-2 font-medium">
                    {errors.email}
                  </small>
                )}
                <br />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Address*
                </label>

                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  type="text"
                  id="address"
                  name="address"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
                <br />
                {errors.address && (
                  <small className="text-red-500 p-2 font-medium">
                    {errors.address}
                  </small>
                )}
                <br />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Country
                </label>

                <select
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                  name="country"
                  id="country"
                  className="mt-2 w-full rounded-md h-10 p-2 outline-none dark:text-white border-[#252d3c] bg-inherit border"
                >
                  <option className="bg-[#252d3c]" value="" disabled>
                    Select a country
                  </option>
                  <option className="bg-[#252d3c]" value="Nepal">
                    Nepal
                  </option>
                  <option className="bg-[#252d3c]" value="USA">
                    USA
                  </option>
                  <option className="bg-[#252d3c]" value="China">
                    China
                  </option>
                  <option className="bg-[#252d3c]" value="Canada">
                    Canada
                  </option>
                </select>
                <br />
                {errors.country && (
                  <small className="text-red-500 p-2 font-medium">
                    {errors.country}
                  </small>
                )}
                <br />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  State
                </label>

                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                  type="text"
                  id="state"
                  name="state"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
                <br />
                {errors.state && (
                  <small className="text-red-500 p-2 font-medium">
                    {errors.state}
                  </small>
                )}
                <br />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  City
                </label>

                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  type="text"
                  id="city"
                  name="city"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
                <br />
                {errors.city && (
                  <small className="text-red-500 p-2 font-medium">
                    {errors.city}
                  </small>
                )}
                <br />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="zipcode"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Zipcode
                </label>

                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.zipcode}
                  type="number"
                  pattern="[0-9]{5}"
                  id="zipcode"
                  name="zipcode"
                  className="mt-2 w-full rounded-md h-10 p-4 outline-none border-[#252d3c] bg-inherit border"
                />
                <br />
                {errors.zipcode && (
                  <small className="text-red-500 p-2 font-medium">
                    {errors.zipcode}
                  </small>
                )}
                <br />
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
                  ${ticketdata.totalprice}
                </span>{" "}
              </p>
            </div>
            <div className="line w-full my-4 bg-[#252d3c] h-[1px]"></div>
            <button
              onClick={() => handleSubmit()}
              type="button"
              className="bg-[#FFA732] w-full p-2 rounded-md font-semibold "
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
