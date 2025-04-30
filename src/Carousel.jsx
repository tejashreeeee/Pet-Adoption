import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = ['/img1.png', '/img2.png', '/img3.png', '/img4.png', '/img5.png'];
const slogans = [
  "Give a Pet a Forever Home – Adopt, Don’t Shop!",
  "A Loving Heart Awaits – Find Your Furry Best Friend Today!",
  "Change a Life, One Paw at a Time – Adopt a Pet!",
  "Every Pet Deserves a Second Chance – Adopt Now!",
  "Open Your Heart, Open Your Home – Adopt a Pet Today!",
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Embedded Font & Animation Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

          @keyframes slideInBottom {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95) rotateX(60deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0px) scale(1) rotateX(0deg);
            }
          }

          .slogan-style {
            animation: slideInBottom 1s ease-out forwards;
            font-family: 'Dancing Script', cursive;
            font-size: 1.8rem;
            color: black;
            font-style: italic;
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
          }
        `}
      </style>

      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />

          {/* Slogan */}
          <div
            className={`absolute bottom-12 w-full text-center px-4 transition-all duration-1000 ${
              index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="slogan-style">{slogans[index]}</p>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-black rounded-full p-2 z-20"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 text-black rounded-full p-2 z-20"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

export default Carousel;
