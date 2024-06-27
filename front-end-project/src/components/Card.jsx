import React from 'react'
import { IoMdBookmark } from "react-icons/io";
import { IoList } from "react-icons/io5";

const Card = () => {
  return (
    <>
        <div className='w-[350px] h-auto flex flex-row rounded-lg'>
            <img src="https://placehold.co/100x150"  className='rounded-lg'/>
            <div className='flex flex-col justify-between ml-[5px]'>
                <div className=''>
                    <p className='font-semibold text-[18px]'>เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ <br/>&lt;&nbsp;&nbsp;&nbsp;&nbsp;&gt;...</p>
                    <p className='text-[12px] mt-[5px]'>G.lina</p>
                </div>
                <div className='text-[14px]'>
                    <p className='text-[#A8A8A8] flex'><IoList className='text-[20px] mr-[5px]'/> ตอนที่ 18: เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ</p>
                    <p className='text-[#A8A8A8] flex'><IoMdBookmark className='text-[20px] mr-[5px]'/> คั่นล่าสุด 9 ก.ค. 63 / 22.56 น.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card