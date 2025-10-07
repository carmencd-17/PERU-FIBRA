'use client';

import React, { useState } from 'react';
import axios from 'axios';
import useDeviceType from "../hooks/useDeviceType";

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [loading, setLoading] = useState(false);

  // mensajes / modales
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const isMobile = useDeviceType();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPolicy || loading) return;
    setLoading(true);
    setErrorMessage('');

    try {
      await axios.post('https://crm.develzpbx.com:4004/call-me', { name, phone });

      // Éxito
      setShowSuccess(true);
      setName('');
      setPhone('');
      setAcceptedPolicy(false);
    } catch (err: any) {
      // Error
      const msg =
        err?.response?.data?.message ||
        'Hubo un error, por favor intenta nuevamente.';
      setErrorMessage(msg);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
  // contenedor: móvil debajo del banner con fondo rojo
  <div className={isMobile ? "relative w-full bg-[#D80319] py-6 px-4" : "absolute top-10 right-10 z-20"}>
    {/* tarjeta formulario */}
    <div className="w-full max-w-sm md:max-w-md lg:max-w-[22rem] bg-white/95 rounded-3xl shadow-2xl p-8 md:p-9 text-left mx-auto">
      <h2 className="text-xl font-bold text-red-600 text-center mb-2">
        Cámbiate hoy y disfruta una conexión superior.
      </h2>
      <p className="text-sm text-gray-700 mb-4 text-center">
        Déjanos tus datos y un asesor especializado se contactará contigo.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-gray-100 text-sm text-gray-700"/>
        </div>

        <div className="mb-2">
          <input
            type="text"
            placeholder="Nº de celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-gray-100 text-sm text-gray-700"/>
        </div>

        <p className="text-xs text-gray-500 mb-7">
          *Ingrese su número sin anteponer el (+51)
        </p>

        <label className="flex items-start mb-5 cursor-pointer gap-2">
          <input
            type="checkbox"
            checked={acceptedPolicy}
            onChange={() => setAcceptedPolicy(!acceptedPolicy)}
            className="mt-1"/>
          <span className="text-xs text-gray-600">
            He leído y Aceptado la{" "}
            <span className="font-semibold text-red-600">Política de Privacidad</span>
          </span>
        </label>

        <button
          type="submit"
          disabled={!acceptedPolicy || loading}
          className="w-44 sm:w-48 font-bold bg-red-600 hover:bg-red-700 text-white py-2 rounded-full text-sm transition disabled:opacity-60 block mx-auto">
          {loading ? "Enviando..." : "Solicitar llamada"}
        </button>
      </form>
    </div>

    {/* MODAL ÉXITO */}
    {showSuccess && (
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-0 sm:p-4" role="dialog" aria-modal="true">
        <div className="absolute inset-0 bg-black/60" onClick={() => setShowSuccess(false)} aria-hidden="true" />
        <div className="relative bg-[#D80319] text-white rounded-3xl shadow-2xl w-full mx-4 sm:mx-0 max-w-lg md:max-w-2xl px-8 py-10 sm:px-10 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">
            ¡Tu solicitud fue enviada con éxito!
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-10">
            En breve, uno de nuestros asesores te llamará para iniciar tu experiencia con Perú Fibra.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="inline-flex items-center gap-2 bg-white text-[#D80319] font-bold px-6 py-2 rounded-full hover:bg-gray-100">
            Volver ↩
          </button>
        </div>
      </div>
    )}

    {/* MODAL ERROR */}
    {showError && (
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-0 sm:p-4" role="dialog" aria-modal="true">
        <div className="absolute inset-0 bg-black/60" onClick={() => setShowError(false)} aria-hidden="true" />
        <div className="relative bg-white text-[#D80319] rounded-3xl shadow-2xl w-full mx-4 sm:mx-0 max-w-md md:max-w-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ocurrió un problema</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-black">{errorMessage}</p>
          <button
            onClick={() => setShowError(false)}
            className="inline-flex items-center gap-2 bg-[#D80319] text-white font-bold px-6 py-2 rounded-full hover:bg-[#c10215]">
            Volver ↩
          </button>
        </div>
      </div>
    )}
  </div>
);

};

export default Form;




