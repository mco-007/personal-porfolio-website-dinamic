
import { useState } from 'react';
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
  const { toast } = useToast();

  const content = {
    tr: {
      title: 'İletişim',
      subtitle: 'Dijital dönüşüm yolculuğunuz için bana ulaşın!',
      email: 'E-posta',
      form: {
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        message: 'Mesajınız',
        submit: 'Mesaj Gönder'
      },
      successMessage: 'Mesajınız başarıyla gönderildi!',
      errorMessage: 'Lütfen tüm alanları doldurun.'
    },
    en: {
      title: 'Contact',
      subtitle: 'Contact me for your digital transformation journey!',
      email: 'Email',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message'
      },
      successMessage: 'Your message has been sent successfully!',
      errorMessage: 'Please fill in all fields.'
    }
  };

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

    // Here you would typically send the form data to a backend service
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
          <p className="text-xl text-gray-600">{content[language].subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {content[language].email}
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:mco@mucahitozcan.com"
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span className="text-2xl mr-3">📧</span>
                    <span className="text-lg">mco@mucahitozcan.com</span>
                  </a>
                </div>
                
                <div className="mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
                    alt="İletişim"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {content[language].form.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {content[language].form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {content[language].form.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    {content[language].form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
