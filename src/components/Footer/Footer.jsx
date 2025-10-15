import React from "react";
import Button from "../shared/Button";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-950 py-8">
      <div className="container">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-2 justify-center">
          {/* col-1  Company detail */}
          <div className="space-y-5 ">
            <div className="space-y-5">
              <a
                href="#"
                className="text-primary  font-semibold text-2xl sm:text-3xl tracking-widest uppercase sm:"
              >
                Eshop
              </a>
            </div>

            <p className=" text-gray-500 dark:text-gray-400 whitespace-wrap">
              Lorem ipsum dolor sit amet <br /> consectetur,adip elit. <br />{" "}
              Unde praesentium
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              Made With ❤️ Moosa
            </p>

            <Button
              text={"Visit our Company"}
              bgColor={"bg-primary"}
              textColor={"text-white"}
            />
          </div>

          {/* second col  links */}

          <div className="md:ml-8 ">
            <div className="font-bold text-[20px] mb-4">
              <h1>Important links</h1>
            </div>
            <div className="text-gray-600 dark:text-gray-400 flex flex-col space-y-4 cursor-pointer">
              <a href="/#home">Home </a>
              <a href="/#about">About</a>
              <a href="/#contact">Contact</a>
              <a href="/#blogs"> Blogs</a>
            </div>
          </div>
          {/* third-col   */}

          <div className="">
            <div className="font-bold text-[20px] mb-4">
              <h1>Quick Links</h1>
            </div>
            <div className="text-gray-600 dark:text-gray-400 flex flex-col space-y-4 cursor-pointer">
              <a href="/#home">Home </a>
              <a href="/#about">About</a>
              <a href="/#contact">Contact</a>
              <a href="/#blogs"> Blogs</a>
            </div>
          </div>

          {/* col-4   */}

          <div className="space-y-5 ">
            <div className="font-bold text-[20px] mb-7">
              <h1>Address</h1>
            </div>

            <div className="flex gap-5 ">
              <FaLocationArrow />
              <p>Peshawar </p>
            </div>
            <div className="flex gap-5">
              <FaMobileScreen className="" />
              <p> 03181822395 </p>
            </div>

            <div className="text-2xl flex gap-3 ">
              <FaFacebook className="hover:text-primary" />
              <FaInstagram className="hover:text-primary" />
              <FaLinkedin className="hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
