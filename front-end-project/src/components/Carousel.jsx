import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const slides = [
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373'
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px'
  };

  return (
    <div className="slider-container relative w-full mx-auto h-[400px] overflow-x-hidden overflow-y-hidden">
      <Slider {...settings}> 
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <img src={slide} className="w-full hover:cursor-pointer" style={{ width: '700px', height: '373px' }} />
          </div>
        ))}
      </Slider>
   </div>
  );
};

export default Carousel;
