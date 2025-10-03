'use client';

import React, { useState } from 'react';
import axios from 'axios';
import useDeviceType from "../hooks/useDeviceType";

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const isMobile = useDeviceType();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

  const isMobile = useDeviceType();  
    try {
      const res = await axios.post('https://crm.develzpbx.com:4004/call-me', {
        name,
        phone
      });
      setResponseMessage('¡Tu solicitud fue enviada con éxito! En breve, uno de nuestros asesores te llamará para iniciar tu experiencia con Perú Fibra.');
      setLoading(false);
      // Limpiar los campos después de enviar
      setName('');
      setPhone('');
    } catch (error) {
      setResponseMessage('Hubo un error, por favor intenta nuevamente.');
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-10 right-10 z-20 rounded-4xl overflow-hidden">
      {/* Contenedor del formulario */}
      <div className={`w-full max-w-[350px] bg-white bg-opacity-95 rounded-xl shadow-2xl p-9 text-left ${isMobile ? 'mt-4' : ''}`}>
        <h2 className="text-xl font-bold text-red-600 text-center mb-2">Cámbiate hoy y disfruta una conexión superior.</h2>
        <p className="text-sm text-gray-700 mb-4">
          Déjanos tus datos y un asesor especializado se contactará contigo.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 text-sm text-gray-500"/>
          </div>

          <div className="mb-2">
            <input
              type="text"
              placeholder="Nº de celular"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 text-sm text-gray-500"/>
          </div>

          <p className="text-xs text-gray-500 mb-7">
            *Ingrese su número sin anteponer el (+51)
          </p>

          <div className="flex items-start mb-5">
            <input
              type="checkbox"
              checked={acceptedPolicy}
              onChange={() => setAcceptedPolicy(!acceptedPolicy)}
              className="mt-1 mr-2"/>
            <span className="text-xs text-gray-500">
              He leído y Aceptado la{" "}
              <span className="font-semibold text-red-600">Política de Privacidad</span>
            </span>
          </div>

          <button
            type="submit"
            disabled={!acceptedPolicy}
            className="w-[150px] font-bold bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition disabled:opacity-100 block mx-auto">
            Solicitar llamada
          </button>
        </form>
      </div>

      {/* Mensaje de respuesta */}
      {responseMessage && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-red-600 text-white text-center p-8 rounded-xl max-w-[500px] w-full">
            <h2 className="font-bold text-xl mb-4">{responseMessage}</h2>
            <button
              onClick={() => setResponseMessage("")}
              className="bg-white text-red-600 py-2 px-4 rounded-full">
              Volver
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;

