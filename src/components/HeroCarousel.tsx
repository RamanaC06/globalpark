import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

interface Slide {
  id: number;
  title: string;
  image: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Software Development',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'Cutting-edge software solutions for modern businesses'
  },
  {
    id: 2,
    title: 'AI Training',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'Advanced artificial intelligence training and implementation'
  },
  {
    id: 3,
    title: 'Exporting Goods',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'Global trade and export solutions for your business'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Desktop/Tablet animations
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(contentRef.current,
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, delay: 0.5, ease: 'power3.out' }
      );

      if (currentSlide > 0) {
        gsap.fromTo(contentRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
        );
      }

      gsap.to('.explore-btn', {
        y: -10, duration: 2, ease: 'power2.inOut', yoyo: true, repeat: -1
      });
    });

    // Mobile animations
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(contentRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      );

      gsap.to('.explore-btn', {
        y: -5, duration: 2, ease: 'power2.inOut', yoyo: true, repeat: -1
      });
    });

    return () => mm.revert();
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div ref={contentRef} className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
         
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 lg:p-3 rounded-full transition-colors duration-300 items-center justify-center z-20"
      >
        <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 lg:p-3 rounded-full transition-colors duration-300 items-center justify-center z-20"
      >
        <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
