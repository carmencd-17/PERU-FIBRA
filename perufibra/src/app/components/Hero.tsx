import type { CSSProperties } from "react";

// Imágenes de banners
import BannerDesktop1 from "../../../public/img/banner-plan79-lima.webp";
import BannerDesktop2 from "../../../public/img/Promo-Max95@0.5x.webp"; // Reemplazar con tu imagen
import BannerDesktop3 from "../../../public/img/banner-max79@0.5x.webp"; // Reemplazar con tu imagen
import BannerDesktop4 from "../../../public/img/new/2025-02-16-5.webp";
import BannerDesktop6 from "../../../public/img/Promo-Max95(2).webp";

import BannerMobile1 from "../../../public/img/banner-lima-vm.webp";
import BannerMobile2 from "../../../public/img/banner-promo-max95-VersionMovil@0.5x.webp"; // Reemplazar con tu imagen
import BannerMobile3 from "../../../public/img/banner-79-vm@0.5x.webp"; // Reemplazar con tu imagen
import BannerMobile4 from "../../../public/img/new/2025-02-16-5m.webp";
import BannerMobile6 from "../../../public/img/banner-promo-max95-VersionMovil(2).webp";

// Carousel
import Carousel from "../Carousel/Carousel";
import { Form } from "../Form";

// Icono
import icon from "../../../public/img/mob.svg";


// Opciones del carousel
const OPTIONS: any = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};

// Contadores y configuraciones de imágenes
const SLIDE_COUNT = 4;
const SLIDES: number[] = [4, 5, 2, 1];
const STYLES_MOBILE: CSSProperties = {};
const STYLES_DESKTOP: CSSProperties = {};

// Imágenes para móvil
const imagesMobile = [
  `${BannerMobile1.src}`,
  `${BannerMobile2.src}`,
  `${BannerMobile3.src}`,
  `${BannerMobile4.src}`,
  `${BannerMobile6.src}`,
];

// Imágenes para escritorio
const imagesDesktop = [
  `${BannerDesktop1.src}`,
  `${BannerDesktop2.src}`,
  `${BannerDesktop3.src}`,
  `${BannerDesktop4.src}`,
  `${BannerDesktop6.src}`,
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-2 min-h-[1000px]">
      {/* Carousel para móviles */}
      <Carousel
        classNameSlide="embla__slide"
        slides={SLIDES}
        images={imagesMobile}
        options={OPTIONS}
        haveButtons={true}
        haveDots={true}
        styles={STYLES_MOBILE}
        className="mobile"
        interval={5000}
      />

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
        interval={5000}
      />

      {/* Formulario de contacto */}
      <Form
        modal={true}
        className="absolute top-3 right-39 z-20 w-[320px] max-w-full rounded-2xl shadow-2xl border border-[#ee122c] p-0 max-lg:static max-lg:mx-auto max-lg:mt-4"
        textLabel=""
        classNameButton="bg-[#ee122c] text-white w-full rounded-lg mt-2 text-base font-bold py-2"
      >
        <div className="w-full flex flex-col text-center text-[#EF3829] justify-center items-center">
          <span className="text-[16px] font-semibold text-[#404848] leading-tight text-center mb-1 mt-1">
            DESCUBRE NUESTROS SERVICIOS MÓVILES
          </span>
          <span className="text-[18px] text-[#F80000] leading-tight">
            ¡Consulta por la promoción en{" "}
            <span className="font-black">PORTABILIDAD</span> que tenemos para ti!
          </span>
        </div>
      </Form>

      {/* Separadores y el icono */}
      <div className="flex items-center justify-center max-lg:p-14 gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <img className="w-[50px] mx-4" src={icon.src} alt="icon" />
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>

      {/* Sección de selección de planes */}
      <SelecteplanMobil />
    </section>
  );
}
