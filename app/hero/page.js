'use client';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, content: "We have our fellowship every Thursday", imageUrl: "/fellowship.png" },
    { id: 2, content: "Message to young people", imageUrl: "/prayer.png" },
    { id: 3, content: "Choir training", imageUrl: "/music.png" },
    { id: 4, content: "AMO ministry", imageUrl: "/prayer.png" },
    { id: 5, content: "Prayer", imageUrl: "/prayer.png" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] max-w-full mx-auto overflow-hidden shadow-lg">
      <div
        className="carousel-slide relative w-full h-full bg-cover bg-center object-cover transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentIndex].imageUrl})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-semibold bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <div
            className="bg-yellow-600 bg-opacity-80 p-4 md:p-6 rounded-lg shadow-xl"
          >
            {slides[currentIndex].content}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-300"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-300"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
