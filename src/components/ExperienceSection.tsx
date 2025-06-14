
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ExperienceSectionProps {
  language: 'tr' | 'en';
}

const ExperienceSection = ({ language }: ExperienceSectionProps) => {
  const content = {
    tr: {
      title: 'Deneyimler',
      cta: 'Projelerimi Gör',
      experiences: [
        {
          title: 'Freelance Dijital Pazarlama Yöneticisi',
          period: '2020 – Günümüz',
          achievements: [
            'Çeşitli sektörlerdeki KOBİ\'ler için dijital pazarlama stratejileri geliştirme',
            'E-ticaret platformlarında %30 satış artışı sağlama',
            'SEO optimizasyonu ile organik erişimde %50 büyüme',
            'Sosyal medya ve içerik stratejileriyle marka bilinirliğini artırma'
          ]
        },
        {
          title: 'GSK – Kıdemli Müşteri Yönetimi Uzmanı',
          period: '2015 – 2018',
          achievements: [
            'CRM optimizasyonu ile müşteri şikayetlerinde %20 azalma',
            'Yıllık hedeflerde %95 başarı oranı',
            'Müşteri veri analitiği ile pazarlama stratejilerini yönlendirme',
            '180 eczanenin yönetimi ve performans değerlendirmesi'
          ]
        },
        {
          title: 'Turkcell – Teknoloji Uzmanı',
          period: '2009 – 2011',
          achievements: [
            'Akıllı cihaz satışlarında %15 artış',
            'Ekip eğitimleriyle mağaza performansını iyileştirme',
            'Müşteri deneyimini iyileştiren süreç optimizasyonları',
            'Yeni ürün lansmanlarında teknik eğitim koordinasyonu'
          ]
        },
        {
          title: 'Teknosa – Mağaza Yöneticisi',
          period: '2005 – 2008',
          achievements: [
            'Operasyonel verimlilik ve stok optimizasyonu',
            'Ziyaretçi dönüşüm oranında artış',
            'Sürekli satış hedefi başarısı ve bölge birincilikleri',
            'Müşteri odaklı mağaza kültürü oluşturma'
          ]
        }
      ]
    },
    en: {
      title: 'Experience',
      cta: 'View My Projects',
      experiences: [
        {
          title: 'Freelance Digital Marketing Manager',
          period: '2020 – Present',
          achievements: [
            'Developing digital marketing strategies for SMEs across various sectors',
            'Achieving 30% sales increase on e-commerce platforms',
            '50% growth in organic reach through SEO optimization',
            'Increasing brand awareness through social media and content strategies'
          ]
        },
        {
          title: 'GSK – Senior Customer Management Specialist',
          period: '2015 – 2018',
          achievements: [
            '20% reduction in customer complaints through CRM optimization',
            '95% success rate in annual targets',
            'Directing marketing strategies through customer data analytics',
            'Management and performance evaluation of 180 pharmacies'
          ]
        },
        {
          title: 'Turkcell – Technology Specialist',
          period: '2009 – 2011',
          achievements: [
            '15% increase in smart device sales',
            'Improving store performance through team training',
            'Process optimizations improving customer experience',
            'Technical training coordination for new product launches'
          ]
        },
        {
          title: 'Teknosa – Store Manager',
          period: '2005 – 2008',
          achievements: [
            'Operational efficiency and inventory optimization',
            'Increase in visitor conversion rate',
            'Continuous sales target achievement and regional championships',
            'Creating customer-focused store culture'
          ]
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
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {content[language].experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">{exp.title}</h3>
                    <span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {content[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
