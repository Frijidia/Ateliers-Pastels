
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';

const CaseStudiesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Featured Case Studies" 
          subtitle="Dive deeper into selected projects and our creative process"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Case Study 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586041828039-b8d193d6d1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Brand Identity Case Study" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold mb-3">Flora Boutique Rebrand</h3>
              <p className="text-pastel-pink mb-4">Visual Identity</p>
              <p className="text-gray-600 mb-6">
                A complete rebranding project for a local flower shop, including logo design, packaging, signage, and digital assets.
              </p>
              <Button asChild className="bg-pastel-black text-white hover:bg-pastel-pink transition-colors">
                <Link to="/portfolio/project1">View Case Study</Link>
              </Button>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Packaging Case Study" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold mb-3">Green Harvest Packaging</h3>
              <p className="text-pastel-turquoise mb-4">Packaging Design</p>
              <p className="text-gray-600 mb-6">
                Eco-friendly packaging solution for an organic food brand, featuring sustainable materials and vibrant design.
              </p>
              <Button asChild className="bg-pastel-black text-white hover:bg-pastel-pink transition-colors">
                <Link to="/portfolio/project3">View Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
