'use client';
import { useEffect, useState } from 'react';
import { SliderWrapper, Slide, SlideTitle, SlideSubtitle } from './slider.styles';

const slides = [
  {
    title: 'Explora los productos financieros del futuro',
    subtitle: 'Digitales, flexibles y pensados para ti.'
  },
  {
    title: 'Seguridad y rendimiento en cada inversión',
    subtitle: 'Confiabilidad respaldada por tecnología'
  },
  {
    title: 'Tu próximo paso hacia el bienestar financiero',
    subtitle: 'Simplificamos tus decisiones de ahorro e inversión'
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle } = slides[currentSlide];

  return (
    <SliderWrapper>
      <Slide>
        <SlideTitle>{title}</SlideTitle>
        <SlideSubtitle>{subtitle}</SlideSubtitle>
      </Slide>
    </SliderWrapper>
  );
};

export default Slider;