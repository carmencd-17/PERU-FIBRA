"use client"
import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiSolidPhoneCall } from "react-icons/bi";

export const Header = () => {
  // Definir el número de teléfono directamente
  const [number, setNumber] = useState({
    tel: '987654321',
    num: '987 654 321'
  });

   return (
    <header className="sticky top-0 z-[120] w-full">
      <div className="w-full min-h-[50px] sm:min-h-[100px] bg-[#D80319] text-white flex flex-col sm:flex-row items-center px-4 sm:px-9 py-2 sm:py-2">
        {/* Logo de Perú Fibra */}
        <div className="flex items-center mb-2 sm:mb-0 flex-grow">
          <img
            src={"/img/logo-peru-fibra@2x 1.png"}
            alt="Perú Fibra"
            className="h-12 sm:h-10 w-auto object-contain"/>
        </div>

        {/* Canal exclusivo de ventas y número de teléfono */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 sm:justify-start max-sm:justify-center sm:w-auto max-sm:w-full ml-200">
          <span
            className="font-semibold text-white text-sm sm:text-base text-lg whitespace-nowrap"
            style={{ fontFamily: "Anton, sans-serif" }}>
            Canal exclusivo de ventas
          </span>
          <a
            href={`tel:${number.tel}`}
            className="flex items-center gap-1 sm:gap-2 bg-yellow-500 text-white min-h-[46px] min-w-[180px] sm:px-5 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors hover:text-black">
            <BiSolidPhoneCall color="#D80319" size={27} />
            <span className="transform translate-y-0.5 text-lg">
              {number.num}
            </span>
          </a>
        </div>
      </div>
    </header>
);

};