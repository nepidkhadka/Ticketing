import React from "react";
import { TbLocationCheck } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="bg-[#1c1c24]">
      <div className="container mx-auto">
        <nav>

        <div className="bg-[#1c1c24] w-full h-20 flex items-center justify-between ">
          <div className="logo flex items-center gap-20">
            <div className="flex items-center gap-2">
              <TbLocationCheck className="w-10 h-10 invert" />
              <span className="text-white text-2xl font-medium cursor-pointer">
                TickTicketing
              </span>
            </div>
            <div className="menu text-white">
              <ul className="flex gap-8 font-normal cursor-pointer ">
                <li>Home</li>
                <li>Concerts</li>
                <li>Movies</li>
                <li>Threater Events</li>
              </ul>
            </div>
          </div>

          <div className="loginregister flex items-center gap-8 text-white font-medium cursor-pointer">
            <div className="">Login</div>
            <div className="bg-[#e14658] py-2 px-4 rounded-md">Register</div>
          </div>
        </div>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
