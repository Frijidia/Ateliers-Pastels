
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { 
  Palette, Layers, FileText, Image, PenTool, Printer, Gift, 
  Megaphone, Monitor, Briefcase, Award, Users
} from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive solutions for all your visual communication needs"
        image="https://images.unsplash.com/photo-1581095095619-9284f94afc4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      {/* Service Category 1 */}
      <section id="visual-identity" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-pastel-yellow h-1 w-16 mb-4"></div>
              <h2 className="text-3xl font-display font-bold mb-6">Visual Identity & Graphic Design</h2>
              <p className="text-gray-600 mb-6">
                Your visual identity is the face of your brand. We create cohesive and impactful visual systems that help you stand out and connect with your audience.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-pastel-yellow/20 p-3 rounded-lg">
                    <Layers size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Brand Identity Development</h3>
                    <p className="text-gray-600">Logo design, color palettes, typography systems, and comprehensive brand guidelines.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-yellow/20 p-3 rounded-lg">
                    <FileText size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Print Collateral</h3>
                    <p className="text-gray-600">Business cards, letterheads, envelopes, and other stationery that reflects your brand identity.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-yellow/20 p-3 rounded-lg">
                    <Image size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Marketing Materials</h3>
                    <p className="text-gray-600">Brochures, catalogs, flyers, posters, and other promotional items designed to convey your message.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-yellow/20 p-3 rounded-lg">
                    <PenTool size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Illustration & Custom Graphics</h3>
                    <p className="text-gray-600">Custom illustrations, icons, and graphic elements that enhance your visual communication.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Visual Identity & Graphic Design"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Category 2 */}
      <section id="printing" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Printing & Production"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-pastel-pink h-1 w-16 mb-4"></div>
              <h2 className="text-3xl font-display font-bold mb-6">Printing & Production</h2>
              <p className="text-gray-600 mb-6">
                We offer high-quality printing services for all your communication materials, from business cards to large-format displays.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-lg">
                    <Printer size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Offset & Digital Printing</h3>
                    <p className="text-gray-600">High-quality printing for both small and large runs, with attention to color accuracy and detail.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-lg">
                    <FileText size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Catalogs & Brochures</h3>
                    <p className="text-gray-600">Custom-designed and professionally printed catalogs and brochures that showcase your products or services.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-lg">
                    <Layers size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Packaging Solutions</h3>
                    <p className="text-gray-600">Custom boxes, labels, bags, and other packaging materials designed to enhance your product presentation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-lg">
                    <Image size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Large Format Printing</h3>
                    <p className="text-gray-600">Banners, posters, canvas prints, and other large-format items for events and displays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Category 3 */}
      <section id="goodies" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-pastel-turquoise h-1 w-16 mb-4"></div>
              <h2 className="text-3xl font-display font-bold mb-6">Customized Goodies</h2>
              <p className="text-gray-600 mb-6">
                Promote your brand with custom promotional items and merchandise that leave a lasting impression on your customers and partners.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-pastel-turquoise/20 p-3 rounded-lg">
                    <Gift size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Promotional Items</h3>
                    <p className="text-gray-600">Pens, notebooks, keychains, USB drives, and other practical items customized with your brand.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-turquoise/20 p-3 rounded-lg">
                    <Users size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Corporate Gifts</h3>
                    <p className="text-gray-600">High-quality gifts for clients, partners, and employees that represent your brand values.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-turquoise/20 p-3 rounded-lg">
                    <Award size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Event Merchandise</h3>
                    <p className="text-gray-600">Custom items for conferences, trade shows, and special events to increase brand visibility.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-turquoise/20 p-3 rounded-lg">
                    <Image size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Branded Apparel</h3>
                    <p className="text-gray-600">T-shirts, caps, tote bags, and other wearable items with your logo or custom designs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1613294326794-e7c74fe886e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Customized Goodies"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Category 4 */}
      <section id="signage" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581095095619-9284f94afc4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Signage & Display"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-pastel-yellow h-1 w-16 mb-4"></div>
              <h2 className="text-3xl font-display font-bold mb-6">Signage & Display</h2>
              <p className="text-gray-600 mb-6">
                Capture attention with impactful signage and point-of-sale displays that highlight your products and enhance your brand presence.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-pastel-yellow/20 p-3 rounded-lg">
                    <Megaphone size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Retail Signage</h3>
                    <p className="text-gray-600">Indoor and outdoor signs, window displays, and directional signage for retail environments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-yellow/20 p-3 rounded-lg">
                    <Layers size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Point-of-Sale Displays</h3>
                    <p className="text-gray-600">Custom displays, counter cards, and shelf talkers designed to increase product visibility.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-yellow/20 p-3 rounded-lg">
                    <Briefcase size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Exhibition & Event Materials</h3>
                    <p className="text-gray-600">Trade show booths, banners, backdrops, and promotional displays for events and exhibitions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-yellow/20 p-3 rounded-lg">
                    <Image size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vehicle Graphics</h3>
                    <p className="text-gray-600">Custom vehicle wraps and graphics that turn your fleet into mobile advertisements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Category 5 */}
      <section id="digital" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-pastel-pink h-1 w-16 mb-4"></div>
              <h2 className="text-3xl font-display font-bold mb-6">Digital Services</h2>
              <p className="text-gray-600 mb-6">
                Extend your visual identity to digital platforms with cohesive online design solutions that complement your print materials.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-lg">
                    <Monitor size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Digital Assets</h3>
                    <p className="text-gray-600">Social media graphics, email templates, and digital advertising materials aligned with your brand.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-lg">
                    <Palette size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                    <p className="text-gray-600">User interface and experience design for websites and applications that prioritize usability and aesthetic appeal.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-lg">
                    <Image size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Digital Publication Design</h3>
                    <p className="text-gray-600">Interactive brochures, catalogs, and presentations for digital distribution.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pastel-pink/20 p-3 rounded-lg">
                    <PenTool size={24} className="text-pastel-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Motion Graphics</h3>
                    <p className="text-gray-600">Animated logos, banner ads, and simple video content to enhance your digital presence.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Digital Services"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-pastel-turquoise via-white to-pastel-pink">
        <div className="container mx-auto text-center">
          <SectionTitle 
            title="Start Your Project Today" 
            subtitle="We're here to help you bring your creative vision to life"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-pastel-black text-white hover:bg-pastel-pink transition-colors">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-pastel-black text-pastel-black hover:bg-pastel-black hover:text-white transition-colors">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
