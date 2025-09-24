'use client';
import { useState, useEffect, useCallback, FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton } from './ArrowButtons'; // Importar los botones
import { DotButton } from './DotButton'; // Importar el botón de puntos
import { CarouselProps, PrevNextButtonPropType, DotButtonPropType } from "../interfaces/Carousel.props";
import imageByIndex from '../utils/ImageByIndex'; // Función para manejar imágenes por índice

const Carousel: FC<CarouselProps> = ({    
  slides,
  options,
  haveButtons,
  haveDots,
  images,
  className,
  interval,
  classNameSlide,
  childrens,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [intervalTime] = useState(interval);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    if (emblaApi && intervalTime) {
      setInterval(() => {
        emblaApi.scrollNext();
      }, intervalTime);
    }
  }, [emblaApi, intervalTime]);

  return (
    <div className={`relative ${className}`}>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className={classNameSlide} key={index}>
                {childrens && childrens[index]}
                {images && (
                  <img
                    className="embla__slide__img"
                    src={imageByIndex(index, images)}
                    alt="Carousel image"/>
                )}
              </div>
            ))}
          </div>
        </div>

        {haveButtons && (
          <>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </>
        )}
      </div>
      {haveDots && (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;

