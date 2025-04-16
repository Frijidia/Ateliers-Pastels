
import React from 'react';
import { Button } from '@/components/ui/button';

interface PortfolioFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

const PortfolioFilter = ({ categories, activeFilter, onFilterChange }: PortfolioFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <Button
          key={index}
          variant={activeFilter === category ? "default" : "outline"}
          className={
            activeFilter === category 
              ? "bg-pastel-black text-white" 
              : "border-pastel-black text-pastel-black hover:bg-pastel-black hover:text-white"
          }
          onClick={() => onFilterChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
