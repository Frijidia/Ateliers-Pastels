
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, color = 'bg-white', className }: ServiceCardProps) => {
  return (
    <Card className={cn("card-hover border border-gray-100 overflow-hidden", className)}>
      <div className={cn("h-2", color)}></div>
      <CardHeader>
        <div className="mb-4 text-pastel-black">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
