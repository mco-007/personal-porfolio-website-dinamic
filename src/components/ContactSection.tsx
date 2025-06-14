
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  language: 'tr' | 'en';
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  const content = {
    tr: {
      title: 'İLETİŞİM',
      subtitle: 'CONNECT WITH ME',
      subtitle2: 'Dijital dönüşüm yolculuğunuz için bana ulaşın!',
      email: 'E-posta',
      form: {
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        submit: 'MESAJ GÖNDER'
      },
      successMessage: 'Mesajınız başarıyla gönderildi!',
      errorMessage: 'Lütfen tüm alanları doldurun.'
    },
    en: {
      title: 'CONTACT',
      subtitle: 'CONNECT WITH ME',
      subtitle2: 'Contact me for your digital transformation journey!',
      email: 'Email',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'SEND MESSAGE'
      },
      successMessage: 'Your message has been sent successfully!',
      errorMessage: 'Please fill in all fields.'
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Hata",
        description: content[language].errorMessage,
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    
    toast({
      title: "Başarılı",
      description: content[language].successMessage,
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-40 bg-gradient-to-br from-black via-gray-900 to-violet-900/30 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Holographic Data Streams */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-violet-400/50 to-transparent animate-data-stream"
            style={{
              left: `${8 + i * 8}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-violet-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-transparent rotate-12 animate-bounce-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Advanced Effects */}
        <div className="text-center mb-32 relative">
          <div className="inline-block mb-8 relative">
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-300 to-purple-400 tracking-tighter transform hover:scale-105 transition-transform duration-500 animate-hologram">
              {content[language].title}
            </h2>
            {/* Electric Effect */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-violet-400/30 transform animate-glitch">
              {content[language].title}
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-violet-500 via-pink-500 to-purple-500 animate-gradient-shift blur-sm"></div>
          </div>
          <p className="text-3xl md:text-4xl font-light text-violet-300 tracking-widest animate-fade-in delay-200 neon-purple">
            {content[language].subtitle}
          </p>
          <p className="text-xl text-gray-400 mt-6 animate-fade-in delay-300">
            {content[language].subtitle2}
          </p>
        </div>
        
        {/* Contact Grid with Advanced 3D Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info Card */}
            <Card className="glass border-2 border-violet-500/30 backdrop-blur-xl hover:border-violet-500/60 transition-all duration-700 group cursor-pointer transform hover:scale-110 hover:-translate-y-8 hover:rotate-2 modern-card perspective-1000">
              <CardContent className="p-12 relative z-10">
                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-300 mb-10 group-hover:from-violet-400 group-hover:to-pink-400 transition-all duration-500 transform group-hover:scale-110">
                  {content[language].email}
                </h3>
                
                {/* Email Link with Advanced Hover */}
                <div className="space-y-8 mb-12">
                  <a 
                    href="mailto:mco@mucahitozcan.com"
                    className="flex items-center text-violet-400 hover:text-white transition-all duration-500 group/email transform hover:scale-110 hover:translate-x-4"
                  >
                    <div className="text-5xl mr-6 transform group-hover/email:scale-125 group-hover/email:rotate-12 transition-all duration-500">📧</div>
                    <div>
                      <span className="text-2xl font-bold neon-purple">mco@mucahitozcan.com</span>
                      <div className="w-0 h-1 bg-gradient-to-r from-violet-500 to-pink-500 group-hover/email:w-full transition-all duration-500"></div>
                    </div>
                  </a>
                </div>
                
                {/* Contact Image with Effects */}
                <div className="relative group/image">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
                    alt="İletişim"
                    className="w-full h-64 object-cover rounded-2xl transform group-hover/image:scale-110 group-hover/image:rotate-3 transition-all duration-1000 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-500/50 to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Elements */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-violet-400 rounded-full opacity-0 group-hover/image:opacity-100 animate-particle-float"
                      style={{
                        left: `${10 + i * 10}%`,
                        top: `${15 + (i % 3) * 25}%`,
                        animationDelay: `${i * 0.15}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
              </CardContent>
            </Card>
            
            {/* Contact Form Card */}
            <Card className="glass border-2 border-violet-500/30 backdrop-blur-xl hover:border-violet-500/60 transition-all duration-700 group cursor-pointer transform hover:scale-110 hover:-translate-y-8 hover:-rotate-2 modern-card perspective-1000">
              <CardContent className="p-12 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Input */}
                  <div className="relative group/input">
                    <label htmlFor="name" className="block text-lg font-bold text-gray-300 mb-3 group-hover/input:text-violet-400 transition-colors duration-300">
                      {content[language].form.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800/50 border-2 border-violet-500/30 rounded-xl px-6 py-4 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-500 hover:border-violet-500/50 transform hover:scale-105"
                    />
                    <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-violet-500 to-pink-500 group-hover/input:w-full transition-all duration-500"></div>
                  </div>
                  
                  {/* Email Input */}
                  <div className="relative group/input">
                    <label htmlFor="email" className="block text-lg font-bold text-gray-300 mb-3 group-hover/input:text-violet-400 transition-colors duration-300">
                      {content[language].form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800/50 border-2 border-violet-500/30 rounded-xl px-6 py-4 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-500 hover:border-violet-500/50 transform hover:scale-105"
                    />
                    <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-violet-500 to-pink-500 group-hover/input:w-full transition-all duration-500"></div>
                  </div>
                  
                  {/* Message Textarea */}
                  <div className="relative group/input">
                    <label htmlFor="message" className="block text-lg font-bold text-gray-300 mb-3 group-hover/input:text-violet-400 transition-colors duration-300">
                      {content[language].form.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800/50 border-2 border-violet-500/30 rounded-xl px-6 py-4 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-500 hover:border-violet-500/50 transform hover:scale-105 resize-none"
                    />
                    <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-violet-500 to-pink-500 group-hover/input:w-full transition-all duration-500"></div>
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-500 to-pink-600 hover:from-violet-400 hover:to-pink-500 text-white font-black py-6 text-xl transform hover:scale-110 hover:rotate-1 transition-all duration-500 shadow-2xl hover:shadow-violet-500/50 overflow-hidden group/btn skew-x-[-10deg]"
                  >
                    <span className="skew-x-[10deg] block relative z-10">{content[language].form.submit}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-pink-500 rounded blur opacity-0 group-hover/btn:opacity-75 transition duration-500"></div>
                    
                    {/* Button Particles */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover/btn:opacity-100 animate-ping"
                        style={{
                          left: `${15 + i * 12}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </Button>
                </form>

                {/* Form Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Section Bottom Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default ContactSection;
