// import React from 'react';
import SectionTitle from '../SectionTitle';

const ClientLogosSection = () => {
  const clients = [
    'KAWERU GROUP',
    'HASHTAG',
    'TALISMAN CONSULTING',
    'AFRICA BARBECUE',
    'BRAVE EMG',
    'HOQ'
  ];

  return (
    <section className="section-padding bg-pastel-yellow mt-8">
      <div className="container mx-auto pt-8 pb-8">
        <SectionTitle 
          title="Clients avec lesquels nous avons travaillé" 
          subtitle="Des entreprises de divers secteurs d'activité nous font confiance"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="w-full h-16 flex items-center justify-center text-gray-500 text-center text-sm font-semibold">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
