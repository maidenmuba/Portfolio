
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  features: string[];
  overview: string;
  challenges: string[];
  results: string[];
}

const projectsData: Record<string, ProjectData> = {
  'business-dashboard': {
    id: 'business-dashboard',
    title: 'Business Analysis Dashboard',
    description: 'Interactive dashboards and visual reports created for businesses to track KPIs and performance metrics.',
    fullDescription: 'A comprehensive business intelligence dashboard that provides real-time insights into key performance indicators, sales metrics, and operational data. Built with Python and modern visualization libraries to deliver actionable business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Dashboard', 'Business Intelligence', 'Plotly', 'Pandas'],
    liveLink: 'https://example.com/dashboard',
    githubLink: 'https://github.com/example/dashboard',
    features: [
      'Real-time KPI tracking',
      'Interactive data visualization',
      'Automated report generation',
      'Multi-user dashboard access',
      'Custom metric configuration'
    ],
    overview: 'This project addresses the critical need for businesses to monitor their performance in real-time. The dashboard aggregates data from multiple sources and presents it in an intuitive, actionable format.',
    challenges: [
      'Integrating multiple data sources with different formats',
      'Ensuring real-time data updates without performance issues',
      'Creating intuitive visualizations for non-technical users'
    ],
    results: [
      'Reduced reporting time by 80%',
      'Improved decision-making speed',
      'Increased data accessibility across teams'
    ]
  },
  'startup-analysis': {
    id: 'startup-analysis',
    title: 'Startup Ecosystem Analysis',
    description: 'Comprehensive exploratory data analysis on Bangladesh\'s startup ecosystem with machine learning insights.',
    fullDescription: 'An in-depth analysis of Bangladesh\'s startup ecosystem using advanced data science techniques and machine learning algorithms to identify trends, patterns, and opportunities in the entrepreneurial landscape.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'EDA', 'Machine Learning', 'Scikit-learn', 'Matplotlib'],
    liveLink: 'https://example.com/startup-analysis',
    githubLink: 'https://github.com/example/startup-analysis',
    features: [
      'Comprehensive data collection and cleaning',
      'Statistical analysis of startup trends',
      'Machine learning prediction models',
      'Interactive visualization dashboards',
      'Market opportunity identification'
    ],
    overview: 'This research project provides valuable insights into Bangladesh\'s growing startup ecosystem, helping entrepreneurs and investors make informed decisions.',
    challenges: [
      'Limited availability of structured startup data',
      'Ensuring data quality and consistency',
      'Building accurate predictive models with limited historical data'
    ],
    results: [
      'Identified key growth sectors in Bangladesh',
      'Developed funding prediction models',
      'Created comprehensive market analysis report'
    ]
  },
  'web-scraping': {
    id: 'web-scraping',
    title: 'E-commerce Web Scraping',
    description: 'Data collection system for shoe stores in Bangladesh with automated price monitoring and inventory tracking.',
    fullDescription: 'An automated web scraping system designed to collect product information, pricing data, and inventory status from various e-commerce platforms in Bangladesh, specifically focusing on footwear retailers.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Web Scraping', 'Python', 'Data Collection', 'BeautifulSoup', 'Selenium'],
    liveLink: 'https://example.com/scraping-tool',
    githubLink: 'https://github.com/example/web-scraping',
    features: [
      'Multi-platform data extraction',
      'Automated price monitoring',
      'Inventory tracking system',
      'Data validation and cleaning',
      'Scheduled data collection'
    ],
    overview: 'This project automates the tedious process of manual price comparison and inventory tracking across multiple e-commerce platforms, providing valuable market intelligence.',
    challenges: [
      'Handling dynamic website structures',
      'Avoiding detection by anti-scraping measures',
      'Ensuring data accuracy and consistency'
    ],
    results: [
      'Automated data collection from 10+ platforms',
      'Reduced manual research time by 95%',
      'Improved pricing strategy accuracy'
    ]
  },
  'sales-database': {
    id: 'sales-database',
    title: 'Sales Database Management',
    description: 'Database maintenance and sales reporting system for e-commerce operations with automated insights.',
    fullDescription: 'A comprehensive database management system for e-commerce operations, featuring automated sales reporting, customer analytics, and business intelligence tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    technologies: ['SQL', 'Database', 'Analytics', 'PostgreSQL', 'Python'],
    liveLink: 'https://example.com/sales-system',
    githubLink: 'https://github.com/example/sales-database',
    features: [
      'Automated sales reporting',
      'Customer behavior analysis',
      'Inventory management integration',
      'Revenue forecasting',
      'Performance dashboards'
    ],
    overview: 'This system streamlines sales operations by providing automated reporting and analytics capabilities, enabling data-driven business decisions.',
    challenges: [
      'Designing efficient database schema',
      'Ensuring data integrity across multiple sources',
      'Creating scalable reporting solutions'
    ],
    results: [
      'Improved reporting accuracy by 90%',
      'Reduced manual data entry errors',
      'Enhanced sales forecasting capabilities'
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>

        {/* Project Hero */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl opacity-90 max-w-3xl">{project.description}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveLink && (
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold"
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </Button>
            )}
            {project.githubLink && (
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-full font-semibold"
                onClick={() => window.open(project.githubLink, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {project.fullDescription}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {project.overview}
                </p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900">Key Features</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges & Solutions */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-gray-900">Challenges & Solutions</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Results & Impact */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl font-bold text-gray-900">Results & Impact</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Project Stats */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl font-bold text-gray-900">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0 space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Technologies Used</div>
                  <div className="font-medium text-gray-900">{project.technologies.length} Technologies</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Key Features</div>
                  <div className="font-medium text-gray-900">{project.features.length} Features</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Impact Areas</div>
                  <div className="font-medium text-gray-900">{project.results.length} Results</div>
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl font-bold text-gray-900">Interested in Similar Work?</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <p className="text-gray-600 mb-4">
                  Let's discuss how I can help you with your next project.
                </p>
                <Button
                  onClick={() => navigate('/#contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
