import React from 'react';

const Modal = () => {
  return (
    <>
      <div className='fixed inset-0 bg-black opacity-50 z-40'></div>
      <div className='w-[600px] h-[600px] bg-blue-100 fixed left-[50%] top-[50%] z-50 opacity-80 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl'>

      </div>
    </>
  );
}

export default Modal;
