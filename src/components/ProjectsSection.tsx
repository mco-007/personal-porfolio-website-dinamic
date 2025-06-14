
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectsSectionProps {
  language: 'tr' | 'en';
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const content = {
    tr: {
      title: 'Projeler',
      projects: [
        {
          name: 'Beautiq – Güzellik Salonu Yönetimi',
          year: '2024–2025',
          description: 'Güzellik salonları için randevu, müşteri ve envanter yönetimi sunan mobil uygulama ve yönetim sistemi.',
          result: 'Randevu ve müşteri memnuniyetinde %40 artış',
          cta: 'Uygulamayı İncele',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
        },
        {
          name: 'Antalya Turkuaz Web Sitesi',
          year: '2025',
          description: 'Güvenlik kamera sistemleri ve bilişim çözümleri için SEO uyumlu, duyarlı kurumsal web sitesi.',
          result: '%60 organik trafik artışı, %30 müşteri talebi artışı',
          cta: 'Web Sitesini İncele',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
        },
        {
          name: 'Hanedan Konakları Dijital Katalog',
          year: '2024',
          description: '3D görselleştirmeler, sanal turlar ve dinamik fiyatlandırma özellikli interaktif dijital katalog.',
          result: 'Satış temsilcilerinin işini kolaylaştıran yaratıcı ve prestijli katalog',
          cta: 'Kataloğu İncele',
          image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop'
        },
        {
          name: 'Değirmen Fabrika Üretim Kılavuzu',
          year: '2024',
          description: 'Fabrika üretim süreçleri için dijital kılavuz ve eğitim sistemi.',
          result: 'Öğrenme süresinde %35 azalma, sınav başarı oranında %90 artış',
          cta: 'Sistemi İncele',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
        }
      ]
    },
    en: {
      title: 'Projects',
      projects: [
        {
          name: 'Beautiq – Beauty Salon Management',
          year: '2024–2025',
          description: 'Mobile application and management system offering appointment, customer and inventory management for beauty salons.',
          result: '40% increase in appointments and customer satisfaction',
          cta: 'View Application',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
        },
        {
          name: 'Antalya Turkuaz Website',
          year: '2025',
          description: 'SEO-friendly, responsive corporate website for security camera systems and IT solutions.',
          result: '60% organic traffic increase, 30% customer inquiry increase',
          cta: 'View Website',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
        },
        {
          name: 'Hanedan Residences Digital Catalog',
          year: '2024',
          description: 'Interactive digital catalog with 3D visualizations, virtual tours and dynamic pricing features.',
          result: 'Creative and prestigious catalog facilitating sales representatives\' work',
          cta: 'View Catalog',
          image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop'
        },
        {
          name: 'Mill Factory Production Guide',
          year: '2024',
          description: 'Digital guide and training system for factory production processes.',
          result: '35% reduction in learning time, 90% increase in exam success rate',
          cta: 'View System',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
        }
      ]
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {content[language].projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-green-700 font-medium text-sm">
                      <span className="font-semibold">Sonuç:</span> {project.result}
                    </p>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {project.cta}
                  </Button>
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
