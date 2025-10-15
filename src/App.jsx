import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero Section/Hero'
import Category from './components/Category/Category'
import Services from './components/Service/Services'
import Banner from './components/Banner/Banner'
import headPhone from "./assets/Hero/headPhone.png"
import Products from './components/Products/Products'
import watch from "./assets/catogories/smartWatch.png"
import Blogs from './components/Blogs/Blogs'
import Partners from "./components/Brands/Partners"
import Footer from "./components/Footer/Footer.jsx"
import Popup from "./components/Popup/Popup.jsx"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


const bannerData = {
  discount: "30% OFF",
  title1: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headPhone,
  title2: "Air Solo Bass",
  title3: "Winter sale",
  title4:
    " Lorem ipsum dolor sit amet consectetur,  ducimus ",
  bgColor: "#f42c37",
};
const bannerData2 = {
  discount: "30% OFF",
  title1: "Happy Hours",
  date: "10 Jan to 28 Jan",
  image: watch,
  title2: "Smart Solo",
  title3: "Winter sale",
  title4:
    " Lorem ipsum dolor sit amet consectetur,  ducimus ",
  bgColor: "#2dcc6f",
};
const App = () => {

  const [orderPopup , setOrderPopup] = useState(false)

  const handlerOrderPopup = ()=>{
    setOrderPopup(!orderPopup)
  }

   useEffect(() => {
     Aos.init({
       duration: "800",
       easing: "ease-in-sine",
       delay: 100,
       offset: 100,
       mirror: true,
     });
     Aos.refresh()
   }, [])
   

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white  ">
      <Navbar handlerOrderPopups={handlerOrderPopup} />
      <Hero handlerOrderPopups={handlerOrderPopup} />
      <Category />
      <Services />
      <Banner data={bannerData} />
      <Products />
      <Banner data={bannerData2} />

      <Blogs />
      <Partners />

      <Footer />

      <Popup orderPopup={orderPopup} handlerOrderPopups={handlerOrderPopup} />
    </div>
  );
}

export default App
