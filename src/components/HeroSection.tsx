
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap, Target, Globe } from 'lucide-react';

interface HeroSectionProps {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
}

const HeroSection = ({ language, setLanguage }: HeroSectionProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    tr: {
      name: 'Mücahit Özcan',
      title: 'DİJİTAL GÜÇLE',
      subtitle: 'STRATEJİK DÖNÜŞÜM',
      description: '13+ yıllık deneyimle, işletmeleri dijital çağda yeniden konumlandıran bir yol arkadaşı.',
      cta: 'BAŞLAYALIM',
      stats: [
        { number: '13+', label: 'Yıl Deneyim', icon: Target },
        { number: '50+', label: 'Proje', icon: Zap },
        { number: '100%', label: 'Sürekli İyileştirme', icon: Globe }
      ]
    },
    en: {
      name: 'Mücahit Özcan',
      title: 'DIGITAL POWER',
      subtitle: 'STRATEGIC TRANSFORMATION',
      description: 'With 13+ years of experience, a companion who repositions businesses in the digital age.',
      cta: "LET'S START",
      stats: [
        { number: '13+', label: 'Years Experience', icon: Target },
        { number: '50+', label: 'Projects', icon: Zap },
        { number: '100%', label: 'Continuous Improvement', icon: Globe }
      ]
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-cyan-900/30 overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Dynamic Starry Sky */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-10 left-20 w-32 h-32 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full animate-bounce-slow"></div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'rgba(255,255,255,0.05)' }}></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
            {/* Name */}
            <div className="relative mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-wider">
                {content[language].name}
              </h3>
            </div>

            {/* Main Title with Neon Effect */}
            <div className="relative mb-2">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-tighter leading-none animate-hologram">
                {content[language].title}
              </h1>
              <div className="absolute inset-0 text-6xl md:text-8xl font-black text-cyan-400/30 transform blur-sm animate-pulse">
                {content[language].title}
              </div>
            </div>

            {/* Subtitle */}
            <div className="relative mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-tighter leading-none">
                {content[language].subtitle}
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-300 mb-12 animate-fade-in delay-200">
              {content[language].description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {content[language].stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3 animate-slide-in" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400 uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Button 
                onClick={scrollToAbout}
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {content[language].cta}
              </Button>
              <Button 
                onClick={scrollToAbout}
                variant="outline"
                className="group relative px-6 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* 3D Floating Elements */}
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl animate-float"></div>
              
              {/* Central Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop"
                  alt="Mücahit Özcan"
                  className="rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                />
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce-slow cursor-pointer" onClick={scrollToAbout}>
        <ArrowDown className="w-6 h-6" />
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
