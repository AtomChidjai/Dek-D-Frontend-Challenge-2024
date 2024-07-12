import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/ExtraStyle.css'; 

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sliderRef, setSliderRef] = useState(null);

  const slides = [
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373',
    'https://placehold.co/700x373'
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',
    lazyLoad: 'ondemand',
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
          adaptiveHeight: true
        }
      }
    ]
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (sliderRef) {
      sliderRef.slickGoTo(0);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sliderRef]);

  return (
    <div className="slider-container relative w-full mx-auto overflow-x-hidden overflow-y-hidden">
      <Slider ref={slider => setSliderRef(slider)} {...settings}> 
        {slides.map((slide, index) => (
          <div key={index} className="lg:px-[3px]">
            <img src={slide} className="w-full hover:cursor-pointer" style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
