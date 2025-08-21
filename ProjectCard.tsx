
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectCard = ({ id, title, description, image, technologies }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button 
            onClick={handleViewProject}
            className="w-full bg-white/90 text-gray-900 hover:bg-white font-semibold"
            size="sm"
          >
            View Project
          </Button>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
