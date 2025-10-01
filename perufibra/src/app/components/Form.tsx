'use client';

import React, { useState } from 'react';
import axios from 'axios';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('https://api.com/submit', {
        name,
        phone
      });
      setResponseMessage('¡Gracias por contactarnos! En breve, un asesor se pondrá en contacto contigo.');
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
    <div className="absolute top-10 right-10 z-20 hidden lg:block rounded-4xl overflow-hidden">
      <div className="w-full max-w-[350px] bg-white bg-opacity-95 rounded-xl shadow-2xl p-9 text-left">
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
    </div>
  );
};

export default Form;

