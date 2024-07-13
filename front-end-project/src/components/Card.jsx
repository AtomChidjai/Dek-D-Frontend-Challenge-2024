import React, { useState } from 'react'
import Modal from './Modal';
import { IoMdBookmark } from "react-icons/io";
import { IoList } from "react-icons/io5";

const Card = ({ number, isSelected, onSelect, isToggle, creationTime, authorName }) => {
  const [modalToggle, setModalToggle] = useState(false);
  
  const openHandler = () => {
    if (!isToggle) {
      setModalToggle(true);
    }
  };

  const closeHandler = () => {
    if (!isToggle) {
      setModalToggle(false);
    }
  };

  return (
    <>
      <Modal modalToggle={modalToggle} closeHandler={closeHandler} number={number} isToggle={isToggle} creationTime={creationTime} authorName={authorName}/>
      <div className='w-[350px] h-auto flex flex-row rounded-lg mx-2 my-3 relative hover:cursor-pointer' onClick={openHandler}>
        <img src="https://placehold.co/100x150" className='rounded-lg' />
        <div className='flex flex-col justify-between ml-[5px]'>
          <div>
            <p className={`font-semibold text-[18px] hover:cursor-pointer ${!isToggle && 'transition ease-in-out delay-100 hover:text-[#F37A01] duration-300'}`}>เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ <br /> { isToggle ? <>&lt;我是姨娘&gt;...</> : <>&lt;&nbsp;&nbsp;&nbsp;&nbsp;&gt;...</>} </p>
            <p className='text-[12px] mt-[5px]'>{authorName}</p>
          </div>
          <div className='text-[14px]'>
            <p className='text-[#A8A8A8] flex'><IoList className='text-[20px] mr-[5px]'/> <span className='w-[200px] truncate'>ตอนที่ {number} : เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ</span></p>
            <p className='text-[#A8A8A8] flex'><IoMdBookmark className='text-[20px] mr-[5px]' /> <span className='w-[200px] truncate'>คั่นล่าสุด {creationTime}</span></p>
          </div>
        </div>
        {isToggle && (
          <div className='absolute top-1 right-1 z-10'>
            <input
              type="checkbox"
              className='w-[20px] h-[20px] rounded-full bg-white border border-[#F37A01] checked:bg-[#F37A01] checked:border-transparent hover:cursor-pointer hover:bg-[#F37A01] form-checkbox'
              onClick={onSelect}
              checked={isSelected}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Card
