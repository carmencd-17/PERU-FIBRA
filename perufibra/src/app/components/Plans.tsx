"use client";
import React, { useState } from "react";
import axios from "axios";
import { IoHomeOutline } from "react-icons/io5";
import useDeviceType from "../hooks/useDeviceType";

interface Plan {
  title: string;
  description: string;
  megas: string;
  price: string;
  paymentType: string;
  subtext: string[];
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    title: "Internet",
    description: "100% Fibra Óptica",
    megas: "300 Mbps",
    price: "S/ 59",
    paymentType: "Pago Mensual",
    subtext: ["Internet ilimitado", "Wifi doble banda", "Sin costo de instalación"],
  },
  {
    title: "Internet",
    description: "100% Fibra Óptica",
    megas: "600 Mbps",
    price: "S/ 69",
    paymentType: "Pago Mensual",
    subtext: ["Internet ilimitado", "Wifi doble banda", "Sin costo de instalación"],
    recommended: true,
  },
];

export default function PlansSection() {
  const isMobile = useDeviceType();

  // Modal state
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const openModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setOpen(true);
    setResponseMessage("");
  };
  const closeModal = () => {
    if (loading) return;
    setOpen(false);
    setSelectedPlan(null);
    setName("");
    setPhone("");
    setAcceptedPolicy(false);
    setResponseMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPolicy) return;
    setLoading(true);
    try {
      await axios.post("https://crm.develzpbx.com:4004/call-me", {name,phone});
      setResponseMessage(
        "¡Tu solicitud fue enviada con éxito! En breve, uno de nuestros asesores te llamará para iniciar tu experiencia con Perú Fibra.");
      setName("");
      setPhone("");
    } catch {
      setResponseMessage("Hubo un error, por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="py-10 px-4 sm:px-6 lg:px-20 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      {/* Encabezado */}
      <div className={`${isMobile ? "flex flex-col items-center gap-2 mb-12" : "flex justify-center items-center gap-2 mb-20"}`}>
        <span className={`${isMobile ? "order-1 mb-2" : "order-2 mb-0"} inline-flex`}>
          <IoHomeOutline color="#D80319" size={40} />
        </span>
        <h2
          className={`text-[#D80319] ${isMobile ? "order-2 text-[28px] font-extrabold leading-tight text-center" : "order-1 text-3xl sm:text-4xl font-bold text-center sm:text-left"}`}>
          Nuestros Planes{isMobile && <br />} de Internet Hogar
        </h2>
      </div>

      {/* Cards */}
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-8`}>
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl shadow-lg p-9 text-center border-3 border-[#D80319] mx-auto w-full sm:w-[450px] lg:w-[500px] xl:w-[400px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
            <p className="text-xl font-semibold text-black mb-5">{plan.description}</p>
            <p className="text-3xl font-extrabold text-[#D80319] mb-7">{plan.megas}</p>
            <p className="text-5xl font-semibold text-black mb-1">{plan.price}</p>
            <p className="text-m font-semibold text-black mb-10">Pago Mensual</p>

            <ul className="text-sm text-black mb-6 space-y-3 text-center">
              {plan.subtext.map((item, i) => (
                <li key={i} className="border-b border-gray-300 pb-2">
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openModal(plan)}
              className="w-[200px] border-2 border-[#D80319] hover:bg-[#D80319] text-[#D80319] hover:text-white py-2 px-5 rounded-lg text-lg font-bold transition">
              Quiero este plan
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* MODAL */}
    {open && (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center"
        role="dialog"
        aria-modal="true">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={closeModal} aria-hidden="true" />

        {/* Content (ancho compacto y responsive) */}
        <div className="  relative rounded-[28px] overflow-hidden shadow-2xl bg-[#F4BA00] w-[94%] max-w-[600px] lg:w-[78%] lg:max-w-[1100px]">

          {/* Layout: imagen arriba en móvil / fija a la izquierda en desktop */}
          <div className="grid grid-cols-[110px_minmax(0,1fr)] lg:grid-cols-[400px_minmax(0,1fr)] h-[450px] lg:h-[520px]">

            {/* Imagen */}
            <picture className="w-full h-full">
              <source media="(min-width:1024px)" srcSet="/img/fondo-formulario-popup.png" />
              <img
                src="/img/fondo-formulario-popup-movil.png"  // fallback móvil
                alt="Familia"
                className="w-full h-full object-cover object-left"/>
            </picture>

            {/* Panel formulario */}
            <div className="relative p-5 pt-5 sm:p-7 lg:p-10 xl:p-17 lg:pt-10">

              <h3 className="text-[25px] sm:text-3xl lg:text-3xl leading-tight font-extrabold text-black text-center mb-3">
                Vive la velocidad que tu hogar merece
              </h3>
              <p className="text-[15px] sm:text-base text-black/80 text-center mb-5 lg:mb-6 font-semibold">
                Ingresa tus datos y un asesor especializado te guiará paso a paso para activar tu plan
                {selectedPlan ? ` ${selectedPlan.megas}` : ""}.
              </p>

              <form onSubmit={handleSubmit} className="max-w-[560px] mx-auto">
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 lg:py-3 lg:px-4 rounded-xl bg-gray-200 text-gray-700 text-[15px] lg:text-base outline-none"/>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Nº de celular"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 lg:py-3 lg:px-4 rounded-xl bg-gray-200 text-gray-700 text-[15px] lg:text-base outline-none"/>
                </div>

                <label className="flex items-start gap-2 mb-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedPolicy}
                    onChange={() => setAcceptedPolicy(!acceptedPolicy)}
                    className="mt-1"/>
                  <span className="text-sm text-black">
                    He leído y Aceptado la{" "}
                    <span className="text-[#D80319] font-semibold">Política de Privacidad</span>
                  </span>
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!acceptedPolicy || loading}
                    className="min-w-[120px] lg:min-w-[160px] rounded-full bg-[#D80319] hover:bg-[#c10215] text-white font-bold px-5 lg:px-6 py-2 lg:py-3 text-[15px] lg:text-base ">
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                </div>

                {responseMessage && (
                  <p className="mt-4 text-center text-sm text-black font-medium">{responseMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
  </section>
);

}
