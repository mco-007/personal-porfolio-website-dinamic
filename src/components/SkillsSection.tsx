
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SkillsSectionProps {
  language: 'tr' | 'en';
}

const SkillsSection = ({ language }: SkillsSectionProps) => {
  const content = {
    tr: {
      title: 'Yetenekler',
      cta: 'Proje Fikriniz mi Var?',
      skills: [
        {
          name: 'Stratejik Pazarlama',
          description: 'Dijital strateji, marka konumlandırma',
          level: 90,
          icon: '🎯'
        },
        {
          name: 'Dijital Analitik ve CRM',
          description: 'Veri analizi, müşteri ilişkileri yönetimi',
          level: 95,
          icon: '📊'
        },
        {
          name: 'Proje Yönetimi',
          description: 'Süreç yönetimi, proje planlama',
          level: 88,
          icon: '📋'
        },
        {
          name: 'Grafik ve Web Tasarımı',
          description: 'UI/UX, görsel iletişim',
          level: 85,
          icon: '🎨'
        },
        {
          name: 'SEO ve Performans Reklamcılığı',
          description: 'Google Ads, içerik stratejisi',
          level: 92,
          icon: '🔍'
        },
        {
          name: 'Ekip Yönetimi ve Eğitim',
          description: 'Liderlik, mentorluk',
          level: 90,
          icon: '👥'
        }
      ]
    },
    en: {
      title: 'Skills',
      cta: 'Have a Project Idea?',
      skills: [
        {
          name: 'Strategic Marketing',
          description: 'Digital strategy, brand positioning',
          level: 90,
          icon: '🎯'
        },
        {
          name: 'Digital Analytics & CRM',
          description: 'Data analysis, customer relationship management',
          level: 95,
          icon: '📊'
        },
        {
          name: 'Project Management',
          description: 'Process management, project planning',
          level: 88,
          icon: '📋'
        },
        {
          name: 'Graphic & Web Design',
          description: 'UI/UX, visual communication',
          level: 85,
          icon: '🎨'
        },
        {
          name: 'SEO & Performance Advertising',
          description: 'Google Ads, content strategy',
          level: 92,
          icon: '🔍'
        },
        {
          name: 'Team Management & Training',
          description: 'Leadership, mentoring',
          level: 90,
          icon: '👥'
        }
      ]
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content[language].skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Yetkinlik</span>
                      <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              {content[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
