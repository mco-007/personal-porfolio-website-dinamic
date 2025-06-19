
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Smartphone, Settings, BarChart } from 'lucide-react';

interface SkillsSectionProps {
  language: 'tr' | 'en';
}

const SkillsSection = ({ language }: SkillsSectionProps) => {
  const content = {
    tr: {
      title: 'YETENEKLER',
      subtitle: 'Teknoloji Yetkinlikleri',
      categories: [
        {
          icon: Code,
          title: 'Frontend Development',
          skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'SCSS'],
          color: 'cyan'
        },
        {
          icon: Database,
          title: 'Backend Development',
          skills: ['Node.js', 'Laravel', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
          color: 'green'
        },
        {
          icon: Globe,
          title: 'Web Teknolojileri',
          skills: ['REST API', 'GraphQL', 'WebSocket', 'PWA', 'SEO', 'Performance'],
          color: 'blue'
        },
        {
          icon: Smartphone,
          title: 'Mobil Development',
          skills: ['React Native', 'Flutter', 'Ionic', 'Responsive Design'],
          color: 'purple'
        },
        {
          icon: Settings,
          title: 'DevOps & Tools',
          skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Nginx'],
          color: 'orange'
        },
        {
          icon: BarChart,
          title: 'Veri & Analitik',
          skills: ['Google Analytics', 'Data Visualization', 'SQL', 'Excel', 'Reporting'],
          color: 'pink'
        }
      ]
    },
    en: {
      title: 'SKILLS',
      subtitle: 'Technology Competencies',
      categories: [
        {
          icon: Code,
          title: 'Frontend Development',
          skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'SCSS'],
          color: 'cyan'
        },
        {
          icon: Database,
          title: 'Backend Development',
          skills: ['Node.js', 'Laravel', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
          color: 'green'
        },
        {
          icon: Globe,
          title: 'Web Technologies',
          skills: ['REST API', 'GraphQL', 'WebSocket', 'PWA', 'SEO', 'Performance'],
          color: 'blue'
        },
        {
          icon: Smartphone,
          title: 'Mobile Development',
          skills: ['React Native', 'Flutter', 'Ionic', 'Responsive Design'],
          color: 'purple'
        },
        {
          icon: Settings,
          title: 'DevOps & Tools',
          skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Nginx'],
          color: 'orange'
        },
        {
          icon: BarChart,
          title: 'Data & Analytics',
          skills: ['Google Analytics', 'Data Visualization', 'SQL', 'Excel', 'Reporting'],
          color: 'pink'
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'border-cyan-500/50 hover:border-cyan-500 text-cyan-400',
      green: 'border-green-500/50 hover:border-green-500 text-green-400',
      blue: 'border-blue-500/50 hover:border-blue-500 text-blue-400',
      purple: 'border-purple-500/50 hover:border-purple-500 text-purple-400',
      orange: 'border-orange-500/50 hover:border-orange-500 text-orange-400',
      pink: 'border-pink-500/50 hover:border-pink-500 text-pink-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  const getSkillColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30',
      green: 'bg-green-600/20 text-green-300 border-green-500/30',
      blue: 'bg-blue-600/20 text-blue-300 border-blue-500/30',
      purple: 'bg-purple-600/20 text-purple-300 border-purple-500/30',
      orange: 'bg-orange-600/20 text-orange-300 border-orange-500/30',
      pink: 'bg-pink-600/20 text-pink-300 border-pink-500/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 tracking-tighter mb-6">
            {content[language].title}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300">
            {content[language].subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[language].categories.map((category, index) => (
              <Card 
                key={index} 
                className={`bg-gray-800/50 border-2 transition-all duration-300 transform hover:scale-105 ${getColorClasses(category.color)}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <category.icon className={`w-16 h-16 mx-auto ${getColorClasses(category.color)}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-3 py-1 text-sm rounded-full border ${getSkillColorClasses(category.color)}`}
                      >
                        {skill}
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

export default SkillsSection;
