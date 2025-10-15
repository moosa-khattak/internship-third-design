import React from "react";
import Button from "../shared/Button";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px]  flex justify-between items-center py-12  ">
      <div className="container ">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center  text-white rounded-3xl "
        >
          {/* first col */}
          <div className="p-6 sm:p-8 space-y-2 text-center md:text-start">
            <p data-aos = "slide-right"  className="text-sm">{data.discount}</p>
            <h1 data-aos = "zoom-out" className="text-4xl lg:text-7xl font-bold uppercase ">
              {data.title1}
            </h1>
            <p data-aos = "fade-up" className="text-sm">{data.date}</p>
          </div>

          {/* second col */}

          <div className="h-full flex items-center justify-center md:justify-start ">
            <img data-aos = "zoom-in"
              src={data.image}
              alt="headPhone"
              className="scale-125 w-[250px] md:w-[340px] object-cover drop-shadow-[-8px_4px_8px_rgba(0,0,0,.7)]"
            />
          </div>
          {/* third col */}

          <div className="p-6 sm:p-8 space-y-3 text-center md:text-start">
            <p data-aos = "fade-left" data-aos-duration = "500" className="text-2xl font-bold">{data.title2}</p>
            <h1 data-aos = "zoom-out  " className="text-4xl lg:text-5xl  font-bold tracking-wider">
              {data.title3}
            </h1>
            <p data-aos = "zoom-out">{data.title4}</p>

            <div data-aos = "fade-up">
            <button style={{color : data.bgColor}} className="bg-white py-2 px-4 rounded-full" >Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
