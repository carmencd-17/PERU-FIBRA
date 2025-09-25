import Carousel from "./Carousel/Carousel";
import Form from './Form';

export default function Hero() {

    const images = [
        "/img/banner-perufibra1.webp",
        "/img/banner-perufibra2.webp",
    ];

    return (
        <section className="relative flex flex-col items-center gap-2 min-h-[1000px]">

        {/* Carousel para escritorios */}
        <Carousel
            images={images}
        />

        {/* Formulario de contacto */}
            <Form/>
        </section>
    );
}
