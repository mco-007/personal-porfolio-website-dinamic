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
    <section id="skills" className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-orange-900/30 overflow-hidden font-display">
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
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-300 to-pink-400 tracking-tighter transform hover:scale-105 transition-transform duration-500 animate-hologram font-display">
              {content[language].title}
            </h2>
            {/* Neon Glow */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-orange-400/30 transform blur-sm animate-pulse font-display">
              {content[language].title}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-gradient-shift blur-sm"></div>
          </div>
          <p className="text-3xl md:text-4xl font-light text-orange-300 tracking-widest animate-fade-in delay-200 neon-cyan font-mono">
            {content[language].subtitle}
          </p>
        </div>
        
        {/* Skills Grid with Original Hover Effects */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {content[language].skills.map((skill, index) => (
              <Card key={index} className={`glass border-2 border-orange-500/30 backdrop-blur-xl hover:border-orange-500/80 transition-all duration-300 group cursor-pointer transform hover:translate-y-2 hover:shadow-2xl hover:shadow-orange-500/25 ${
                index % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-8'
              }`}>
                <CardContent className="p-10 text-center relative z-10 overflow-hidden">
                  {/* Skill Icon with Refined Animation */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-4xl transform group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                      {skill.icon}
                    </div>
                  </div>
                  
                  {/* Skill Name - Always Visible */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300 font-display">
                    {skill.name}
                  </h3>
                  
                  {/* Description - Always Visible */}
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed group-hover:text-white transition-colors duration-300 font-sans">
                    {skill.description}
                  </p>
                  
                  {/* Skill Level with Enhanced Progress Bar */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 font-mono">Yetkinlik</span>
                      <span className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-display`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar - Enhanced Design */}
                    <div className="relative w-full h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-data-stream"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="text-center mt-24">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-16 py-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-2xl transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 overflow-hidden font-display"
            >
              <span className="relative z-10">{content[language].cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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
