
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
          description: 'Veri odaklı karar alma ve uzun vadeli planlama'
        },
        leadership: {
          title: 'Ekip Liderliği',
          description: 'Çevik metodolojiler ve ekip motivasyonu'
        },
        technical: {
          title: 'Teknik Bilgi',
          description: 'Dijital platformlar ve yazılım çözümlerinde uzmanlık'
        },
        customer: {
          title: 'Müşteri Odaklılık',
          description: 'Kullanıcı deneyimi ve memnuniyet önceliği'
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
          description: 'Data-driven decision making and long-term planning'
        },
        leadership: {
          title: 'Team Leadership',
          description: 'Agile methodologies and team motivation'
        },
        technical: {
          title: 'Technical Knowledge',
          description: 'Expertise in digital platforms and software solutions'
        },
        customer: {
          title: 'Customer Focus',
          description: 'User experience and satisfaction priority'
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Dijital dönüşüm"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {content[language].description1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content[language].description2}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content[language].description3}
              </p>
              
              <Button 
                onClick={() => scrollToSection('experience')}
                className="bg-blue-600 hover:bg-blue-700 text-white mt-6"
              >
                {content[language].cta}
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(content[language].strengths).map(([key, strength]) => (
              <Card key={key} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{strength.title}</h3>
                  <p className="text-gray-600">{strength.description}</p>
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
