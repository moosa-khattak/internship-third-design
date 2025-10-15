import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart , FaCaretDown  } from "react-icons/fa";
import DarkMode from "./DarkMode";

const menuItem = [
  {
    id: "1",
    name: "Home",
    link: "/#",
  },
  {
    id: "2",
    name: "About",
    link: "/#about",
  },
  {
    id: "3",
    name: "Contact",
    link: "/#contact",
  },
  {
    id: "4",
    name: "Blogs",
    link: "/#blogs",
  },
];

const dropDown = [
  {
    id: "1",
    name: "Trending Products",
    link: "/#",
  },
  {
    id: "2",
    name: "Selling Products",
    link: "/#",
  },
  {
    id: "3",
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handlerOrderPopups }) => {
  return (
    <div className="      duration-200  relative z-40 ">
      <div className="py-4  ">
        <div className="container   flex  items-center  justify-between   m-auto  ">
          {/* link or logo */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold text-2xl sm:text-3xl tracking-widest uppercase sm:"
            >
              Eshop
            </a>

            {/* menu items  */}
            <div className="hidden lg:block ">
              <ul className=" flex items-center gap-4 ">
                {menuItem.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="font-semibold inline-block px-4 text-gray-500 hover:text-black  dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                {/* drop down menu  */}
                <li className="relative group  cursor-pointer ">
                  <a
                    href="/#"
                    className="flex items-center py-2 gap-[3px] text-gray-500 hover:text-black dark:hover:text-white font-semibold"
                  >
                    {" "}
                    Quick Links{" "}
                    <FaCaretDown className="group-hover:rotate-180 transition-all duration-300" />
                  </a>
                  <div className="shadow-lg  absolute z-[50] w-[230px] bg-white duration-500 hidden group-hover:block dark:shadow-lg dark:bg-black p-2 rounded-md ">
                    <ul className="space-y-2 ">
                      {dropDown.map((item, index) => (
                        <li
                          className="text-gray-500  hover:text-black dark:text-gray-500 dark:hover:text-white hover:bg-primary/20 p-2 w-full inline-block rounded-md "
                          key={index}
                        >
                          <a href={menuItem.href}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* navbar right side */}
          <div className="flex   justify-center items-center gap-4">
            {/* search Bar section  */}
            <div className=" relative group hidden sm:block">
              <input
                type="search"
                name=""
                id=""
                placeHolder="Search"
                className=" search-bar  "
              />
              <IoSearch
                className="absolute top-1/2 right-3 -translate-y-1/2 
              group-hover:text-primary group-hover:duration-200 text-2xl text-gray-600 dark:text-gray-400"
              />
            </div>
            {/* shopping card button */}

            <button className=" relative p-3" onClick={handlerOrderPopups}>
              <FaShoppingCart className="text-xl  text-gray-600 dark:text-gray-400 " />

              <div className="text-xs bg-primary rounded-full w-4 h-4 text-center absolute top-0 right-0 text-white ">
                4
              </div>
            </button>

            {/* Dark Mode  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
