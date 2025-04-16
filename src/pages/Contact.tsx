
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import QuoteForm from '@/components/QuoteForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <Hero
        title="Contactez-nous"
        subtitle="Entrez en contact avec notre équipe pour discuter de votre prochain projet"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Contactez-nous" 
            subtitle="Nous sommes là pour répondre à toutes vos questions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Contact Info Card 1 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover-scale">
              <div className="bg-pastel-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Téléphone</h3>
              <p className="text-gray-600">+33 1 23 45 67 89</p>
              <p className="text-gray-600">+33 9 87 65 43 21</p>
            </div>
            
            {/* Contact Info Card 2 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover-scale">
              <div className="bg-pastel-turquoise w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Email</h3>
              <p className="text-gray-600">contact@atelierspastels.com</p>
              <p className="text-gray-600">info@atelierspastels.com</p>
            </div>
            
            {/* Contact Info Card 3 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover-scale">
              <div className="bg-pastel-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Adresse</h3>
              <p className="text-gray-600">123 Rue de la Création</p>
              <p className="text-gray-600">75001 Paris, France</p>
            </div>
            
            {/* Contact Info Card 4 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover-scale">
              <div className="bg-pastel-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Horaires</h3>
              <p className="text-gray-600">Lundi - Vendredi</p>
              <p className="text-gray-600">9h00 - 18h00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Forms Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Nous Trouver</h2>
              <div className="aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033408!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sPlace%20de%20l&#39;Op%C3%A9ra%2C%2075009%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1649495202076!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Les Ateliers Pastels Location"
                ></iframe>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-display font-bold mb-6">Suivez-nous</h2>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-pastel-pink hover:bg-pastel-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-pastel-turquoise hover:bg-pastel-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Forms */}
            <div>
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="contact">Formulaire de Contact</TabsTrigger>
                  <TabsTrigger value="quote">Demande de Devis</TabsTrigger>
                </TabsList>
                <TabsContent value="contact">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-display font-bold mb-6">Envoyez-nous un Message</h2>
                    <ContactForm />
                  </div>
                </TabsContent>
                <TabsContent value="quote">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-display font-bold mb-6">Demander un Devis</h2>
                    <QuoteForm />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Questions Fréquemment Posées" 
            subtitle="Réponses rapides aux questions courantes sur nos services"
          />
          
          <div className="mt-12 max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold mb-3">Quel est le délai typique pour les projets?</h3>
              <p className="text-gray-600">
                Les délais des projets varient en fonction de la portée et de la complexité. Les travaux d'impression simples peuvent prendre 2-3 jours ouvrables, 
                tandis que les projets d'image de marque complets peuvent nécessiter plusieurs semaines. Nous fournirons un calendrier détaillé lors de notre consultation initiale.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold mb-3">Proposez-vous des services express pour les projets urgents?</h3>
              <p className="text-gray-600">
                Oui, nous proposons des services accélérés pour les projets urgents lorsque notre emploi du temps le permet. Des frais supplémentaires peuvent s'appliquer selon le délai et l'étendue du travail requis.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold mb-3">Quels formats de fichiers acceptez-vous pour l'impression?</h3>
              <p className="text-gray-600">
                Nous acceptons une variété de formats de fichiers dont PDF, AI, PSD, INDD, JPG et TIFF. Pour une qualité d'impression optimale, nous recommandons des fichiers PDF haute résolution avec polices et images incorporées.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold mb-3">Pouvez-vous aider avec le design si je n'ai qu'une idée approximative?</h3>
              <p className="text-gray-600">
                Absolument! Nous sommes spécialisés dans la transformation de concepts en solutions visuelles. Notre équipe travaillera avec vous pour comprendre votre vision et développer des designs qui s'alignent avec vos objectifs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold mb-3">Livrez-vous à l'international?</h3>
              <p className="text-gray-600">
                Oui, nous pouvons expédier nos produits à l'international. Les coûts d'expédition et les délais de livraison varient selon le pays de destination. Veuillez nous contacter pour des informations spécifiques concernant les expéditions internationales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
