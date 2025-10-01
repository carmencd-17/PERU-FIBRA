"use client";

type Variant = "#D80319" | "#F4BA00";

type Feature = {
  icon: string;      
  title: string;
  text: string;
  variant: Variant;  
};

const FEATURES: Feature[] = [
  {
    icon: "/img/icono-fibra 1.png",
    title: "100% Fibra Óptica",
    text:
      "Disfruta de descargas rápidas y transmisiones en alta definición sin interrupciones. Conéctate con estabilidad en todo momento gracias a nuestra red de vanguardia.",
    variant: "#D80319",
  },
  {
    icon: "/img/inte-ilim-rojo 1.png",
    title: "Internet Ilimitado",
    text:
      "Olvídate de límites en el consumo de datos. Navega, trabaja, transmite y diviértete sin restricciones.",
    variant: "#F4BA00",
  },
  {
    icon: "/img/icono-simetrico 2.png",
    title: "Internet Simétrico",
    text:
      "Velocidades iguales de carga y descarga para archivos grandes y videollamadas fluidas. Experimenta una conexión estable sin interrupciones.",
    variant: "#D80319",
  },
  {
    icon: "/img/wifi-rojo 1.png",
    title: "Wi-fi doble banda",
    text:
      "Navega con bandas de 2.4GHz y 5GHz para mayor velocidad. Descargas rápidas y transmisiones sin interferencias.",
    variant: "#F4BA00",
  },
];

function cardClasses(variant: Variant) {
  // Colores según el mock
  if (variant === "#D80319") {
    // fondo rojo, textos en blanco
    return {
      wrapper: "bg-[#D80319] text-white",
      title: "text-white",
      body: "text-white/90",
    };
  }
  // fondo amarillo, textos rojos
  return {
    wrapper: "bg-[#F4BA00] text-[#D80319]",
    title: "text-[#ffff]",
    body: "text-[#ffff]/90",
  };
}

export default function Features() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-15 py-10 lg:py-14 bg-white">
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto mb-10 lg:mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-10">
          <div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#D80319]">
              Internet Hogar Ilimitado
              <br />
              <span className="text-[#D80319] font-bold">con la más alta velocidad</span>
            </h2>
          </div>
          {/* línea a la derecha en pantallas grandes */}
          <div className="hidden lg:block flex-1 h-[3px] bg-[#D80319] translate-y-[-6px]" />
        </div>
      </div>

      {/* Tarjetas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {FEATURES.map((f, i) => {
          const c = cardClasses(f.variant);
          return (
            <article
              key={i}
              className={`${c.wrapper} rounded-[28px] p-7 lg:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]`}>
              <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-full h-full object-contain"
                  loading="lazy"/>
              </div>

              <h3
                className={`${c.title} text-center text-[20px] lg:text-[22px] font-extrabold tracking-tight mb-3`}>
                {f.title}
              </h3>

              <p
                className={`${c.body} text-center text-[14.5px] leading-6 lg:leading-7`}>
                {f.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
