import React from 'react';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Modal = ({ modalToggle, closeHandler }) => {

  return (
    <>
      {modalToggle && 
      <div>
        <div className='fixed inset-0 bg-black opacity-50 z-40'></div>
        <div className='w-[600px] h-[600px] bg-blue-100 fixed left-[50%] top-[50%] z-50 opacity-80 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl'>
          <p>This is a Modal</p>
          <IoMdClose className='text-[50px] hover:cursor-pointer' onClick={closeHandler}/>
        </div>
      </div>
      }
    </>
  );
}

export default Modal;
