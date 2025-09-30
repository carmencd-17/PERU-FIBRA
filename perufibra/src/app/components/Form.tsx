'use client';

import React, { useState } from 'react';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="absolute top-10 right-30 z-20 hidden lg:block">
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

          <div className="mb-4">
            <input
              type="text"
              placeholder="Nº de celular"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg bg-gray-00 text-sm text-gray-500"/>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            *Ingrese su número sin anteponer el (+51)
          </p>

          <div className="flex items-start mb-4">
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
            className="w-[150px]  bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition disabled:opacity-100 block mx-auto">
            Solicitar llamada
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

