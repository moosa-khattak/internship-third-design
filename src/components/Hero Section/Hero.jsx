import React from "react";
import Slider from "react-slick";
import macBook from "../../assets/catogories/macBook.png";
import vr from "../../assets/catogories/vr.png";
import headPhone from "../../assets/Hero/headPhone.png";
import Button from "../shared/Button";

const Hero = ({ handlerOrderPopups }) => {
  const carosol = [
    {
      id: 1,
      image: headPhone,
      subTitle: "Beat Solo",
      title: "Wireless",
      title2: "HeadPhone",
    },
    {
      id: 2,
      image: vr,
      subTitle: "Beat Solo",
      title: "Wireless",
      title2: "Virtual",
    },
    {
      id: 3,
      image: macBook,
      subTitle: "Beats Solo",
      title: "Branded",
      title2: "Laptop",
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //   autoplaySpeed :4000
  };
  return (
    <>
      <div className=" container ">
        <div className=" overflow-hidden rounded-3xl  flex justify-center items-center  min-h-[550px] sm:min-h-[650px] hero-bg-color ">
          <div className="container pb-8 sm:pb-0   ">
            <Slider {...settings}>
              {carosol.map((items) => (
                <div key={items.id}>
                  {/* contant section  */}
                  <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col  items-center sm:items-start  gap-3  pl-3  pt-12 sm:pt-15 text-center  order-2 sm:order-1 realtive z-50">
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl mr- sm:text-6xl lg:text-2xl font-bold"
                      >
                        {items.subTitle}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl sm:text-6xl lg:text-7xl font-bold"
                      >
                        {items.title}
                      </h1>
                      <h1
                        data-aos-duration="500"
                        data-aos-once="true"
                        data-aos="zoom-out"
                        className="text-[22px]  uppercase text-white  sm:text-[80px] md:text-[90px] lg-[100px] xl:text-[150px] dark:text-white/5  font-bold mx-auto "
                      >
                        {items.title2}
                      </h1>
                      <div data-aos="fade-up" data-aos-offset="0"
                      data-aos-duration = "500"
                      data-aos-delay = "100"
                      data-aos-once = "true"
                      >
                        <Button
                          text="Shop By Category"
                          bgColor="bg-primary "
                          handler={handlerOrderPopups}
                        />
                      </div>
                    </div>

                    {/* image section  */}

                    <div className="order-1 sm :order-2">
                      <div>
                        <img  data-aos = "zoom-in"
                        data-aos-duration = "500"
                        data-aos-once = "true"
                          src={items.image}
                          alt=""
                          className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-100 lg:scale-103 xl:110 
                        mx-auto object-contain  drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
