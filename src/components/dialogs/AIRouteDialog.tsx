import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, MapPin, Zap, Brain, Truck, Clock, Fuel } from "lucide-react";

interface AIRouteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AIRouteDialog = ({ open, onOpenChange }: AIRouteDialogProps) => {
  const optimizationStats = [
    { label: "Fuel Savings", value: "23%", icon: <Fuel className="h-4 w-4" /> },
    { label: "Time Reduced", value: "18 mins", icon: <Clock className="h-4 w-4" /> },
    { label: "Routes Optimized", value: "24", icon: <MapPin className="h-4 w-4" /> },
    { label: "AI Accuracy", value: "96.8%", icon: <Brain className="h-4 w-4" /> }
  ];

  const features = [
    {
      title: "Real-time Traffic Integration",
      description: "Uses Google Maps API to factor in live traffic conditions and road closures",
      icon: <MapPin className="h-5 w-5 text-smart-blue" />
    },
    {
      title: "Predictive Analytics", 
      description: "Machine learning models predict waste generation patterns based on historical data",
      icon: <Brain className="h-5 w-5 text-primary" />
    },
    {
      title: "Dynamic Route Adjustment",
      description: "Routes automatically adjust based on bin fill levels from IoT sensors",
      icon: <Zap className="h-5 w-5 text-warning" />
    },
    {
      title: "Multi-objective Optimization",
      description: "Balances fuel efficiency, time savings, and environmental impact",
      icon: <TrendingUp className="h-5 w-5 text-success" />
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>AI-Powered Route Optimization</span>
          </DialogTitle>
          <DialogDescription>
            Advanced machine learning algorithms optimizing waste collection for maximum efficiency
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {optimizationStats.map((stat, index) => (
              <div key={index} className="bg-muted/50 p-3 rounded-lg text-center">
                <div className="flex justify-center mb-2 text-primary">
                  {stat.icon}
                </div>
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-sm">
                    {feature.icon}
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-accent" />
                <span>Technical Implementation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-sm mb-2">Algorithms Used:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Genetic Algorithm for route planning</li>
                    <li>• Neural networks for demand prediction</li>
                    <li>• Graph algorithms (NetworkX) for optimization</li>
                    <li>• Reinforcement learning for continuous improvement</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2">Data Sources:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• IoT sensor data from smart bins</li>
                    <li>• Historical collection patterns</li>
                    <li>• Weather and seasonal factors</li>
                    <li>• Local events and population density</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-primary/10 p-3 rounded-lg">
                <h5 className="font-medium text-sm mb-2">Environmental Impact:</h5>
                <p className="text-xs text-muted-foreground">
                  Our AI optimization has reduced carbon emissions by 15% through efficient routing,
                  saving approximately 2,340 liters of fuel monthly across the city fleet.
                </p>
              </div>
            </CardContent>
          </Card>

          <Button onClick={() => onOpenChange(false)} className="w-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};