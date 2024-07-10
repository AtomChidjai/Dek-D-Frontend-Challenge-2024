import React from 'react';
import { IoMdClose } from "react-icons/io";
import { IoMdBookmark } from "react-icons/io";
import { IoList } from "react-icons/io5";

const Modal = ({ modalToggle, closeHandler, number }) => {

  return (
    <>
      {modalToggle &&
        <div>
          <div className='fixed inset-0 bg-black opacity-50 z-40'></div>
          <IoMdClose className='z-50 fixed text-[30px] sm:text-[50px] hover:cursor-pointer text-white right-[10px] sm:right-[20px] top-[10px] sm:top-[20px]' onClick={closeHandler} />
          <div className='w-[90%] sm:w-[800px] h-[90%] sm:h-[600px] bg-white fixed left-[50%] top-[50%] z-50 opacity-90 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl px-4 py-4 sm:px-2 '>
            <div className='flex flex-col sm:flex-row w-full h-full'>
              <img src="https://placehold.co/400x600" className='rounded-lg w-full sm:w-auto h-[300px] sm:h-auto'/>
              <div className='flex flex-col justify-between ml-0 sm:ml-[10px] w-full mt-2 sm:mt-0'>
                <div>
                  <p className='font-semibold text-[18px] sm:text-[24px]'> เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ &lt;我是姨娘&gt;... </p>
                  <p className='text-[14px] sm:text-[18px] mt-[5px]'> ผู้เเต่ง : G.lina</p>
                </div>
                <div className='mt-3'>
                  <b>เนื้อเรื่องย่อ</b> : <br/>Nulla facilisi. Phasellus orci felis, aliquam sed urna quis, 
                             scelerisque euismod metus. Nulla facilisi. Integer varius porttitor 
                             lorem convallis interdum. Pellentesque habitant morbi tristique senectus 
                             et netus et malesuada fames ac turpis egestas. Cras tellus enim, 
                             malesuada ultrices velit sit amet, dignissim fermentum massa. 
                </div>
                <div className='text-[14px] sm:text-[18px] mt-2'>
                  <p className='flex'><IoList className='text-[20px] sm:text-[30px] mr-[5px]' /> ตอนที่ {number}: เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ</p>
                  <p className='flex'><IoMdBookmark className='text-[20px] sm:text-[30px] mr-[5px]' /> คั่นล่าสุด 9 ก.ค. 67 / 22.56 น.</p>
                </div>
                <div className='mt-2 w-full py-2 sm:py-3 bg-orange-200 rounded-lg text-center hover:bg-orange-400 hover:cursor-pointer hover:text-white transition ease-in-out delay-100 duration-300'>อ่านต่อ</div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Modal;
