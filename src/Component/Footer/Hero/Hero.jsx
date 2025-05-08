import React from "react";
import img1 from "../../src/Component/Assets/Hero/img1.png";
import img2 from "../../src/Component/Assets/Hero/img2.png";
import img3 from "../../src/Component/Assets/Hero/img3.png";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <div className="relative z-[-20] w-full overflow-hidden">
      <Slider {...settings} >
        {/* Hero first img section  */}
        <div className="">
          <img
            className="hidden sm:block h-[550px] w-full object-fit"
            src={img1}
            alt="Fast performance showcase"
            loading="lazy"
          />

          {/* <img
          className="h-160   w-full object-fit  sm:hidden "
          src={img3}
          alt="Fast performance showcase"
          loading="lazy"
        />  */}

          {/* Text Overlay */}
          <div className="  w-full border-white  absolute   flex flex-col justify-center items-center px-10 sm:px-37 lg:px-70 md:px-50 bottom-20 sm:bottom-24 lg:bottom-20 ">
            <h1 className="text-4xl text-white text-center font-extrabold  md:text-5xl">
              THE SHOW THAT MAKES FAST FASTER
            </h1>
            <p className="text-lg text-white mt-2 text-center">
              The new Nike Vaporfly 4 is built to push you urther,faster
            </p>
            <button className="bg-white font-bold text-black py-2 px-5 rounded-4xl mt-5 outline-1 hover:bg-black hover:border-white hover:text-white  ">
              Shop
            </button>
          </div>
        </div>
        {/* second img section */}
        <div className="">
          <img
            className="h-[550px] sm:w-full  object-fit"
            src={img2}
            alt="Fast performance showcase"
            loading="lazy"
          />

          {/* Text Overlay */}
          <div className="  w-full border-white  absolute   flex flex-col justify-center items-center px-20 sm:px-37 lg:px-70 md:px-50 bottom-17 sm:bottom-24 lg:bottom-20 ">
            <h1 className="text-4xl text-white text-center font-extrabold  md:text-5xl">
              MAKING BIG MOVES
            </h1>
            <p className="text-lg text-white mt-2 text-center">
              Future NFL star Ashton Jeanty's ready to make a statement on and
              off{" "}
            </p>
            <button className="bg-white font-bold text-black py-2 px-5 rounded-4xl mt-5 outline-1 hover:bg-black hover:border-white hover:text-white">
              Shop
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
