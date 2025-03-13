import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Slider() {
  // Define three slides with unique id, background color, and text
  const slides = [
    {
      id: 0,
      color: "",
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
    <div className=" w-full max-w-xl mx-auto px-6 rounded-lg">
      {/* Slider Container */}
      <div className="relative overflow-hidden ">
        {/* Slides Wrapper: shifting slides based on activeIndex */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`${slide.color} flex-shrink-0 w-full h-64 flex items-center justify-center`}
            >
              <p className="text-black text-xl font-semibold">{slide.text}</p>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-bold p-2.5 rounded"
        >
          <MdKeyboardArrowLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-bold p-2.5 rounded-full inline-flex items-center cursor-pointer backdrop-blur-sm"
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
