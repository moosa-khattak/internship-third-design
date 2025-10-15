import React from "react";
import Header from "../shared/Header";
import blog1 from "../../assets/Blogs/blog-1.jpg";
import blog2 from "../../assets/Blogs/blog-2.jpg";
import blog3 from "../../assets/Blogs/blog-3.jpg";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: "How to choose perfect smartwatch",
      subtitle:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae",
      published: "Jan 20, 2024 by Dilshad",
      image: blog1,
      aosDelay: 0,
    },
    {
      id: 2,
      title: "How to choose perfect gadget",

      subtitle:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae",
      published: "Jan 20, 2024 by Satya",
      image: blog2,
      aosDelay: 200,
    },
    {
      id: 3,
      title: "How to choose Perfect VR headset",
      subtitle:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae",
      published: "Jan 20, 2024 by Sabir",
      image: blog3,
      aosDelay: 400,
    },
  ];
  return (
    <div className="py-12">
      <div className="container space-y-12 ">
        {/* heading Section   */}
        <Header title={"Recent News"} text={"Explore Our Blogs"} />

        {/* Blogs Section  */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {blogsData.map((blogs) => (
            <div data-aos = 'fade-up' data-aos-delay = {blogs.aosDelay} key={blogs.id} className="space-y-3">
              {/* image  section */}
              
                <img src={blogs.image} alt=""  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 " />
             
              {/* Contant Section  */}
              <div className="space-y-2">
                <p className="text-xs text-gray-400 dark:text-gray-400">{blogs.published}</p>
                <p className="font-bold line-clamp-2">{blogs.title}</p>
                <p className="line-clamp-2 text-gray-500">{blogs.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
