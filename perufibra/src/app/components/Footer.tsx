import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/img/logo-Agora-blanco 1.png"
            alt="Logo"
            className="w-28" />
          <span className="ml-2 text-sm">Agente Autorizado</span>
        </div>

        {/* Información de contacto */}
        <div className="text-sm flex items-center">
          <span className="mr-2">Central de Ventas</span>
          <a
            href="tel:+987654321"
            className="flex items-center text-yellow-400 hover:text-white">
            <span className="font-bold text-lg">987 654 321</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
