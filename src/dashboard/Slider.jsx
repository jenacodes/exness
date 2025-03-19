import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Slider() {
  // Define slides with unique id, optional background color, heading, text, and image URL
  const slides = [
    {
      id: 0,
      color: "bg-slidesbg",
      heading: "1000+ trading strategies",
      text: "Availiable for you to invest in",
      image:
        "https://my.ex-markets.pro/download/3d/3d461/3d461af64253a12a718b447b76a96ade.webp",
    },
    {
      id: 1,
      color: "bg-slidesbg",
      heading: "Secure your Funds",
      text: "With push notifications to confirm withdrawals",
      image:
        "https://my.ex-markets.pro/download/e8/e82ca/e82ca62e19c1241bb9224e4b3756eeae.webp",
    },
    {
      id: 2,
      color: "bg-slidesbg",
      heading: "Become a partner",
      text: "invite a friend and earn up to 40% of their income",
      image:
        "https://my.ex-markets.pro/download/29/29864/29864a05ecae050738523b9e1f0fcbd2.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Move to the next slide (with wrap-around)
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Move to the previous slide (with wrap-around)
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="w-full px-6 rounded-lg  relative lg:hidden">
        {/* Slider Container */}
        <div className="overflow-hidden">
          {/* Slides Wrapper: shifting slides based on activeIndex */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`${slide.color} flex-shrink-0 w-full h-28 flex items-center justify-between rounded-lg p-3.5`}
              >
                <div>
                  {slide.heading && (
                    <h2 className="text-black text-base text-left font-semibold">
                      {slide.heading}
                    </h2>
                  )}
                  <p className="text-black text-sm">{slide.text}</p>
                </div>
                <div
                  style={{ backgroundImage: `url(${slide.image})` }}
                  className="bg-cover bg-center bg-no-repeat min-w-[100px] min-h-[100px]"
                ></div>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/3 left-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-75 hover:bg-opacity-100 text-gray-500 font-bold p-2.5 rounded-full inline-flex items-center cursor-pointer backdrop-blur-sm"
          >
            <MdKeyboardArrowLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/3 right-0 transform -translate-y-1/2 bg-gray-300 bg-opacity-75 hover:bg-opacity-100 text-gray-500 font-bold p-2.5 rounded-full inline-flex items-center cursor-pointer backdrop-blur-sm"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>

        {/* Indicator Buttons */}
        <div className="flex justify-center my-3 space-x-2 lg:hidden">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeIndex === index ? "bg-gray-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
      {/* Desktop Layout: visible only on large screens */}
      <div className="hidden justify-between lg:px-12 lg:flex">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.color} w-full h-28 flex items-center justify-between rounded-lg p-3.5 mx-1`}
          >
            <div>
              {slide.heading && (
                <h2 className="text-black text-base text-left font-semibold">
                  {slide.heading}
                </h2>
              )}
              <p className="text-black text-sm">{slide.text}</p>
            </div>
            <div
              style={{ backgroundImage: `url(${slide.image})` }}
              className="bg-cover bg-center bg-no-repeat min-w-[100px] min-h-[100px]"
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}
