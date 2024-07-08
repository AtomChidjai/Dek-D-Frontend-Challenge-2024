import React from 'react';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Modal = ({ modalToggle, closeHandler }) => {

  return (
    <>
      {modalToggle && 
      <div>
        <div className='fixed inset-0 bg-black opacity-50 z-40'></div>
        <IoMdClose className='z-50 fixed text-[50px] hover:cursor-pointer text-white right-[20px] top-[20px]' onClick={closeHandler}/>
        <div className='w-[800px] h-[600px] bg-white fixed left-[50%] top-[50%] z-50 opacity-80 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl'>
        </div>
      </div>
      }
    </>
  );
}

export default Modal;
