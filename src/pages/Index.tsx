import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Accessibility, 
  Truck,
  MapPin,
  Recycle,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/smart-city-hero.jpg";

const Index = () => {
  const features = [
    {
      title: "AI-Powered Route Optimization",
      description: "Machine learning algorithms optimize collection routes for maximum efficiency",
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      title: "Smart IoT Integration",
      description: "Real-time monitoring of waste bins with fill-level sensors",
      icon: <MapPin className="h-8 w-8 text-smart-blue" />
    },
    {
      title: "Multi-Modal Communication",
      description: "WhatsApp, SMS, and voice support in multiple local languages",
      icon: <Users className="h-8 w-8 text-success" />
    },
    {
      title: "Comprehensive Analytics",
      description: "Data-driven insights for policy improvement and resource allocation",
      icon: <LayoutDashboard className="h-8 w-8 text-accent" />
    }
  ];

  const portals = [
    {
      title: "Admin Dashboard",
      description: "Monitor operations, optimize routes, and generate reports",
      icon: <LayoutDashboard className="h-6 w-6" />,
      href: "/admin",
      variant: "default" as const
    },
    {
      title: "Citizen Portal", 
      description: "Report issues, schedule pickups, and learn recycling",
      icon: <Users className="h-6 w-6" />,
      href: "/citizen",
      variant: "secondary" as const
    },
    {
      title: "Integration Hub",
      description: "Manage APIs, IoT devices, and system connections",
      icon: <Settings className="h-6 w-6" />,
      href: "/integration",
      variant: "outline" as const
    },
    {
      title: "Accessibility Center",
      description: "Customize experience for inclusive access",
      icon: <Accessibility className="h-6 w-6" />,
      href: "/accessibility",
      variant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Smart Waste Management for 
                <span className="block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                  Sustainable Cities
                </span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                AI-powered optimization, IoT integration, and inclusive communication 
                channels for efficient urban waste management systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-green-50 hover:shadow-glow transition-spring">
                  <NavLink to="/admin">
                    <LayoutDashboard className="h-5 w-5 mr-2" />
                    View Dashboard
                  </NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <NavLink to="/citizen">
                    <Users className="h-5 w-5 mr-2" />
                    Citizen Services
                  </NavLink>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Smart city waste management with IoT sensors and route optimization"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-20 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intelligent Waste Management System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leveraging GenAI, IoT sensors, and multi-modal communication to create 
              efficient, accessible, and sustainable waste management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-elevated transition-smooth">
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Access System Portals
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose your access point to the waste management ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portals.map((portal, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        {portal.icon}
                      </div>
                      <div>
                        <CardTitle>{portal.title}</CardTitle>
                        <CardDescription className="mt-1">{portal.description}</CardDescription>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant={portal.variant} className="w-full">
                    <NavLink to={portal.href}>
                      Access {portal.title}
                    </NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">94.8%</div>
              <div className="text-muted-foreground">System Efficiency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-smart-blue mb-2">1,247</div>
              <div className="text-muted-foreground">Smart Bins Connected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">45.2T</div>
              <div className="text-muted-foreground">Waste Processed Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card-gradient rounded-2xl p-12 border shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Inclusive & Accessible Design
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our system ensures waste management services are accessible to all citizens 
                  through multiple communication channels, multi-language support, and 
                  comprehensive accessibility features.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Multi-language voice and text support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>WhatsApp, SMS, and voice communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Screen reader compatibility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>High contrast and adjustable font sizes</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button asChild size="lg" className="bg-hero-gradient hover:shadow-glow transition-spring">
                  <NavLink to="/accessibility">
                    <Accessibility className="h-5 w-5 mr-2" />
                    Explore Accessibility Features
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
