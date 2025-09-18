import { useState } from 'react';
import logo from '/public/images/logo-perufibra.svg'; // Asegúrate de colocar tu logo en la carpeta public/images
import { FaPhoneAlt } from 'react-icons/fa';

export const Header = () => {
  // Definir el número de teléfono directamente
  const [number, setNumber] = useState({
    tel: '987654321',
    num: '987 654 321'
  });

  return (
    <header className="sticky top-0 z-[120] w-full">
      <div className="w-full min-h-[60px] bg-[#EF3829] text-white flex justify-between items-center px-4 lg:px-8">
        
        {/* Logo de Perú Fibra */}
        <div className="flex items-center">
          <img src={logo} alt="Perú Fibra" className="h-10" />
        </div>
        
        {/* Canal exclusivo de ventas y número de teléfono */}
        <div className="flex items-center gap-2 max-sm:py-2 max-sm:justify-center max-sm:w-full">
          <span className="font-semibold text-white text-sm max-lg:text-base">
            Canal exclusivo de ventas
          </span>
          <a
            href={`tel:${number.tel}`}
            className="flex items-center gap-2 bg-yellow-500 text-black py-1 px-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            <FaPhoneAlt className="text-xl" />
            {number.num}
          </a>
        </div>
      </div>
    </header>
  );
};
