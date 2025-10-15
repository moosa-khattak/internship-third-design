import React from "react";
import {
  FaCarSide,
  FaHeadphones,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";


const services = [
  {
    id: 1,
    icon : <FaCarSide className="text-4xl md:text-5xl text-primary"/>,
    title : "Free Shipping",
    description : "Free Shiping on All Order "

  },
  {
    id: 2,
    icon : <FaCheckCircle className="text-4xl md:text-5xl text-primary"/>,
    title : "Safe Money",
    description : "30 Day money Back "

  },
  {
    id: 3,
    icon : <FaWallet className="text-4xl md:text-5xl text-primary"/>,
    title : "Secure Payment",
    description : "All payment Secure"

  },
  {
    id: 4,
    icon : <FaHeadphones className="text-4xl md:text-5xl text-primary"/>,
    title : "Online Support 24/7",
    description : "Technical Support 24/7 "

  },
];

const Services = () => {
  return <div className="">

    <div className="container mt-14 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            {
                services.map((items)=>(
                    <div key={items.id} className="flex flex-col pl-2 md:pl-0 items-center md:flex-row  gap-5">

                        <h1>{items.icon}</h1>
                        <div className="text-center md:text-start">
                            <p className="font-bold sm:text-[20px]">{items.title}</p>
                            <p className="text-gray-400">{items.description}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  </div>;
};

export default Services;
