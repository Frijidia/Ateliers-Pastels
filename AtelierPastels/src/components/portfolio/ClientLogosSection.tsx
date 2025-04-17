// import React from 'react';
import SectionTitle from '../SectionTitle';

const ClientLogosSection = () => {
  return (
    <section className="section-padding bg-pastel-yellow mt-8 ">
      <div className="container mx-auto pt-8 pb-8"> {/* Ajout du padding en haut et en bas */}
        <SectionTitle 
          title="Clients We've Worked With" 
          subtitle="Trusted by businesses across various industries"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {/* Replace these with actual client logos */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="w-full h-16 flex items-center justify-center text-gray-400 text-lg font-medium">
                Client {index}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
