
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  language: 'tr' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    tr: {
      title: 'MÜCAHİT',
      subtitle: 'ÖZCAN',
      tagline: 'DİJİTAL GÜÇ',
      description: 'Stratejik Dönüşüm',
      longDescription: '13+ yıllık deneyimle işletmelerin geleceğini şekillendiren dijital mimarı',
      primaryCta: 'PROJELER',
      secondaryCta: 'İLETİŞİM',
      slogan: 'DIGITAL TRANSFORMATION ARCHITECT'
    },
    en: {
      title: 'MÜCAHİT',
      subtitle: 'ÖZCAN',
      tagline: 'DIGITAL POWER',
      description: 'Strategic Transformation',
      longDescription: 'Digital architect shaping the future of businesses with 13+ years of experience',
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
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-cyan-500/5 via-transparent to-transparent"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-transparent rotate-12 animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-10 w-2 h-40 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Typography */}
            <div className="space-y-8">
              {/* Floating Badge */}
              <div className="inline-block">
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 text-cyan-300 text-sm font-medium animate-fade-in">
                  {content[language].slogan}
                </div>
              </div>

              {/* Main Title with 3D Effect */}
              <div className="space-y-4">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter animate-fade-in delay-200">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300 drop-shadow-2xl">
                    {content[language].title}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-300 drop-shadow-2xl transform -skew-x-12">
                    {content[language].subtitle}
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-bold text-cyan-300 tracking-widest animate-fade-in delay-300">
                  {content[language].tagline}
                </h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 animate-slide-in"></div>
              </div>

              {/* Description */}
              <div className="space-y-4 animate-fade-in delay-500">
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  {content[language].description}
                </p>
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                  {content[language].longDescription}
                </p>
              </div>

              {/* CTA Buttons with Unique Styling */}
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in delay-700">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-none skew-x-[-12deg] transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
                >
                  <span className="skew-x-[12deg] block">{content[language].primaryCta}</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="group px-8 py-4 border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold text-lg rounded-none transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  {content[language].secondaryCta}
                  <div className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</div>
                </Button>
              </div>
            </div>

            {/* Right Side - Interactive Visual Element */}
            <div className="relative flex justify-center items-center animate-fade-in delay-1000">
              <div className="relative">
                {/* Main Profile Container */}
                <div className="relative group">
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 w-80 h-80 border-2 border-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-spin-slow opacity-30"></div>
                  
                  {/* Glowing Background */}
                  <div className="absolute inset-0 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                  
                  {/* Profile Image */}
                  <div className="relative w-64 h-64 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
                      alt="Mücahit Özcan"
                      className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Floating Data Points */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow">
                      13+ YIL
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-slow delay-300">
                      UZMAN
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 -right-10 w-4 h-16 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-16 h-4 bg-gradient-to-r from-purple-500 to-transparent animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-cyan-500 to-transparent mx-auto mb-2"></div>
          <p className="text-cyan-300 text-sm font-medium tracking-wider">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
