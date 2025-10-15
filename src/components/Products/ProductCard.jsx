import React from 'react'
import Button from '../shared/Button';

const ProductCard = ({data}) => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5  place-items-center ">
        {data.map((data) => (
          <div data-aos = "fade-up" data-aos-delay = {data.aosDelay} key={data.id} className="   group h-full ">
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="rounded-2xl h-[180px] w-[250px] object-cover "
              />

              <div className="hidden group-hover:flex justify-center absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center items-center group-hover:backdrop-blur-sm duration-200 h-full ">
                <Button text="Add To Card" bgColor={"bg-primary "} />
              </div>

            </div>
            {/* hoverButton */}

            <div className="leading-7">
              <h1 className="font-semibold">{data.title}</h1>
              <p className="font-bold">${data.prce}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard
