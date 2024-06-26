import React from 'react';

const Carousel = () => {
  const slides = [
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373'
  ];

  return (
    <div className="relative w-full mx-auto overflow-x-hidden">
      <div className="flex items-center justify-center space-x-2">
        {slides.map((slide, index) => (
          <>
            <img 
              key={index} 
              src={slide} 
            />
            <h1>{index}</h1>
          </>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
