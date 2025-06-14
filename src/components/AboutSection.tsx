
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AboutSectionProps {
  language: 'tr' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    tr: {
      title: 'HAKKIMDA',
      subtitle: 'DİJİTAL MİMAR',
      description1: 'Dijital strateji, proje yönetimi ve yaratıcı çözümler alanında 13+ yıllık deneyime sahip bir uzmanım. Teknoloji ile insan odaklı yaklaşımları harmanlayarak, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir rehber olmayı amaçlıyorum.',
      description2: 'CRM sistemlerinden dijital pazarlama stratejilerine, mobil uygulamalardan web tasarımına kadar geniş bir yelpazede hizmet veriyorum. Her projede ölçülebilir sonuçlar elde etmeye ve müşteri memnuniyetini en üst düzeyde tutmaya odaklanırım.',
      description3: 'Sürekli öğrenme ve gelişim felsefesiyle, sektördeki en güncel trendleri takip ederek müşterilerime en iyi çözümleri sunmaya devam ediyorum.',
      cta: 'DENEYİMLER',
      stats: [
        { number: '13+', label: 'Yıl Deneyim' },
        { number: '50+', label: 'Proje' },
        { number: '95%', label: 'Müşteri Memnuniyeti' },
        { number: '24/7', label: 'Destek' }
      ],
      strengths: {
        strategic: {
          title: 'Stratejik Vizyon',
          description: 'Veri odaklı karar alma ve uzun vadeli planlama ile işletmelerin geleceğini şekillendirme',
          icon: '🎯'
        },
        leadership: {
          title: 'Liderlik',
          description: 'Çevik metodolojiler ve ekip motivasyonu ile projleri başarıya ulaştırma',
          icon: '⚡'
        },
        technical: {
          title: 'Teknik Uzmanlık',
          description: 'Dijital platformlar ve modern teknolojilerde derin bilgi ve deneyim',
          icon: '🚀'
        },
        customer: {
          title: 'Müşteri Odaklılık',
          description: 'Kullanıcı deneyimi ve memnuniyet odaklı çözümler geliştirme',
          icon: '💎'
        }
      }
    },
    en: {
      title: 'ABOUT ME',
      subtitle: 'DIGITAL ARCHITECT',
      description1: 'I am an expert with 13+ years of experience in digital strategy, project management, and creative solutions. I aim to be a trusted guide for businesses in their digital transformation processes by blending technology with human-centered approaches.',
      description2: 'I provide services across a wide range, from CRM systems to digital marketing strategies, from mobile applications to web design. In every project, I focus on achieving measurable results and maintaining the highest level of customer satisfaction.',
      description3: 'With a philosophy of continuous learning and development, I follow the latest trends in the industry and continue to provide the best solutions to my clients.',
      cta: 'EXPERIENCE',
      stats: [
        { number: '13+', label: 'Years Experience' },
        { number: '50+', label: 'Projects' },
        { number: '95%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support' }
      ],
      strengths: {
        strategic: {
          title: 'Strategic Vision',
          description: 'Shaping the future of businesses with data-driven decision making and long-term planning',
          icon: '🎯'
        },
        leadership: {
          title: 'Leadership',
          description: 'Leading projects to success with agile methodologies and team motivation',
          icon: '⚡'
        },
        technical: {
          title: 'Technical Expertise',
          description: 'Deep knowledge and experience in digital platforms and modern technologies',
          icon: '🚀'
        },
        customer: {
          title: 'Customer Focus',
          description: 'Developing user experience and satisfaction-oriented solutions',
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
    <section id="about" className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-20 right-20 w-32 h-32 border border-purple-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-10 w-2 h-32 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-tighter">
              {content[language].title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></div>
          </div>
          <p className="text-2xl md:text-3xl font-light text-cyan-300 tracking-widest">
            {content[language].subtitle}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {content[language].stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed border-l-2 border-cyan-500 pl-6">
                  {content[language].description1}
                </p>
                <p className="text-lg leading-relaxed border-l-2 border-purple-500 pl-6">
                  {content[language].description2}
                </p>
                <p className="text-lg leading-relaxed border-l-2 border-pink-500 pl-6">
                  {content[language].description3}
                </p>
              </div>
              
              <Button 
                onClick={() => scrollToSection('experience')}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-lg skew-x-[-12deg] transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
              >
                <span className="skew-x-[12deg] block">{content[language].cta}</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
            
            {/* Image with Modern Frame */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                  alt="Digital transformation"
                  className="w-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Strengths Grid - Asymmetric Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(content[language].strengths).map(([key, strength], index) => (
              <Card key={key} className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer ${
                index % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-8'
              }`}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    {strength.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
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
