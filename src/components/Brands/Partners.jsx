import React from 'react'
import image1 from "../../assets/Brands/br-1.png"
import image2 from "../../assets/Brands/br-2.png"
import image3 from "../../assets/Brands/br-3.png"
import image4 from "../../assets/Brands/br-4.png"
import image5 from "../../assets/Brands/br-5.png"

const Partners = () => {
  return (
    <div className=" mt-12  hidden md:block">
      <div
        data-aos="zoom-out"
        className="container bg-gray-200 dark:bg-gray-700"
      >
        <div className="grid grid-cols-5 place-items-center gap-3  p-7 opacity-50 dark:opacity-80  ">
          <img src={image1} alt="" className="w-[80px]" />
          <img src={image2} alt="" className="w-[80px]" />
          <img src={image3} alt="" className="w-[80px]" />
          <img src={image4} alt="" className="w-[80px]" />
          <img src={image5} alt="" className="w-[80px]" />
        </div>
      </div>
    </div>
  );
}

export default Partners
