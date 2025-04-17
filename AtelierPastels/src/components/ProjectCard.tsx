import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  className?: string;
}

const ProjectCard = ({ id, title, category, image, className }: ProjectCardProps) => {
  return (
    <Link 
      to={`/portfolio/${id}`} 
      className={cn("group block overflow-hidden rounded-lg relative hover-scale", className)}
    >
      {/* Conteneur de l'image avec des bords arrondis */}
      <div className="relative aspect-square overflow-hidden rounded-xl"> {/* Ajout de rounded-lg ici */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Pas besoin de rounded-lg ici
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-display font-medium">{title}</h3>
          <p className="text-pastel-yellow text-sm mt-1">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
