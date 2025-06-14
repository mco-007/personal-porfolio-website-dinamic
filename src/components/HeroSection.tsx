
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: 'tr' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    tr: {
      title: 'Dijital Güçle Stratejik Dönüşüm',
      subtitle: '13+ yıllık deneyimle, işletmeleri dijital çağda yeniden konumlandıran bir yol arkadaşı.',
      primaryCta: 'Projelerimi İncele',
      secondaryCta: 'Benimle İletişime Geç',
      slogan: 'Dijital Dönüşüm Uzmanı'
    },
    en: {
      title: 'Strategic Transformation Through Digital Power',
      subtitle: 'A trusted partner with 13+ years of experience, helping businesses reposition themselves in the digital age.',
      primaryCta: 'View My Projects',
      secondaryCta: 'Get In Touch',
      slogan: 'Digital Transformation Expert'
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              {content[language].slogan}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {content[language].title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              {content[language].primaryCta}
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              {content[language].secondaryCta}
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
            alt="Mücahit Özcan"
            className="w-64 h-64 rounded-full mx-auto object-cover shadow-2xl border-8 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
