import React from 'react'
import Header from '../shared/Header'
import ProductCard from './ProductCard'

// import  images
 import img1  from "../../assets/Products/p-1.jpg"
 import img2 from "../../assets/Products/p-2.jpg"
 import img3 from "../../assets/Products/p-3.jpg"
 import img4 from "../../assets/Products/p-4.jpg"
//  import img5 from "../../assets/Products/p-5.jpg"
//  import img6 from "../../assets/Products/p-7.jpg"
//  import img7 from "../../assets/Products/p-9.jpg"



 const productData = [
    {
        id : 1 ,
        img : img1 ,
        title : "Boat HeadPhone ",
        prce : "120" ,
        aosDelay : "0"

    },
    {
        id : 2,
        img : img2 ,
        title : "Rocky Mountain ",
        prce : "420" ,
        aosDelay : "200"

    },
    {
        id : 3,
        img : img3 ,
        title : "Googles ",
        prce : "320" ,
        aosDelay : "420"

    },
    {
        id : 4,
        img : img4 ,
        title : "Printed",
        prce : "220" ,
        aosDelay : "600"

    },
    {
        id : 5,
        img : img1 ,
        title : "Googles",
        prce : "224" ,
        aosDelay : "100"

    },
    {
        id : 6,
        img : img3 ,
        title : "Printed",
        prce : "224" ,
        aosDelay : "300"

    },
    {
        id : 7,
        img :img2 ,
        title : "Mountain",
        prce : "234" ,
        aosDelay : "500"

    },
    {
        id : 8,
        img :img1 ,
        title : "HeadPhone",
        prce : "234" ,
        aosDelay : "700"

    },
 ]
const Products = () => {
  return (
    <div className='py-8'>
      <div className='container '>
        <div className="">
            {/* Header Section */}

            <Header title = "Our Product" text="Explore Your Products" />
            {/* Body Section */}

            <ProductCard data = {productData} />
        </div>
      </div>
    </div>
  )
}

export default Products
