
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { projects, allCategories } from '@/components/portfolio/ProjectData';
import PortfolioFilter from '@/components/portfolio/PortfolioFilter';
import ProjectsGrid from '@/components/portfolio/ProjectsGrid';
import CaseStudiesSection from '@/components/portfolio/CaseStudiesSection';
import ClientLogosSection from '@/components/portfolio/ClientLogosSection';
import CallToActionSection from '@/components/portfolio/CallToActionSection';

const Portfolio = () => {
  const [filter, setFilter] = useState("Tout");
  const [visibleProjects, setVisibleProjects] = useState(8);

  const filteredProjects = filter === "Tout"
    ? projects
    : projects.filter(project => project.category === filter);

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setVisibleProjects(8);
  };

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };

  return (
    <Layout>
      <Hero
        title="Notre Portfolio"
        subtitle="Une présentation de nos créations dans diverses industries"
        image="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      {/* Portfolio Gallery */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Nos Projets" 
            subtitle="Parcourez nos réalisations par catégorie ou consultez tous les projets"
          />
          
          {/* Filter Buttons */}
          <PortfolioFilter 
            categories={allCategories} 
            activeFilter={filter} 
            onFilterChange={handleFilterChange} 
          />
          
          {/* Projects Grid */}
          <ProjectsGrid 
            projects={filteredProjects} 
            visibleProjects={visibleProjects} 
            onLoadMore={loadMore} 
          />
        </div>
      </section>
      
      {/* Case Studies Section */}
      <CaseStudiesSection />
      
      {/* Client Logos Section */}
      <ClientLogosSection />
      
      {/* CTA Section */}
      <CallToActionSection />
    </Layout>
  );
};

export default Portfolio;
