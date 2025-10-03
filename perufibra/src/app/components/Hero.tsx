"use client"
import useDeviceType from "../hooks/useDeviceType";
import Carousel from "./Carousel/Carousel";
import Form from './Form';

export default function Hero() {
    const isMobile = useDeviceType(); 

    // Imágenes para escritorio
    const desktopImages = [
        "/img/banner-perufibra1@0.5x.webp",
        "/img/banner-perufibra2@0.5x.webp",
    ];

    // Imágenes para móvil
    const mobileImages = [
        "/img/slider1-vmovil.webp", 
        "/img/slider2-vmovil.webp",
    ];

    // Seleccionamos las imágenes según el dispositivo
    const images = isMobile ? mobileImages : desktopImages;

    return (
        <section className="relative flex flex-col items-center gap-2 min-h-[100px]">
        <Carousel images={images} />
        <Form />
        </section>
    );
}
