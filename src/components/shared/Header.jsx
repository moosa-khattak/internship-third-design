import React from 'react'

const Header = ({title , text}) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-3'>
      <h1 className='text-3xl sm:text-4xl font-bold '>{title}</h1>
      <p className='text-gray-400 text-xs '>{text}</p>
    </div>
  )
}

export default Header
