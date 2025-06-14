
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AboutSectionProps {
  language: 'tr' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    tr: {
      title: 'Hakkımda',
      description1: 'Dijital strateji, proje yönetimi ve yaratıcı çözümler alanında 13+ yıllık deneyime sahip bir uzmanım. Teknoloji ile insan odaklı yaklaşımları harmanlayarak, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir rehber olmayı amaçlıyorum.',
      description2: 'CRM sistemlerinden dijital pazarlama stratejilerine, mobil uygulamalardan web tasarımına kadar geniş bir yelpazede hizmet veriyorum. Her projede ölçülebilir sonuçlar elde etmeye ve müşteri memnuniyetini en üst düzeyde tutmaya odaklanırım.',
      description3: 'Sürekli öğrenme ve gelişim felsefesiyle, sektördeki en güncel trendleri takip ederek müşterilerime en iyi çözümleri sunmaya devam ediyorum.',
      cta: 'Deneyimlerimi Keşfet',
      strengths: {
        strategic: {
          title: 'Stratejik Düşünce',
          description: 'Veri odaklı karar alma ve uzun vadeli planlama',
          icon: '🎯'
        },
        leadership: {
          title: 'Ekip Liderliği',
          description: 'Çevik metodolojiler ve ekip motivasyonu',
          icon: '👥'
        },
        technical: {
          title: 'Teknik Bilgi',
          description: 'Dijital platformlar ve yazılım çözümlerinde uzmanlık',
          icon: '⚡'
        },
        customer: {
          title: 'Müşteri Odaklılık',
          description: 'Kullanıcı deneyimi ve memnuniyet önceliği',
          icon: '💎'
        }
      }
    },
    en: {
      title: 'About Me',
      description1: 'I am an expert with 13+ years of experience in digital strategy, project management, and creative solutions. I aim to be a trusted guide for businesses in their digital transformation processes by blending technology with human-centered approaches.',
      description2: 'I provide services across a wide range, from CRM systems to digital marketing strategies, from mobile applications to web design. In every project, I focus on achieving measurable results and maintaining the highest level of customer satisfaction.',
      description3: 'With a philosophy of continuous learning and development, I follow the latest trends in the industry and continue to provide the best solutions to my clients.',
      cta: 'Explore My Experience',
      strengths: {
        strategic: {
          title: 'Strategic Thinking',
          description: 'Data-driven decision making and long-term planning',
          icon: '🎯'
        },
        leadership: {
          title: 'Team Leadership',
          description: 'Agile methodologies and team motivation',
          icon: '👥'
        },
        technical: {
          title: 'Technical Knowledge',
          description: 'Expertise in digital platforms and software solutions',
          icon: '⚡'
        },
        customer: {
          title: 'Customer Focus',
          description: 'User experience and satisfaction priority',
          icon: '💎'
        }
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Dijital dönüşüm"
                className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Text content */}
            <div className="space-y-8">
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  {content[language].description1}
                </p>
                <p className="text-lg leading-relaxed">
                  {content[language].description2}
                </p>
                <p className="text-lg leading-relaxed">
                  {content[language].description3}
                </p>
              </div>
              
              <Button 
                onClick={() => scrollToSection('experience')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {content[language].cta}
              </Button>
            </div>
          </div>
          
          {/* Strengths grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(content[language].strengths).map(([key, strength]) => (
              <Card key={key} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-500 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
