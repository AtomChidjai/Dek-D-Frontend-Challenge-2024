import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";

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
            <div className='w-[1100px] flex bg-red-100 px-2'>
                <span className='text-[12px] text-[#878787]'>จํานวนทั้งหมด {cardCount} รายการ</span>
                <button className='text-[50px]' onClick={addCard}><IoAddCircleOutline/></button>
                <button className='text-[50px]' onClick={removeCard}><IoIosRemoveCircleOutline/></button>
            </div>
            <div className='w-[1100px] flex flex-wrap'>
            {[...Array(cardCount)].map((_, index) => (
                <Card key={index + 1} number={index + 1} />
            ))}
            </div>
        </>
    )
}

export default Container