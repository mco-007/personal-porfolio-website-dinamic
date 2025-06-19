
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe } from 'lucide-react';

interface ProjectsSectionProps {
  language: 'tr' | 'en';
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const content = {
    tr: {
      title: 'PROJELER',
      subtitle: 'Geliştirdiğim Çözümler',
      viewProject: 'Projeyi Görüntüle',
      viewCode: 'Kodu İncele',
      projects: [
        {
          title: 'E-Ticaret Platformu',
          description: 'Modern React ve Node.js teknolojileri kullanılarak geliştirilmiş tam özellikli e-ticaret platformu. Ödeme entegrasyonu, stok yönetimi ve analitik dashboard içerir.',
          image: '/lovable-uploads/0d6850e1-a3b2-4a5c-b077-d6c7c098e57b.png',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Kurumsal Dashboard',
          description: 'Veri görselleştirme ve raporlama için geliştirilen interaktif dashboard. Gerçek zamanlı veriler ve gelişmiş filtreleme özellikleri sunar.',
          image: '/lovable-uploads/1e6e526d-3c76-4238-b838-097368cf673b.png',
          technologies: ['Vue.js', 'Chart.js', 'Laravel', 'MySQL', 'Redis'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Mobil Uygulama',
          description: 'Cross-platform mobil uygulama geliştirme projesi. Kullanıcı dostu arayüz ve performans optimizasyonu ile mobil deneyimi maksimize eder.',
          image: '/placeholder.svg',
          technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
          liveUrl: '#',
          githubUrl: '#'
        }
      ]
    },
    en: {
      title: 'PROJECTS',
      subtitle: 'Solutions I\'ve Built',
      viewProject: 'View Project',
      viewCode: 'View Code',
      projects: [
        {
          title: 'E-Commerce Platform',
          description: 'Full-featured e-commerce platform developed using modern React and Node.js technologies. Includes payment integration, inventory management and analytics dashboard.',
          image: '/lovable-uploads/0d6850e1-a3b2-4a5c-b077-d6c7c098e57b.png',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Enterprise Dashboard',
          description: 'Interactive dashboard developed for data visualization and reporting. Offers real-time data and advanced filtering features.',
          image: '/lovable-uploads/1e6e526d-3c76-4238-b838-097368cf673b.png',
          technologies: ['Vue.js', 'Chart.js', 'Laravel', 'MySQL', 'Redis'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Mobile Application',
          description: 'Cross-platform mobile application development project. Maximizes mobile experience with user-friendly interface and performance optimization.',
          image: '/placeholder.svg',
          technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
          liveUrl: '#',
          githubUrl: '#'
        }
      ]
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 tracking-tighter mb-6">
            {content[language].title}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300">
            {content[language].subtitle}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[language].projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-green-600/20 text-green-300 text-sm rounded-full border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {content[language].viewProject}
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
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

export default ProjectsSection;
