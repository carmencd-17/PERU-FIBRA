"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import useDeviceType from "../hooks/useDeviceType";

export default function HeroLead() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  // modales
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isMobile = useDeviceType();

  // imagen de fondo por device
  const bgSrc = isMobile
    ? "/img/fondo formulario footer-movil.png" // móvil
    : "/img/fondo formulario.webp";           // desktop

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted || loading) return;

    // saneo básico antes de enviar
    const trimmedName = name.trim();
    const trimmedPhone = phone.replace(/\s+/g, "");

    if (!trimmedName) {
      setErrorMessage("Ingresa tu nombre.");
      setShowError(true);
      return;
    }
    if (!/^\d{9}$/.test(trimmedPhone)) {
      setErrorMessage("Ingresa un número de 9 dígitos.");
      setShowError(true);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      await axios.post("https://crm.develzpbx.com:4004/call-me", {
        name: trimmedName,
        phone: trimmedPhone,
      });

      // Éxito → modal rojo
      setShowSuccess(true);

      // limpiar form
      setName("");
      setPhone("");
      setAccepted(false);
    } catch (err: any) {
      const msg = err?.response?.data?.message || "Hubo un error, por favor intenta nuevamente.";
      setErrorMessage(msg);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  // accesibilidad: cerrar con Esc y bloquear scroll cuando hay modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showSuccess) setShowSuccess(false);
        if (showError) setShowError(false);
      }
    };
    if (showSuccess || showError) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showSuccess, showError]);

  return (
    <div className={`relative w-full ${isMobile ? "" : "h-[500px] sm:h-[450px]"}`}>
      {/* Imagen */}
      <img
        src={bgSrc}
        alt="Familia feliz"
        className={isMobile ? "w-full h-[107.5px] object-contain" : "w-full h-full object-cover"}/>

      {/* Contenedor del form: overlay en desktop, bloque debajo en móvil */}
      <div className={isMobile ? "relative w-full bg-[#ffffff] -mt-0 z-10" : "absolute top-1/2 right-10 -translate-y-1/2 z-20"}>
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
                autoComplete="name"
                autoCapitalize="words"
                spellCheck={false}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-700"/>
            </div>

            <div className="mb-4">
              <input
                type="tel"
                inputMode="numeric"
                pattern="\d*"
                placeholder="Nº de celular"
                autoComplete="tel-national"
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
              disabled={!accepted || loading}
              aria-disabled={!accepted || loading}
              aria-busy={loading}
              className="w-[150px] bg-red-600 text-white py-2 px-4 rounded-full text-base sm:text-lg font-semibold block mx-auto disabled:opacity-60">
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>

      {/* MODAL ÉXITO */}
      {showSuccess && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowSuccess(false)} aria-hidden="true" />
          {/* Tarjeta roja */}
          <div className="relative bg-[#D80319] text-white rounded-[28px] shadow-2xl w-[92%] max-w-[720px] px-6 py-8 sm:px-10 sm:py-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">¡Tu solicitud fue enviada con éxito!</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
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
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowError(false)} aria-hidden="true" />
          <div className="relative bg-white text-[#D80319] rounded-[28px] shadow-2xl w-full max-w-[640px] px-6 py-8 sm:px-10 sm:py-10 text-center">
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
}



