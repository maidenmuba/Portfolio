import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowDown, 
  Download, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  ExternalLink,
  FileText,
  Image,
  Users,
  Link
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    window.open('https://i.postimg.cc/zf4vW7V6/Mubashwir-Hossain-Resume-2025.png', '_blank');
    toast({
      title: "Resume Downloaded",
      description: "Thank you for downloading my resume!",
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message Sent",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    "Data Science", "Machine Learning", "Python", "SQL", "Business Analysis", "Data Visualization"
  ];

  const projects = [
    {
      title: "Business Analysis Dashboard – Alterc Limited",
      category: "Data Visualization",
      description: "Interactive sales insights dashboard using Google Looker Studio with comprehensive KPI tracking and performance metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://lookerstudio.google.com/your-dashboard-link"
    },
    {
      title: "Hill Tracks Bangladesh – EDA Report",
      category: "Data Analysis", 
      description: "Comprehensive analysis of Pahari community opinions and lifestyle data with statistical insights and visualizations.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://your-report-link.com"
    },
    {
      title: "E-commerce Web Scraping – Trek n Tread",
      category: "Data Collection",
      description: "Automated data collection system targeting 6,000+ shoe shops across Bangladesh for comprehensive market analysis.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://docs.google.com/spreadsheets/d/15Tal-LSIdH6KxDo5JSsKkk7kzxtlPui0jiMmaMfvkRU/edit?gid=116201848#gid=116201848"
    },
    {
      title: "Sales Database Management – Alterc Limited",
      category: "Database Management",
      description: "Advanced database maintenance and automated sales reporting system with business intelligence insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://your-database-link.com"
    }
  ];

  const services = [
    {
      title: "EDA & Data Cleaning",
      description: "Transform raw data into actionable insights through comprehensive exploratory data analysis and cleaning processes.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Data Visualization & Dashboards", 
      description: "Create compelling visual stories from your data with interactive dashboards and stunning visualizations.",
      icon: <Image className="w-8 h-8" />
    },
    {
      title: "Machine Learning Applications",
      description: "Implement ML models to predict trends, classify data, and automate decision-making processes.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Business Analysis & Forecasting",
      description: "Strategic business insights and forecasting to drive growth and optimize operations.",
      icon: <Link className="w-8 h-8" />
    }
  ];

  const coreSkills = [
    { category: "Data & Analytics", skills: [
      { name: "Data Analytics", level: 5 },
      { name: "Machine Learning", level: 4 },
      { name: "Data Storytelling", level: 5 }
    ]},
    { category: "Business & Marketing", skills: [
      { name: "Business Development", level: 5 },
      { name: "Digital Marketing", level: 4 },
      { name: "Dashboard Creation", level: 5 }
    ]}
  ];

  const experiences = [
    {
      title: "Data Analyst",
      company: "Alterc Limited",
      duration: "1 year",
      color: "border-l-portfolio-blue",
      bgColor: "bg-blue-100",
      iconColor: "text-portfolio-blue"
    },
    {
      title: "Co-Founder & CEO", 
      company: "SneakyBay (Sneaker retail)",
      duration: "Ongoing",
      color: "border-l-portfolio-purple",
      bgColor: "bg-purple-100", 
      iconColor: "text-portfolio-purple"
    },
    {
      title: "Co-Founder",
      company: "Washing Man (Laundry service)",
      duration: "Ongoing",
      color: "border-l-portfolio-green",
      bgColor: "bg-green-100",
      iconColor: "text-portfolio-green"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects", value: "15+" },
    { label: "Businesses Founded", value: "4" },
    { label: "Clients Served", value: "50+" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-portfolio-blue to-gray-600 bg-clip-text text-transparent">
              Mubashwir Hossain
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-portfolio-blue relative ${
                    activeSection === item 
                      ? 'text-portfolio-blue font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-portfolio-blue' 
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t bg-white rounded-lg shadow-lg">
              {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-gray-100 hover:text-portfolio-blue transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-gray-900">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-orange bg-clip-text text-transparent">
                  Mubashwir
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Computer Science student specializing in 
                <span className="font-semibold text-portfolio-blue"> Data Science</span>, 
                <span className="font-semibold text-portfolio-purple"> Machine Learning</span>, and 
                <span className="font-semibold text-portfolio-orange"> Entrepreneurship</span>
              </p>
              
              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                {skills.map((skill) => (
                  <Badge key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-portfolio-blue hover:text-white transition-all duration-300">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-portfolio-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Let's Connect
                </Button>
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-portfolio-purple to-portfolio-orange hover:from-purple-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 group"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <img
                    src="https://i.postimg.cc/h4ZjjSSB/IMG-2761.jpg"
                    alt="Mubashwir Hossain"
                    className="w-80 h-80 object-cover rounded-full border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    MH
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Arrow */}
          <div className="text-center mt-16 animate-bounce">
            <ArrowDown 
              className="w-8 h-8 text-portfolio-blue mx-auto cursor-pointer hover:text-blue-700 transition-colors" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-orange mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Biography */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a passionate Computer Science student with a strong focus on 
                  <span className="font-semibold text-portfolio-blue"> Data Science</span>, 
                  <span className="font-semibold text-portfolio-purple"> Machine Learning</span>, and 
                  <span className="font-semibold text-portfolio-orange"> Entrepreneurship</span>. 
                  My journey combines technical expertise with real-world business experience.
                </p>
              </div>

              {/* Professional Experience */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <Card key={index} className={`p-6 hover:shadow-lg transition-shadow border-l-4 ${exp.color}`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${exp.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <div className={`w-6 h-6 ${exp.iconColor} font-bold text-sm`}>
                            {exp.company.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{exp.title}</h4>
                          <p className={`${exp.iconColor} font-medium mb-2`}>{exp.company} • {exp.duration}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills & Stats Sidebar */}
            <div className="space-y-8">
              {/* Core Skills */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Core Skills</h3>
                <div className="space-y-6">
                  {coreSkills.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 mb-3">{category.category}</h4>
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-600">{skill.name}</span>
                              <span className="text-sm text-portfolio-blue">{skill.level}/5</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(skill.level / 5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-4 text-center">
                    <div className="text-2xl font-bold text-portfolio-blue mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 hover:bg-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-portfolio-blue transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => window.open(project.link, '_blank')}
                      className="bg-portfolio-blue hover:bg-blue-700 text-white flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-orange bg-clip-text text-transparent">
                Services I Offer
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center p-6">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-portfolio-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white w-full">
                    Let's Discuss
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-orange mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-portfolio-blue" />
                    <span>mubashwir.sarker@northsouth.edu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-portfolio-blue" />
                    <span>+880 177875177</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services Offered:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Data Analysis & Visualization</li>
                  <li>• Machine Learning Solutions</li>
                  <li>• Business Intelligence Dashboards</li>
                  <li>• Database Management & Optimization</li>
                  <li>• Strategic Business Consulting</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <p className="text-gray-400">
            © 2025 Mubashwir Hossain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;