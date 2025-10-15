import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Button from '../shared/Button';

const Popup = ({ orderPopup, handlerOrderPopups }) => {


  return (
    <>
      {orderPopup && (
        <div>
          <div className="bg-black/50 w-screen h-screen fixed top-0 left-0 backdrop-blur-sm z-50 ">
            <div className="p-4 w-[300px] shadow-md bg-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  dark:bg-gray-900 dark:text-white rounded-2xl">
              {/* header section  */}
              <div className="flex justify-between items-center ">
                <p className='font-semibold text-[20px]'>Order Now </p>
                <RxCross2
                  className="text-2xl  cursor-pointer"
                  onClick={() => handlerOrderPopups(!orderPopup)}
                />
              </div>
              {/* form section  */}

              <div>
                <input
                  type="text"
                  name=""
                  className="inputField "
                  id=""
                  placeholder="Name"
                />
                <input
                  type="email"
                  name=""
                  className="inputField "
                  id=""
                  placeholder="Email"
                />
                <input
                  type="text"
                  name=""
                  className="inputField "
                  id=""
                  placeholder="Address"
                />

                <div className='mt-4 text-center'>
                  <Button
                    text={"Order Now"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup
