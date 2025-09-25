import React from "react";

interface Plan {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    title: "Plan Básico",
    price: "S/ 49.90",
    features: [
      "Internet 50 Mbps",
      "Llamadas ilimitadas",
      "1 dispositivo",
    ],
  },
  {
    title: "Plan Estándar",
    price: "S/ 69.90",
    features: [
      "Internet 100 Mbps",
      "Llamadas ilimitadas",
      "3 dispositivos",
      "Soporte técnico 24/7",
    ],
    recommended: true,
  },
  {
    title: "Plan Premium",
    price: "S/ 99.90",
    features: [
      "Internet 200 Mbps",
      "Llamadas ilimitadas",
      "5 dispositivos",
      "Soporte técnico 24/7",
      "TV HD incluida",
    ],
  },
];

export default function PlansSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Elige el plan perfecto para ti
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Planes flexibles para adaptarse a tus necesidades
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl shadow-lg p-6 border transition hover:scale-105 hover:shadow-xl ${
                plan.recommended
                  ? "border-red-500 ring-2 ring-red-300"
                  : "border-gray-200"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs px-3 py-1 rounded-br-xl font-semibold">
                  Recomendado
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-3xl font-extrabold text-red-600 mb-4">
                {plan.price}
                <span className="text-sm text-gray-600 font-normal"> /mes</span>
              </p>

              <ul className="text-sm text-gray-700 mb-6 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm font-medium transition">
                Solicitar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
