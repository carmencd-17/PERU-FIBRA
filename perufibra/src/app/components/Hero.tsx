import type { CSSProperties } from "react";
// Carousel
import Carousel from "./Carousel/Carousel";
import Form from "../components/Form";

// Imágenes de banners
const BannerDesktop1 = "/img/banner-perufibra1.webp";
const BannerDesktop2 = "/img/banner-perufibra2.webp";


// Icono
const icon = "/img/mob.svg";


// Opciones del carousel
const OPTIONS: any = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};

// Contadores y configuraciones de imágenes
const SLIDE_COUNT = 2;
const SLIDES: number[] = [2, 1];
const STYLES_DESKTOP: CSSProperties = {};

// Imágenes para escritorio
const imagesDesktop = [
   BannerDesktop1,
   BannerDesktop2,
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-2 min-h-[1000px]">

      {/* Carousel para escritorios */}
      <Carousel
        classNameSlide="embla__slide"
        slides={SLIDES}
        images={imagesDesktop}
        options={OPTIONS}
        haveButtons={true}
        haveDots={true}
        styles={STYLES_DESKTOP}
        className="desktop"
        interval={5000}/>

      {/* Formulario de contacto */}
        <Form
          modal={true}
          className="absolute top-3 right-3 z-20 w-[300px] max-w-full rounded-2xl shadow-2xl border border-[#ee122c] p-4"
          textLabel="Cámbiate hoy y disfruta una conexión superior."
          classNameButton="bg-[#ee122c] text-white w-full rounded-lg mt-2 text-base font-bold py-2"
          placeholderName="Nombre"
          placeholderPhone="Nº de celular"
          buttonText="Solicitar llamada"
          textPolicy="Ingrese su número sin anteponer el (+51)"
        />

      {/* Separadores y el icono */}
      <div className="flex items-center justify-center max-lg:p-14 gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <img className="w-[50px] mx-4" src={icon} alt="icon" />
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
    </section>
  );
}
