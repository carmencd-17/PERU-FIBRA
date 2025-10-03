"use client";
import { useState } from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import useDeviceType from '../hooks/useDeviceType';

export const Header = () => {
  const [number, setNumber] = useState({
    tel: '987654321',
    num: '987 654 321'
  });

  const isMobile = useDeviceType(); // Usamos el hook aquí para detectar el dispositivo

  return (
    <header className="sticky top-0 z-[120] w-full">
      <div className={`w-full min-h-[50px] sm:min-h-[100px] bg-[#D80319] text-white flex ${isMobile ? 'flex-col items-center justify-center gap-2 px-4 py-4' : 'sm:flex-row items-center justify-between px-9 py-2'}`}>
        
        {/* Logo */}
        <div className={`flex items-center justify-center ${isMobile ? 'mb-4' : ''}`}>
          <img
            src={"/img/logo-peru-fibra@2x 1.png"}
            alt="Perú Fibra"
            className="sm:h-[60px] object-contain w-[150px] sm:w-auto"/>
        </div>

        {/* Canal exclusivo de ventas y número de teléfono */}
        <div className={`flex ${isMobile ? 'flex-row items-center justify-center gap-2' : 'flex-row items-center gap-2 sm:gap-5 sm:justify-end w-full sm:w-auto'}`}>
          <span className={`font-semibold text-white text-sm sm:text-base lg:text-lg whitespace-nowrap ${isMobile ? 'mb-2' : ''}`}>
            Canal exclusivo de ventas
          </span>
          <a
            href={`tel:${number.tel}`}
            className="flex items-center gap-1 sm:gap-2 bg-yellow-500 text-white min-h-[46px] sm:min-w-[180px] sm:px-5 px-4 py-2 rounded-full text-sm sm:text-base font-bold hover:bg-yellow-400 transition-colors hover:text-black">
            <BiSolidPhoneCall color="#D80319" size={24} />
            <span className="transform translate-y-0.5 text-lg">{number.num}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
