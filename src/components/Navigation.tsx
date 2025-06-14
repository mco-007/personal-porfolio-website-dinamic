
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const content = {
    tr: {
      home: 'Anasayfa',
      about: 'Hakkımda',
      experience: 'Deneyimler',
      projects: 'Projeler',
      skills: 'Yetenekler',
      contact: 'İletişim',
      cta: 'Bana Ulaşın'
    },
    en: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      cta: 'Contact Me'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            MÜCAHİT ÖZCAN
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(content[language]).slice(0, 6).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-400 group ${
                  activeSection === key ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {value}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full ${
                  activeSection === key ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-white/10 rounded-full p-1 backdrop-blur-sm">
              <button
                onClick={() => setLanguage('tr')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                  language === 'tr' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                🇹🇷 TR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>
            
            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {content[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
