"use client"
import useDeviceType from "../hooks/useDeviceType";
import Carousel from "./Carousel/Carousel";
import Form from './Form';
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Hero() {
    const isMobile = useDeviceType(); 

    // Imágenes para escritorio
    const desktopImages = [
        "/img/banner-perufibra1.webp",
        "/img/banner-perufibra2.webp",
    ];

    // Imágenes para móvil
    const mobileImages = [
        "/img/slider1-vmovil.webp", 
        "/img/slider2-vmovil.webp",
    ];

    // Seleccionamos las imágenes según el dispositivo
    const images = isMobile ? mobileImages : desktopImages;

    return (
        <section className="relative flex flex-col items-center min-h-[100px]">
        <Carousel images={images} />
        <Form />

        {/* Botón */}
        <a
            href="tel:987654321"
            aria-label="Llamar ahora"
            className="lg:hidden fixed bottom-6 left-6 z-50 flex items-center justify-center w-20 h-20 rounded-full bg-[#F4BA00] border-2 border-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-white/40">
            <BiSolidPhoneCall size={40} />
        </a>
        </section>
    );
}
