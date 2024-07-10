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
          <IoMdClose className='z-50 fixed text-[50px] hover:cursor-pointer text-white right-[20px] top-[20px]' onClick={closeHandler} />
          <div className='w-[800px] h-[600px] bg-white fixed left-[50%] top-[50%] z-50 opacity-80 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl px-2 py-2'>
            <div className='flex flex-row w-full h-full'>
              <img src="https://placehold.co/400x600" className='rounded-lg' />

              <div className='flex flex-col justify-between ml-[5px] w-full'>
                <div>
                  <p className='font-semibold text-[24px]'> เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ &lt;我是姨娘&gt;... </p>
                  <p className='text-[18px] mt-[5px]'><b>ผู้เเต่ง</b> : G.lina</p>
                </div>
                <div>อ่านต่อ</div>
                <div>
                  <b>เนื้อเรื่องย่อ</b> : <br/>Nulla facilisi. Phasellus orci felis, aliquam sed urna quis, 
                             scelerisque euismod metus. Nulla facilisi. Integer varius porttitor 
                             lorem convallis interdum. Pellentesque habitant morbi tristique senectus 
                             et netus et malesuada fames ac turpis egestas. Cras tellus enim, 
                             malesuada ultrices velit sit amet, dignissim fermentum massa. 
                </div>
                <div className='text-[18px]'>
                  <p className='text-[#A8A8A8] flex'><IoList className='text-[30px] mr-[5px]' /> ตอนที่ {number}: เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ</p>
                  <p className='text-[#A8A8A8] flex'><IoMdBookmark className='text-[30px] mr-[5px]' /> คั่นล่าสุด 9 ก.ค. 67 / 22.56 น.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Modal;
