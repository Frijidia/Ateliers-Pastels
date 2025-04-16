
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  overlayOpacity?: string;
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "/contact",
  image = "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  overlayOpacity = "opacity-60"
}: HeroProps) => {
  return (
    <div className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-pastel-black ${overlayOpacity} z-10`}></div>
        <img
          src={image}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-white text-center">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {subtitle}
          </p>
        )}
        {buttonText && (
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="bg-white text-pastel-black hover:bg-pastel-pink hover:text-white">
              <Link to={buttonLink} className="flex items-center">
                {buttonText} <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
        style={{ animationDuration: '2s' }}
      >
        <div className="w-7 h-12 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
