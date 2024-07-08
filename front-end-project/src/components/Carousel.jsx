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
    autoplaySpeed: 2000,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
          adaptiveHeight : true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          dots : true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
        }
      }
    ]
  };

  return (
    <div className="slider-container relative w-full mx-auto overflow-x-hidden h-[250px] sm:h-[280px] md:h-[400px] lg:h-[400px] overflow-y-hidden">
      <Slider {...settings}> 
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <img src={slide} className="w-full hover:cursor-pointer" style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
   </div>
  );
};

export default Carousel;
