
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
      
      // Update active section based on scroll position
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          MÜCAHİT ÖZCAN
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {Object.entries(content[language]).slice(0, 6).map(([key, value]) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                activeSection === key ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('tr')}
              className={`text-sm px-2 py-1 rounded ${
                language === 'tr' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
              }`}
            >
              🇹🇷 TR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`text-sm px-2 py-1 rounded ${
                language === 'en' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
              }`}
            >
              🇬🇧 EN
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {content[language].cta}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
