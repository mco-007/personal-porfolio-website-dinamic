
import { Card, CardContent } from '@/components/ui/card';
import { User, Target, Lightbulb } from 'lucide-react';

interface AboutSectionProps {
  language: 'tr' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    tr: {
      title: 'HAKKIMDA',
      subtitle: 'Dijital Dünyada İz Bırakan Çözümler',
      intro: 'Teknoloji tutkunu bir mühendis olarak, işletmelerin dijital dönüşüm süreçlerinde rehberlik ediyorum.',
      description: 'Modern web teknolojileri, veri analizi ve süreç optimizasyonu konularında uzmanlaşmış bir profesyonelim. İşletmelerin teknoloji ile büyümesine yardımcı olurken, verimlilik ve kullanıcı deneyimi odaklı çözümler geliştiriyorum.',
      values: [
        {
          icon: User,
          title: 'İnsan Odaklı',
          description: 'Her projede kullanıcı deneyimini ön planda tutarak, insanların hayatını kolaylaştıran çözümler üretiyorum.'
        },
        {
          icon: Target,
          title: 'Hedef Odaklı',
          description: 'Belirlenen hedeflere ulaşmak için stratejik yaklaşımlar benimser, ölçülebilir sonuçlar elde ederim.'
        },
        {
          icon: Lightbulb,
          title: 'İnovatif',
          description: 'Sürekli öğrenme ve gelişim ile yenilikçi teknolojileri projelerime entegre ederim.'
        }
      ]
    },
    en: {
      title: 'ABOUT ME',
      subtitle: 'Creating Impactful Solutions in the Digital World',
      intro: 'As a technology enthusiast engineer, I guide businesses through their digital transformation processes.',
      description: 'I am a professional specialized in modern web technologies, data analysis, and process optimization. While helping businesses grow with technology, I develop efficiency and user experience-focused solutions.',
      values: [
        {
          icon: User,
          title: 'Human-Centered',
          description: 'In every project, I prioritize user experience and create solutions that make people\'s lives easier.'
        },
        {
          icon: Target,
          title: 'Goal-Oriented',
          description: 'I adopt strategic approaches to achieve set goals and obtain measurable results.'
        },
        {
          icon: Lightbulb,
          title: 'Innovative',
          description: 'With continuous learning and development, I integrate innovative technologies into my projects.'
        }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-tighter mb-6">
            {content[language].title}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            {content[language].subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-xl text-cyan-300 mb-6 leading-relaxed">
              {content[language].intro}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {content[language].description}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {content[language].values.map((value, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <value.icon className="w-16 h-16 text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
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
