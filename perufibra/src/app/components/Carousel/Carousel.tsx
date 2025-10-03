"use client"
import useDeviceType from "@/app/hooks/useDeviceType";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  images: string[];
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isMobile = useDeviceType(); // Usamos tu hook `useDeviceType` aquí

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlideInterval]);

  return (
    <div className={`relative w-full ${isMobile ? 'h-[550px]' : 'h-[400px]'} sm:h-[500px] overflow-hidden`}>
      <div
        className="absolute inset-0 w-full h-full flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-fill"/>
          </div>
        ))}
      </div>

      {/* Botón de retroceder */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-200 transition">
        <FaArrowLeft size={24} />
      </button>

      {/* Botón de siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-200 transition">
        <FaArrowRight size={24} />
      </button>

      {/* Indicadores de página */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            } transition`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
