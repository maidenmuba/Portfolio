
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg h-full">
      <CardHeader className="pb-4">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0 flex flex-col h-full">
        <CardDescription className="text-gray-600 mb-6 flex-grow">
          {description}
        </CardDescription>
        
        <Button 
          variant="outline" 
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:border-transparent transition-all duration-300 font-semibold"
        >
          Let's Discuss Your Project
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
