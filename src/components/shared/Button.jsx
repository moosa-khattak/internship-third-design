import React from 'react'

const Button = ({text , bgColor , textColor , handler =()=>{} }) => {
  return (
    <button
    onClick={handler}
    className={`${bgColor} ${textColor} cursor-pointer py-2 px-8 rounded-2xl relative z-10  hover:scale-105 duration-300`}
    >
    {text}
    </button>
  )
}

export default Button
