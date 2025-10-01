import React from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-9">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/img/logo-Agora-blanco 1.png"
            alt="Logo"
            className="w-28" />
          <div className="h-8 w-px bg-white mx-4"></div> 
          <span className="ml-2 text-sm">Agente Autorizado</span>
        </div>

        {/* Información de contacto */}
        <div className="text-m flex flex-col items-center">
          <span className="mb-0.5">Central de Ventas</span>
          <div className="flex items-center">
            <span className="mr-2">
            <BiSolidPhoneCall color="#FFFFFF" size={22} />
            </span>
          <a
            href="tel:+987654321"
            className="text-white hover:text-white">
            <span className="text-lg">987 654 321</span>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
