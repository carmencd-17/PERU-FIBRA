import React from "react"; 
import { IoHomeOutline } from "react-icons/io5";

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
    subtext: [
      "Internet ilimitado",
      "Wifi doble banda",
      "Sin costo de instalación",
    ],
  },
  {
    title: "Internet",
    description: "100% Fibra Óptica",
    megas: "600 Mbps",
    price: "S/ 69",
    paymentType: "Pago Mensual",
    subtext: [
      "Internet ilimitado",
      "Wifi doble banda",
      "Sin costo de instalación",
    ],
    recommended: true,
  },
];

export default function PlansSection() {
  return (
    <section className="py-20 px-25 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#D80319" }}>
            Nuestros Planes de Internet Hogar
          </h2>
          <IoHomeOutline color="#D80319" size={40}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-lg p-9 text-center border-3 border-[#D80319] w-[400px] mx-auto">
                
              {/* Título y velocidad */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-xl font-semibold text-black mb-5">{plan.description}</p>
              <p className="text-3xl font-extrabold text-[#D80319] mb-7">{plan.megas}</p>
              <p className="text-5xl font-semibold text-black mb-1">{plan.price}</p>
              <p className="text-m font-semibold text-black mb-10">Pago Mensual</p>

              {/* Características con línea debajo */}
              <ul className="text-sm text-black mb-6 space-y-3 text-center">
                {plan.subtext.map((item, i) => (
                  <li key={i} className="border-b border-gray-300 pb-2">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button className="w-[200px] border-2 border-[#D80319] hover:bg-[#D80319] text-[#D80319] hover:text-white py-2 px-5 rounded-lg text-lg font-bold transition">
                Quiero este plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


