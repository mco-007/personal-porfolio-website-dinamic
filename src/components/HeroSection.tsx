import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  language: 'tr' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const content = {
    tr: {
      title: 'MÜCAHİT',
      subtitle: 'ÖZCAN',
      tagline: 'DİJİTAL GÜÇLE',
      description: 'Stratejik Dönüşüm',
      longDescription: '13+ yıllık deneyimle, işletmeleri dijital çağda yeniden konumlandıran bir yol arkadaşı.',
      primaryCta: 'PROJELER',
      secondaryCta: 'İLETİŞİM',
      slogan: 'DIGITAL TRANSFORMATION ARCHITECT'
    },
    en: {
      title: 'MÜCAHİT',
      subtitle: 'ÖZCAN',
      tagline: 'DIGITAL POWER',
      description: 'Strategic Transformation',
      longDescription: 'A companion who repositions businesses in the digital age with 13+ years of experience.',
      primaryCta: 'PROJECTS',
      secondaryCta: 'CONTACT',
      slogan: 'DIGITAL TRANSFORMATION ARCHITECT'
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
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
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Dynamic Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl animate-float`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateY(${scrollY * 0.1 * (i + 1)}px)`
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      {/* Geometric Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-transparent rotate-12 animate-bounce-slow"></div>
      <div className="absolute top-1/2 right-10 w-2 h-48 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Typography */}
            <div className="space-y-10">
              {/* Floating Badge */}
              <div className="inline-block animate-fade-in">
                <div className="glass rounded-full px-8 py-3 text-cyan-300 text-sm font-bold tracking-wider border border-cyan-500/30 animate-pulse-glow">
                  {content[language].slogan}
                </div>
              </div>

              {/* Main Title with Advanced 3D Effect */}
              <div className="space-y-6 animate-fade-in delay-200">
                <h1 className="text-8xl md:text-9xl font-black tracking-tighter relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    {content[language].title}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300 drop-shadow-2xl transform -skew-x-12 hover:skew-x-0 transition-transform duration-700">
                    {content[language].subtitle}
                  </span>
                  {/* 3D Shadow Effect */}
                  <div className="absolute inset-0 text-8xl md:text-9xl font-black tracking-tighter opacity-10 transform translate-x-2 translate-y-2 -z-10">
                    <span className="block">{content[language].title}</span>
                    <span className="block transform -skew-x-12">{content[language].subtitle}</span>
                  </div>
                </h1>
              </div>

              {/* Tagline with Dynamic Background */}
              <div className="relative animate-fade-in delay-300">
                <h2 className="text-3xl md:text-5xl font-bold text-cyan-300 tracking-widest relative z-10 animate-gradient-shift">
                  {content[language].tagline}
                </h2>
                <div className="absolute -bottom-3 left-0 w-32 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 animate-slide-in"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
              </div>

              {/* Description with Parallax Effect */}
              <div className="space-y-6 animate-fade-in delay-500">
                <p className="text-2xl md:text-3xl text-gray-200 font-light transform hover:translate-x-2 transition-transform duration-300">
                  {content[language].description}
                </p>
                <p className="text-xl text-gray-400 max-w-lg leading-relaxed transform hover:translate-x-4 transition-transform duration-500">
                  {content[language].longDescription}
                </p>
              </div>

              {/* Advanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-8 animate-fade-in delay-700">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="group relative px-10 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xl rounded-none skew-x-[-15deg] transform hover:scale-110 hover:rotate-1 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 overflow-hidden"
                >
                  <span className="skew-x-[15deg] block relative z-10">{content[language].primaryCta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="group px-10 py-6 border-3 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold text-xl rounded-none transform hover:scale-110 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden"
                >
                  <span className="relative z-10">{content[language].secondaryCta}</span>
                  <div className="ml-3 transform group-hover:translate-x-3 group-hover:rotate-12 transition-transform duration-500 inline-block">→</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                </Button>
              </div>
            </div>

            {/* Right Side - Professional Photo with Advanced Effects */}
            <div className="relative flex justify-center items-center animate-fade-in delay-1000">
              <div className="relative group">
                {/* Multiple Rotating Rings */}
                <div className="absolute inset-0 w-96 h-96 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 w-88 h-88 border border-purple-500/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}></div>
                
                {/* Dynamic Glowing Background */}
                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
                
                {/* Main Photo Container with Updated Image */}
                <div className="relative w-72 h-72 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-1 animate-gradient-shift">
                    <img 
                      src="/lovable-uploads/0d6850e1-a3b2-4a5c-b077-d6c7c098e57b.png" 
                      alt="Mücahit Özcan - Dijital Dönüşüm Uzmanı"
                      className="w-full h-full object-cover rounded-full transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-2xl"
                    />
                  </div>
                  
                  {/* Floating Achievement Badges */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl animate-bounce-slow transform hover:scale-110 transition-transform duration-300">
                    13+ YIL
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl animate-bounce-slow delay-300 transform hover:scale-110 transition-transform duration-300">
                    UZMAN
                  </div>
                  <div className="absolute top-1/2 -right-12 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-float delay-500 transform hover:scale-110 transition-transform duration-300">
                    CRM
                  </div>
                </div>

                {/* Animated Particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping`}
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + (i % 2) * 80}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  ></div>
                ))}

                {/* Geometric Accents */}
                <div className="absolute top-10 -right-16 w-6 h-24 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse delay-200"></div>
                <div className="absolute -bottom-16 -left-12 w-24 h-6 bg-gradient-to-r from-purple-500 to-transparent animate-pulse delay-700"></div>
                <div className="absolute top-1/3 -left-20 w-8 h-8 border-2 border-pink-500 rotate-45 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce group cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="w-2 h-20 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent mx-auto mb-3 rounded-full group-hover:h-24 transition-all duration-300"></div>
          <p className="text-cyan-300 text-sm font-bold tracking-wider group-hover:text-white transition-colors duration-300">SCROLL</p>
          <div className="mt-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400 transform rotate-45 animate-pulse"></div>
        </div>
      </div>

      {/* Transition Effect to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
