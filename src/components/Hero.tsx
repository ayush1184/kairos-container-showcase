import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import model1Image from "@/assets/models/model1/Kairos_Render_40x8x8_LivingSpace.46.jpg";
import model2Image from "@/assets/models/model2/Kairos_Render_40x8x8_OfficeandStorage.57.jpg";
import model3Image from "@/assets/models/model3/20x8x8Angle.77.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: model1Image,
      title: "RESIDENTIAL HOUSING SOLUTIONS",
      subtitle: "High Quality, Functional Spaces For Residential Use Including livable Homes and Cabins"
    },
    {
      image: model2Image,
      title: "STORAGE AND OFFICE SOLUTIONS",
      subtitle: "Transform containers into storage facilities or office and storage together."
    },
    {
      image: model3Image,
      title: "COMMERCIAL AND OFFICE SPACES",
      subtitle: "Professional Office Spaces, Retail Shops, Pop-up Stores, Ticket Booths, Control Rooms, Restrooms, Food Service and More"
    }
  ];

  const goToSlide = useCallback((index: number, direction: 'left' | 'right' = 'right') => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    // Resume auto-play after transition completes
    setTimeout(() => {
      setIsTransitioning(false);
      setTimeout(() => setIsAutoPlaying(true), 8000);
    }, 1200);
  }, [isTransitioning, currentSlide]);

  const goToNext = useCallback(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex, 'right');
  }, [currentSlide, slides.length, goToSlide]);

  const goToPrevious = useCallback(() => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, 'left');
  }, [currentSlide, slides.length, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning, goToNext]);


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-carousel">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Positioned in Middle */}
      <button
        onClick={goToPrevious}
        className="carousel-nav prev"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="carousel-nav next"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-scale">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
