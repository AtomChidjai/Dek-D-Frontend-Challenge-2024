import React, { useState, useEffect } from 'react';
import Card from './Card';
import { IoTrash } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchName = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(apiUrl);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error : ', error);
            }
        };

        fetchName();
    }, []);

    const [cards, setCards] = useState([...Array(14).keys()].map(index => ({
        number: Math.floor(Math.random() * 100) + 1,
        creationTime: new Date().toLocaleDateString('th-TH', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }) + ' / ' + new Date().toLocaleTimeString('th-TH', {
            hour: '2-digit',
            minute: '2-digit'
        })
    })));
    const [selectToggle, setSelectToggle] = useState(false);
    const [selectedCards, setSelectedCards] = useState([]);

    const addNotify = () => toast.success("เพิ่มรายการสําเร็จ");
    const deleteNotify = () => toast.error("ลบรายการสําเร็จ");

    const addCard = () => {
        const newCard = {
            number: Math.floor(Math.random() * 100) + 1,
            creationTime: new Date().toLocaleDateString('th-TH', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }) + ' / ' + new Date().toLocaleTimeString('th-TH', {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setCards(prevCards => [...prevCards, newCard]);
        addNotify();
    };

    const removeSelectedCards = () => {
        const remainingCards = cards.filter((_, index) => !selectedCards.includes(index));
        setCards(remainingCards);
        setSelectedCards([]);
        deleteNotify();
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
                    <span className='ml-[10px] text-[12px] text-[#878787]'>จํานวนทั้งหมด {cards.length} รายการ</span>
                    <div className='flex items-center'>
                        {!selectToggle &&
                            <button className='text-[12px] border border-[#E5E5E5] px-4 py-2 rounded-[20px] text-[#636363] transition ease-in-out delay-50 hover:bg-green-100 duration-300' onClick={addCard}>เพิ่ม</button>
                        }
                        {selectToggle && <button className='text-[12px] border border-[#E5E5E5] px-4 py-2 rounded-[20px] ml-3 text-[#636363] transition ease-in-out delay-50 hover:bg-red-100 duration-300' onClick={toggleSelectionMode}>ยกเลิก</button>}
                        {selectToggle ?
                            <button
                                className={`text-[12px] border border-[#E5E5E5] px-3 py-2 rounded-[20px] ml-3 flex text-[#636363] transition ease-in-out delay-50 duration-300 ${selectedCards.length === 0 ? 'text-[#E5E5E5] cursor-not-allowed' : 'hover:bg-red-100'}`}
                                onClick={removeSelectedCards}
                                disabled={selectedCards.length === 0}
                            >
                                <IoTrash className='text-[15px]' />
                                {selectedCards.length === 0 ? '' : <span className='ml-2'>{selectedCards.length}</span>}
                                <span className="hidden sm:inline">&nbsp;รายการ</span>
                            </button>
                            :
                            <button className='text-[12px] border border-[#E5E5E5] px-4 py-2 rounded-[20px] ml-3 text-[#636363] transition ease-in-out delay-50 hover:bg-orange-100 duration-300' onClick={toggleSelectionMode}>เเก้ไข</button>}
                    </div>
                </div>
                <div className='w-full max-w-[1100px] flex flex-wrap'>
                    {cards.slice().reverse().map((card, index) => (
                        <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center'>
                            <Card
                                number={card.number}
                                onSelect={() => toggleSelectCard(cards.length - 1 - index)}
                                isToggle={selectToggle}
                                isSelected={selectedCards.includes(cards.length - 1 - index)}
                                creationTime={card.creationTime}
                                authorName={data.length > 0 && data[card.number] ? data[card.number].name : ''}
                            />
                        </div>
                    ))}

                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Container;
