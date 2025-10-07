"use client";

import { useState } from "react";
import useDeviceType from "../hooks/useDeviceType";

export default function HeroLead() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const isMobile = useDeviceType();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;
    console.log({ name, phone });
    setName("");
    setPhone("");
    setAccepted(false);
  };

  // imagen de fondo por device
  const bgSrc = isMobile
    ? "/img/fondo formulario footer-movil.png" // <--  móvil
    : "/img/fondo formulario.webp"; // <--  desktop

  return (
    <div className={`relative w-full ${isMobile ? "" : "h-[500px] sm:h-[450px]"}`}>
      {/* Imagen */}
      <img
        src={bgSrc}
        alt="Familia feliz"
        className={isMobile ? "w-full h-[107.5px] object-contain" : "w-full h-full object-cover"}/>

      {/* Contenedor del form: overlay en desktop, bloque debajo en móvil */}
      <div className={isMobile ? "relative w-full bg-[#ffffff] -mt-0 z-10 " : "absolute top-1/2 right-10 -translate-y-1/2 z-20"}>
        <div className={isMobile ? "w-full max-w-[380px] mx-auto bg-white p-5 rounded-3xl shadow-2xl" : "w-[300px] sm:w-[570px] bg-white p-5 rounded-3xl shadow-2xl"}>
          <h2 className="text-[21px] sm:text-3xl font-extrabold text-red-600 mb-3 text-center">
            ¡Cámbiate a Perú Fibra y vive una conectividad superior!
          </h2>

          <p className="text-sm sm:text-lg text-gray-700 mb-5 text-center">
            Déjanos tus datos y te ayudaremos a elegir la mejor opción para tu hogar.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-700"/>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Nº de celular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-700"/>
            </div>

            <div className="mb-5 flex items-center">
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                className="mr-2"/>
              <span className="text-sm sm:text-base text-gray-600">
                He leído y Aceptado la{" "}
                <span className="text-red-600 font-medium">Política de Privacidad</span>
              </span>
            </div>

            <button
              type="submit"
              disabled={!accepted}
              className="w-[150px] bg-red-600 text-white py-2 px-4 rounded-full text-base sm:text-lg font-semibold block mx-auto">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


