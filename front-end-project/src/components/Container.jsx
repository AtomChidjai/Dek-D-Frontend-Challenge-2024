import React from 'react'
import Card from './Card'
import { useState } from 'react'

const Container = () => {
    const [cardCount, setCardCount] = useState(7);

    const addCard = () => {
        setCardCount(prevCount => prevCount + 1);
    }

    const removeCard = () => {
        if (cardCount > 1) {
            setCardCount(prevCount => prevCount - 1);
        }
    }

    return (
        <>
            <div className='w-full flex flex-col items-center'>
                <div className='w-[1100px] flex px-2 justify-between items-center'>
                    <span className='text-[12px] text-[#878787]'>จํานวนทั้งหมด {cardCount} รายการ</span>
                    <div className='flex items-center'>
                        <button className='text-[12px] border border-[#E5E5E5] px-4 py-2 rounded-[20px]' onClick={addCard}>เพิ่ม</button>
                        <button className='text-[12px] border border-[#E5E5E5] px-4 py-2 rounded-[20px] ml-3' onClick={removeCard}>เเก้ไข</button>
                    </div>
                </div>
                <div className='w-[1100px] flex flex-wrap'>
                {[...Array(cardCount)].map((_, index) => (
                    <Card key={index + 1} number={index + 1} />
                ))}
                </div>
            </div>
        </>
    )
}

export default Container