import React from "react";
import Button from "../shared/Button";
import earPhone from "../../assets/catogories/earphone.png";
import watch from "../../assets/catogories/watch.png";
import macbook from "../../assets/catogories/macbook.png";
import gaming from "../../assets/catogories/gaming.png";
import vr from "../../assets/catogories/vr.png";
import speaker from "../../assets/catogories/speaker.png";

const Category = () => {
  return (
    <div className="py-8 ">
      <div className="container flex flex-col gap-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* first-col */}
          <div className="bg-gradient-to-br from-black/90 to-black/70 text-white h-[320px] flex items-center  pb-10 pt-18 pl-5 rounded-3xl relative">
            <div>
              <div className="mt-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl  xl:text-5xl  opacity-20 mb-3 font-semibold">
                  EarPhone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={earPhone}
              alt=""
              className="absolute bottom-0 w-[320px]"
            />
          </div>
          {/* second-col */}

          <div className="bg-gradient-to-br from-brandYellow/90 to-brandYellow/80 text-white h-[320px] flex items-center  pb-10 pt-18 pl-5 rounded-3xl relative">
            <div>
              <div className="mt-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl  xl:text-5xl  opacity-40 mb-3 font-semibold">
                  Gatget
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={watch}
              alt=""
              className="absolute -right-4 lg:top-[40px] w-[320px]"
            />
          </div>
          {/* third-col */}

          <div className="sm:col-span-2 bg-gradient-to-br from-primary/90 to-primary/85 text-white h-[320px] flex items-center  pb-10 pt-18 pl-5 rounded-3xl relative ">
            <div>
              <div className="mt-4 relative z-50 sm:z-0">
                <p className="mb-[2px] text-white ">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl  xl:text-5xl  opacity-40 mb-3 font-semibold ">
                  Laptop
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={macbook}
              alt=""
              className="absolute right-0   -translate-x-3 w-[270px]"
            />
          </div>
        </div>

        {/* second Row */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first-col */}

          <div className="sm:col-span-2 bg-gradient-to-br from-gray-400/90 to-gray-300/60 text-white h-[320px] flex items-center  pb-10 pt-18 pl-5 rounded-3xl relative">
            <div>
              <div className="mt-4 relative z-50 sm:z-0">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl  xl:text-5xl  opacity-40 mb-3 font-semibold">
                  Laptop
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={gaming}
              alt=""
              className="absolute right-0 -translate-x-3 w-[270px]"
            />
          </div>

          {/*  */}

          {/* second-col */}

          <div className="bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white h-[320px] flex items-start  py-10 pl-5 rounded-3xl relative">
            <div>
              <div className="mt-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl   xl:text-5xl opacity-40 mb-3 font-semibold">
                  EarPhone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={vr}
              alt=""
              className="absolute right-0 sm:-right-4 sm:bottom-0  w-[320px] "
            />
          </div>
          {/* third-col */}

          <div className="bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white h-[320px] flex items-start  py-10 pl-5 rounded-3xl relative">
            <div>
              <div className="mt-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl  xl:text-5xl  opacity-20 mb-3 font-semibold">
                  Gadget
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={speaker}
              alt=""
              className="absolute bottom-0 right-0 w-[320px] sm:w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
