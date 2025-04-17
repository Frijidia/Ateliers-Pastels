import { Button } from '../ui/button'
import ProjectCard from '../ProjectCard';

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
}

interface ProjectsGridProps {
  projects: Project[];
  visibleProjects: number;
  onLoadMore: () => void;
}

const ProjectsGrid = ({ projects, visibleProjects, onLoadMore }: ProjectsGridProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 lg:mx-24"> {/* Ajout de marges */}
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
          />
        ))}
      </div>
      
      {/* Load More Button */}
      {visibleProjects < projects.length && (
        <div className="text-center mt-12">
          <Button 
            onClick={onLoadMore}
            className="bg-pastel-turquoise text-pastel-black hover:bg-pastel-pink hover:text-white transition-colors"
          >
            Load More Projects
          </Button>
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;
