import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card1 from "../../Assets/Product/card1.avif";
import card2 from "../../Assets/Product/card2.avif";
import card3 from "../../Assets/Product/card3.avif";
import card4 from "../../Assets/Product/card4.avif";
import card5 from "../../Assets/Product/card5.avif";
import card6 from "../../Assets/Product/card6.avif";
import card7 from "../../Assets/Product/card7.avif";
import card8 from "../../Assets/Product/card8.avif";

const imgList = [
  { id: 0, img: card1, link: "/" },
  { id: 1, img: card2, link: "/" },
  { id: 2, img: card3, link: "/" },
  { id: 3, img: card4, link: "/" },
  { id: 4, img: card5, link: "/" },
  { id: 5, img: card6, link: "/" },
  { id: 6, img: card7, link: "/" },
  { id: 7, img: card8, link: "/" },
];

export default function Product() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false, // Disable default arrows
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800, // 2xl screens
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1536, // 2xl screens
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // extra small
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <style>
        {`
          .custom-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            cursor: pointer;
            z-index: 10;
            border: 1px solid #e5e7eb;
          }
          
          .custom-arrow:hover {
            background-color: #f3f4f6;
          }
          
          .custom-arrow.prev {
            left: 20px;
          }
          
          .custom-arrow.next {
            right: 20px;
          }
          
          .custom-arrow svg {
            width: 20px;
            height: 20px;
            color: #4b5563;
          }
        `}
      </style>

      <div className="relative w-[95%] mx-auto mt-4">
        <button 
          className="custom-arrow prev" 
          onClick={goToPrev}
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <Slider ref={sliderRef} {...settings}>
          {imgList.map((item) => (
            <div key={item.id} className="flex justify-center px-2 mx-8">
              <a href={item.link}>
                <img className="h-72 w-auto" src={item.img} alt="product" />
              </a>
            </div>
          ))}
        </Slider>
        
        <button 
          className="custom-arrow next " 
          onClick={goToNext}
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}