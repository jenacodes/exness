import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Slider() {
  // Define three slides with unique id, background color, and text
  const slides = [
    {
      id: 0,
      color: "bg-slidesbg",
      heading: "1000+ trading strategies",
      text: "Slide 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 1,
      color: "",
      text: "Slide 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      color: "",
      text: "Slide 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  // Current slide index
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
    <div className=" w-full max-w-xl mx-auto px-6 rounded-lg lg:hidden relative">
      {/* Slider Container */}
      <div className=" overflow-hidden ">
        {/* Slides Wrapper: shifting slides based on activeIndex */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`${slide.color} flex-shrink-0 w-full h-30 flex items-center justify-center rounded-lg p-2`}
            >
              <div>
                <h2 className="text-black text-base text-left font-semibold">
                  {slide.heading}
                </h2>
                <p className="text-white text-sm ">{slide.text}</p>
              </div>
              <div
                style={{
                  backgroundImage: `url(https://my.ex-markets.pro/download/e8/e82ca/e82ca62e19c1241bb9224e4b3756eeae.webp)`,
                }}
                className="bg-cover bg-center bg-no-repeat  min-w-[100px] min-h-[100px]"
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
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
