
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  language: 'tr' | 'en';
}

const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  const content = {
    tr: {
      title: 'DENEYİM',
      subtitle: 'Profesyonel Yolculuk',
      experiences: [
        {
          company: 'Teknoloji Şirketi A',
          position: 'Kıdemli Yazılım Geliştirici',
          period: '2022 - Günümüz',
          location: 'İstanbul, Türkiye',
          description: 'Modern web teknolojileri kullanarak kurumsal uygulamalar geliştiriyorum. React, Node.js ve cloud teknolojileri ile scalable çözümler üretiyorum.',
          technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL']
        },
        {
          company: 'Dijital Ajans B',
          position: 'Full Stack Developer',
          period: '2020 - 2022',
          location: 'Ankara, Türkiye',
          description: 'E-ticaret platformları ve kurumsal web siteleri geliştirdim. Müşteri odaklı çözümler üreterek kullanıcı deneyimini optimize ettim.',
          technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Redis']
        },
        {
          company: 'Startup C',
          position: 'Frontend Developer',
          period: '2019 - 2020',
          location: 'İzmir, Türkiye',
          description: 'Mobil-first yaklaşımla responsive web uygulamaları geliştirdim. Agile metodolojiler ile hızlı prototipleme ve test süreçlerini yönettim.',
          technologies: ['Angular', 'Ionic', 'Firebase', 'SCSS', 'Jest']
        }
      ]
    },
    en: {
      title: 'EXPERIENCE',
      subtitle: 'Professional Journey',
      experiences: [
        {
          company: 'Technology Company A',
          position: 'Senior Software Developer',
          period: '2022 - Present',
          location: 'Istanbul, Turkey',
          description: 'Developing enterprise applications using modern web technologies. Creating scalable solutions with React, Node.js and cloud technologies.',
          technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL']
        },
        {
          company: 'Digital Agency B',
          position: 'Full Stack Developer',
          period: '2020 - 2022',
          location: 'Ankara, Turkey',
          description: 'Developed e-commerce platforms and corporate websites. Optimized user experience by creating customer-focused solutions.',
          technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Redis']
        },
        {
          company: 'Startup C',
          position: 'Frontend Developer',
          period: '2019 - 2020',
          location: 'Izmir, Turkey',
          description: 'Developed responsive web applications with mobile-first approach. Managed rapid prototyping and testing processes with Agile methodologies.',
          technologies: ['Angular', 'Ionic', 'Firebase', 'SCSS', 'Jest']
        }
      ]
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-tighter mb-6">
            {content[language].title}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300">
            {content[language].subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-8">
            {content[language].experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-purple-400 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-gray-300">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
