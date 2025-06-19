
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Zap, Globe } from 'lucide-react';

interface HeroSectionProps {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    tr: {
      greeting: 'Merhaba, Ben',
      name: 'MÜCAHİT ÖZCAN',
      title: 'Dijital Dönüşüm Uzmanı',
      subtitle: 'İşletmelerin teknoloji ile büyümesine yardımcı oluyorum',
      description: 'Modern web teknolojileri ve veri analizi ile işletmelerin dijital dönüşüm süreçlerini yönetiyor, verimliliklerini artırıyorum.',
      cta: 'PROJELERİMİ İNCELE',
      contact: 'İLETİŞİME GEÇ',
      stats: {
        projects: 'PROJE',
        experience: 'YIL DENEYİM',
        clients: 'MÜŞTERİ'
      }
    },
    en: {
      greeting: 'Hello, I\'m',
      name: 'MÜCAHİT ÖZCAN',
      title: 'Digital Transformation Expert',
      subtitle: 'Helping businesses grow with technology',
      description: 'Managing digital transformation processes of businesses with modern web technologies and data analysis, increasing their efficiency.',
      cta: 'VIEW MY PROJECTS',
      contact: 'GET IN TOUCH',
      stats: {
        projects: 'PROJECTS',
        experience: 'YEARS EXPERIENCE',
        clients: 'CLIENTS'
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900/30">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px] animate-pulse"></div>
      
      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
            {content[language].greeting}
          </p>
          
          {/* Name with Special Effects */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-tighter mb-6 animate-hologram">
            {content[language].name}
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide">
            {content[language].title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {content[language].description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Code className="mr-2" size={20} />
              {content[language].cta}
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold py-4 px-8 text-lg transform hover:scale-105 transition-all duration-300"
            >
              <Globe className="mr-2" size={20} />
              {content[language].contact}
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">{content[language].stats.projects}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">{content[language].stats.experience}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">30+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">{content[language].stats.clients}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60 w-8 h-8" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border-2 border-cyan-400/30 rotate-45 animate-spin-slow hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-transparent rotate-12 animate-bounce-slow hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
