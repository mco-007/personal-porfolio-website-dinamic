
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  language: 'tr' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    tr: {
      title: 'Dijital Güçle',
      subtitle: 'Stratejik Dönüşüm',
      description: '13+ yıllık deneyimle, işletmeleri dijital çağda yeniden konumlandıran bir yol arkadaşı.',
      primaryCta: 'Projelerimi İncele',
      secondaryCta: 'Benimle İletişime Geç',
      slogan: 'Dijital Dönüşüm Uzmanı'
    },
    en: {
      title: 'Digital Power',
      subtitle: 'Strategic Transformation',
      description: 'A trusted partner with 13+ years of experience, helping businesses reposition themselves in the digital age.',
      primaryCta: 'View My Projects',
      secondaryCta: 'Get In Touch',
      slogan: 'Digital Transformation Expert'
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Slogan badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm">
              ✨ {content[language].slogan}
            </span>
          </div>
          
          {/* Main title with gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300 mb-4 leading-tight animate-fade-in delay-200">
            {content[language].title}
          </h1>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 mb-8 animate-fade-in delay-300">
            {content[language].subtitle}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in delay-500">
            {content[language].description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {content[language].primaryCta}
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              {content[language].secondaryCta}
            </Button>
          </div>
        </div>
        
        {/* Profile image with modern styling */}
        <div className="mt-20 animate-fade-in delay-1000">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
              alt="Mücahit Özcan"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
