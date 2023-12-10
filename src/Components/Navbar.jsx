import React from "react";
import { TbLocationCheck } from "react-icons/tb";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="bg-[#1c1c24]">
        <div className="container mx-auto">
          <nav>
            <div className="bg-[#1c1c24] w-full h-20 flex items-center justify-between ">
              <div className="logo flex items-center sm:gap-2 md:gap-6 lg:gap-12">
                <div className="flex items-center gap-1">
                  <TbLocationCheck className="ml-2 sm:w-8 sm:h-10 h-8 w-6 text-white" />
                  <Link to="/">
                    <span className="text-white sm:text-lg md:text-2xl font-medium cursor-pointer">
                      Ticketing
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:block menu text-white">
                  <ul className="flex sm:gap-2 md:gap-8 font-normal cursor-pointer ">
                    <Link to={"/"}>
                      <li>Home</li>
                    </Link>
                    <Link>
                      <li>Concerts</li>
                    </Link>
                    <Link>
                      <li>Movies</li>
                    </Link>
                    <Link>
                      <li>Threater Events</li>
                    </Link>
                  </ul>
                </div>
              </div>

              <div className="loginregister hidden sm:flex items-center sm:gap-2 md:gap-8 text-white font-medium cursor-pointer">
                <div className="">Login</div>
                <div className="bg-[#FFA732] py-2 px-4 rounded-md">
                  Register
                </div>
              </div>
              <CgMenuLeftAlt className="sm:hidden text-white h-8 w-16" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
