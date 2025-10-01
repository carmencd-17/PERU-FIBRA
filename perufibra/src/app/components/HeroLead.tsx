"use client";

import { useState } from "react";

export default function HeroLead() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;
    // lógica de lo que se hace con los datos
    console.log({ name, phone });
    // Reset básico
    setName("");
    setPhone("");
    setAccepted(false);
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[450px]">
      <img
        src="/img/fondo formulario.webp"
        alt="Familia feliz"
        className="w-full h-full object-cover"/>
  
      {/* Formulario de contacto */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-20 bg-white p-5 rounded-3xl shadow-2xl w-[300px] sm:w-[570px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-2 text-center mx-auto">
          ¡Cámbiate a Perú Fibra y vive una conectividad superior!
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mb-4 text-center mx-auto ml-8">
          Déjanos tus datos y te ayudaremos a elegir la mejor opción para tu hogar.
        </p>
        <form>
          <div className="mb-5 flex justify-center">
            <input
              type="text"
              placeholder="Nombre"
              className="w-[90%] mx-auto p-1 border border-gray-300 rounded-xl bg-gray-200 text-gray-500"/>
          </div>
          <div className="mb-5 flex justify-center">
            <input
              type="text"
              placeholder="Nº de celular"
              className="w-[90%] p-1 border border-gray-300 rounded-xl bg-gray-200 text-gray-500"/>
          </div>
          <div className="mb-3 flex items-center ml-8">
            <input
              type="checkbox"
              className="mr-2"/>
            <span className="text-sm sm:text-base text-gray-500 ml">
              He leído y Aceptado la <span className="text-red-600">Política de Privacidad</span>
            </span>
          </div>
          <button className="w-[150px] bg-red-600 text-white py-2 px-4 rounded-xl text-lg sm:text-xl font-medium block mx-auto">
            Enviar
          </button>
        </form>
      </div>
    </div>

  );
}

