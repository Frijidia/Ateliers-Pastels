
import { useState } from 'react';
import { motion } from 'framer-motion';
import portfolioImage from '../assets/port_img.png';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Layout from '../components/Layout';
// import Hero from '@/component/Hero';
import SectionTitle from '../components/SectionTitle';
import { projects, allCategories } from '../components/portfolio/ProjectData';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
// import CaseStudiesSection from '../components/portfolio/CaseStudiesSection';
import ClientLogosSection from '../components/portfolio/ClientLogosSection';
import CallToActionSection from '../components/portfolio/CallToActionSection';

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
        // <Layout>
        <motion.div
            className='font-sans text-gray-800 min-h-screen'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
            <div className='font-sans text-gray-800 min-h-screen'>
                <div className="mt-14">

                    <SectionTitle
                        title="PORTFOLIO"
                        subtitle="Des entreprises de tous les secteurs d'activité lui font confiance"
                    />
                </div>

                {/* Image après le titre */}
                <div className="w-full mb-12 px-4">
                    <img
                        src={portfolioImage}
                        alt="Bannière Portfolio"
                        className="w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-lg object-cover"
                    />
                </div>

                {/* Portfolio Gallery */}
                <section className="section-padding bg-blacl">
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

                {/* Client Logos Section */}
                <ClientLogosSection />

                {/* CTA Section */}
                <CallToActionSection />
                {/* </Layout> */}
            </div>
        </motion.div>

    );
};

export default Portfolio;
