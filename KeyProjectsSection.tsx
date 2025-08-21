
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, BarChart3, PieChart, MapPin, Database, Eye } from "lucide-react";
import { BarChart, Bar, PieChart as RechartsPieChart, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const KeyProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Sample data for charts
  const salesData = [
    { month: 'Oct', sales: 45000, growth: 12 },
    { month: 'Nov', sales: 52000, growth: 15.5 },
    { month: 'Dec', sales: 48000, growth: -7.7 }
  ];

  const categoryData = [
    { category: 'Electronics', value: 35, color: '#3B82F6' },
    { category: 'Fashion', value: 28, color: '#10B981' },
    { category: 'Home & Garden', value: 22, color: '#F59E0B' },
    { category: 'Sports', value: 15, color: '#EF4444' }
  ];

  const hillTracksData = [
    { opinion: 'Positive', value: 45, color: '#10B981' },
    { opinion: 'Neutral', value: 35, color: '#F59E0B' },
    { opinion: 'Negative', value: 20, color: '#EF4444' }
  ];

  const regionData = [
    { region: 'Rangamati', shops: 2150 },
    { region: 'Bandarban', shops: 1890 },
    { region: 'Khagrachari', shops: 1960 }
  ];

  const monthlyGrowth = [
    { month: 'Jan', value: 15 },
    { month: 'Feb', value: 25 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 28 },
    { month: 'May', value: 42 },
    { month: 'Jun', value: 38 }
  ];

  const projects = [
    {
      id: 'business-dashboard',
      title: 'Business Analysis Dashboard',
      subtitle: 'Alterc Limited',
      description: 'Visualize November eCommerce sales insights with interactive KPI tracking',
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-500 to-blue-600',
      link: '#',
      metrics: ['Total Sales: ৳52,000', 'Growth Rate: +15.5%', 'Conversion: 3.2%'],
      chartComponent: (
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={salesData}>
            <Bar dataKey="sales" fill="#3B82F6" radius={4} />
            <Tooltip 
              formatter={(value) => [`৳${value.toLocaleString()}`, 'Sales']}
              labelStyle={{ color: '#374151' }}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'hill-tracks',
      title: 'Hill Tracks Bangladesh EDA Report',
      subtitle: 'Community Research',
      description: 'Opinions and lifestyle data analysis from the Pahari community',
      icon: <PieChart className="w-6 h-6 text-green-600" />,
      color: 'from-green-500 to-emerald-600',
      link: '#',
      metrics: ['Sample Size: 1,250', 'Communities: 15', 'Response Rate: 78%'],
      chartComponent: (
        <ResponsiveContainer width="100%" height={120}>
          <RechartsPieChart>
            <RechartsPieChart data={hillTracksData} cx="50%" cy="50%" innerRadius={25} outerRadius={50}>
              {hillTracksData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </RechartsPieChart>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Opinion']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'web-scraping',
      title: 'E-commerce Web Scraping',
      subtitle: 'Trek n Tread',
      description: 'Scraped 6,000+ shoe shops across Bangladesh for B2B insights',
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      color: 'from-amber-500 to-orange-600',
      link: 'https://docs.google.com/spreadsheets/d/15Tal-LSIdH6KxDo5JSsKkk7kzxtlPui0jiMmaMfvkRU/edit?gid=116201848#gid=116201848',
      metrics: ['Total Shops: 6,000+', 'Districts: 25', 'Success Rate: 94%'],
      chartComponent: (
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={regionData}>
            <Bar dataKey="shops" fill="#F59E0B" radius={4} />
            <Tooltip 
              formatter={(value) => [`${value.toLocaleString()} shops`, 'Count']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'sales-database',
      title: 'Sales Database Management',
      subtitle: 'Alterc Limited',
      description: 'Analyze and automate data from Excel-based logs with growth tracking',
      icon: <Database className="w-6 h-6 text-purple-600" />,
      color: 'from-purple-500 to-purple-600',
      link: '#',
      metrics: ['Records: 50K+', 'Automation: 85%', 'Accuracy: 99.2%'],
      chartComponent: (
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={monthlyGrowth}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
            />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Growth']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Key Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data-driven solutions that transformed business operations and provided actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                hoveredProject === project.id ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500 font-medium">{project.subtitle}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                {/* Chart */}
                <div className="bg-white rounded-lg p-4 border border-gray-100 group-hover:border-gray-200 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Data Visualization</span>
                  </div>
                  {project.chartComponent}
                </div>

                {/* Action Button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button 
                    className={`w-full bg-gradient-to-r ${project.color} text-white hover:shadow-lg transition-all duration-300`}
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in seeing more detailed analysis and methodologies?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KeyProjectsSection;
