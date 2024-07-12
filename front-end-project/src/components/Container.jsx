import React, { useState } from 'react';
import Card from './Card';
import { IoTrash } from "react-icons/io5";

const Container = () => {
    const [cardCount, setCardCount] = useState(14);
    const [selectToggle, setSelectToggle] = useState(false);
    const [selectedCards, setSelectedCards] = useState([]);

    const addCard = () => {
        setCardCount(cardCount + 1);
    };

    const removeSelectedCards = () => {
        const remainingCards = [...Array(cardCount)].map((_, index) => index).filter(index => !selectedCards.includes(index));
        setCardCount(remainingCards.length);
        setSelectedCards([]);
    };

    const toggleSelectCard = (index) => {
        if (!selectToggle) {
            return;
        }
        setSelectedCards(prev => {
            if (prev.includes(index)) {
                return prev.filter(cardIndex => cardIndex !== index);
            } else {
                return [...prev, index];
            }
        });
    };

    const toggleSelectionMode = () => {
        setSelectToggle(toggle => !toggle);
        setSelectedCards([]);
    };

    return (
        <>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full max-w-[1100px] flex px-2 justify-between items-center'>
                    <span className='ml-[10px] text-[12px] text-[#878787]'>จํานวนทั้งหมด {cardCount} รายการ</span>
                    <div className='flex items-center'>
                        {!selectToggle && 
                            <button className='text-[12px] border border-[#E5E5E5] px-4 py-2 rounded-[20px] text-[#636363] transition ease-in-out delay-50 hover:bg-green-100 duration-300' onClick={addCard}>เพิ่ม</button>
                        }
                        {selectToggle && <button className='text-[12px] border border-[#E5E5E5] px-4 py-2 rounded-[20px] ml-3 text-[#636363] transition ease-in-out delay-50 hover:bg-red-100 duration-300' onClick={toggleSelectionMode}>ยกเลิก</button>}
                        {selectToggle ? 
                            <button className={`${selectedCards.length == 0 && 'text-[#E5E5E5]'} text-[12px] border border-[#E5E5E5] px-3 py-2 rounded-[20px] ml-3 flex text-[#636363] transition ease-in-out delay-50 hover:bg-red-100 duration-300`} onClick={removeSelectedCards}><IoTrash className='text-[15px]'/> 
                                {selectedCards.length == 0 ? '' : <span className='ml-2'>{selectedCards.length}</span>} <span className="hidden sm:inline">&nbsp;รายการ</span> 
                            </button> 
                            : 
                            <button className='text-[12px] border border-[#E5E5E5] px-4 py-2 rounded-[20px] ml-3 text-[#636363] transition ease-in-out delay-50 hover:bg-orange-100 duration-300' onClick={toggleSelectionMode}>เเก้ไข</button>}
                    </div>
                </div>
                <div className='w-full max-w-[1100px] flex flex-wrap'>
                    {[...Array(cardCount)].map((_, index) => (
                        <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center'>
                            <Card 
                                number={index + 1} 
                                onSelect={() => toggleSelectCard(index)} 
                                isToggle={selectToggle}
                                isSelected={selectedCards.includes(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Container;
