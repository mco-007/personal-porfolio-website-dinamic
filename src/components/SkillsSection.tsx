import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface SkillsSectionProps {
  language: 'tr' | 'en';
}

const SkillsSection = ({ language }: SkillsSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    tr: {
      title: 'YETENEKLER',
      subtitle: 'TEKNİK HÂKİMİYET',
      cta: 'PROJE FİKRİNİZ Mİ VAR?',
      skills: [
        {
          name: 'Stratejik Pazarlama',
          description: 'Dijital strateji, marka konumlandırma',
          level: 90,
          icon: '🎯',
          color: 'from-red-500 to-orange-500'
        },
        {
          name: 'Dijital Analitik ve CRM',
          description: 'Veri analizi, müşteri ilişkileri yönetimi',
          level: 95,
          icon: '📊',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Proje Yönetimi',
          description: 'Süreç yönetimi, proje planlama',
          level: 88,
          icon: '📋',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Grafik ve Web Tasarımı',
          description: 'UI/UX, görsel iletişim',
          level: 85,
          icon: '🎨',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'SEO ve Performans Reklamcılığı',
          description: 'Google Ads, içerik stratejisi',
          level: 92,
          icon: '🔍',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          name: 'Ekip Yönetimi ve Eğitim',
          description: 'Liderlik, mentorluk',
          level: 90,
          icon: '👥',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    },
    en: {
      title: 'SKILLS',
      subtitle: 'TECHNICAL MASTERY',
      cta: 'HAVE A PROJECT IDEA?',
      skills: [
        {
          name: 'Strategic Marketing',
          description: 'Digital strategy, brand positioning',
          level: 90,
          icon: '🎯',
          color: 'from-red-500 to-orange-500'
        },
        {
          name: 'Digital Analytics & CRM',
          description: 'Data analysis, customer relationship management',
          level: 95,
          icon: '📊',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Project Management',
          description: 'Process management, project planning',
          level: 88,
          icon: '📋',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Graphic & Web Design',
          description: 'UI/UX, visual communication',
          level: 85,
          icon: '🎨',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'SEO & Performance Advertising',
          description: 'Google Ads, content strategy',
          level: 92,
          icon: '🔍',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          name: 'Team Management & Training',
          description: 'Leadership, mentoring',
          level: 90,
          icon: '👥',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    }
  };

  useEffect(() => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-orange-900/30 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Neural Network Effect */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 rounded-full border border-orange-400/20 animate-neural-pulse"
            style={{
              left: `${5 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 20}%`,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      {/* Geometric Elements */}
      <div className="absolute top-20 right-20 w-48 h-48 border-2 border-orange-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-red-500/20 to-transparent rotate-12 animate-bounce-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Neon Effect */}
        <div className="text-center mb-32 relative">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-300 to-pink-400 tracking-tighter transform hover:scale-105 transition-transform duration-500 animate-hologram">
              {content[language].title}
            </h2>
            {/* Neon Glow */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-orange-400/30 transform blur-sm animate-pulse">
              {content[language].title}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-gradient-shift blur-sm"></div>
          </div>
          <p className="text-3xl md:text-4xl font-light text-orange-300 tracking-widest animate-fade-in delay-200 neon-cyan">
            {content[language].subtitle}
          </p>
        </div>
        
        {/* Skills Grid with Light Hover Effects */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {content[language].skills.map((skill, index) => (
              <Card key={index} className={`glass border-2 border-orange-500/30 backdrop-blur-xl hover:border-orange-500/60 transition-all duration-700 group cursor-pointer transform hover:scale-110 hover:-translate-y-8 hover:rotate-3 modern-card perspective-1000 ${
                index % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-8'
              }`}>
                <CardContent className="p-10 text-center relative z-10">
                  {/* Skill Icon with Advanced Animation */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-4xl transform group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 shadow-2xl group-hover:shadow-orange-500/50 animate-bounce-slow`}>
                      {skill.icon}
                    </div>
                    
                    {/* Orbiting Elements */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-3 h-3 bg-gradient-to-r ${skill.color} rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: `${30 + i * 5}px`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-300 mb-4 group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-500 transform group-hover:scale-110">
                    {skill.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    {skill.description}
                  </p>
                  
                  {/* Skill Level with Advanced Progress Bar */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors duration-500">Yetkinlik</span>
                      <span className={`text-lg font-black bg-gradient-to-r ${skill.color} bg-clip-text text-transparent animate-pulse-glow`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Custom Progress Bar */}
                    <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative animate-pulse-glow`}
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Animated Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-data-stream"></div>
                      </div>
                      
                      {/* Floating Particles */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full animate-particle-float opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          style={{
                            left: `${skill.level - 10 + i * 5}%`,
                            top: '50%',
                            animationDelay: `${i * 0.2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Background Effects - Ultra Light */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color.replace('500', '500/1')} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg`}></div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${skill.color.replace('500', '500/1')} rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-700`}></div>
                  
                  {/* Corner Accents */}
                  <div className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500`}></div>
                  <div className={`absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500 delay-200`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="text-center mt-24">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-16 py-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-black text-2xl skew-x-[-15deg] transform hover:scale-125 hover:rotate-2 transition-all duration-700 shadow-2xl hover:shadow-orange-500/50 overflow-hidden animate-pulse-glow"
            >
              <span className="skew-x-[15deg] block relative z-10">{content[language].cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-500 rounded blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Lightning Effects */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-8 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-matrix-rain"
                  style={{
                    left: `${15 + i * 12}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </Button>
          </div>
        </div>
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default SkillsSection;
