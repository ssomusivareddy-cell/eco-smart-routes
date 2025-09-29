import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Smartphone, Battery, MapPin, Zap, AlertTriangle, CheckCircle } from "lucide-react";

interface IoTDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const IoTDialog = ({ open, onOpenChange }: IoTDialogProps) => {
  const deviceTypes = [
    {
      name: "Smart Waste Bins",
      count: 1247,
      description: "Ultrasonic fill-level sensors with GPS tracking",
      features: ["Fill level monitoring", "Temperature sensors", "Overflow alerts", "Location tracking"],
      status: "online",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      name: "Vehicle Trackers", 
      count: 45,
      description: "GPS-enabled route tracking and fuel monitoring",
      features: ["Real-time location", "Fuel consumption", "Driver behavior", "Route optimization"],
      status: "active",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      name: "Air Quality Sensors",
      count: 128,
      description: "Environmental monitoring around waste sites",
      features: ["PM2.5 detection", "Methane levels", "Odor monitoring", "Health alerts"],
      status: "operational", 
      icon: <Zap className="h-5 w-5" />
    }
  ];

  const networkStats = [
    { label: "Devices Online", value: "1,420", status: "success" },
    { label: "Battery Health", value: "94.2%", status: "success" },
    { label: "Network Uptime", value: "99.7%", status: "success" },
    { label: "Data Accuracy", value: "98.1%", status: "success" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Wifi className="h-5 w-5 text-smart-blue" />
            <span>Smart IoT Integration Network</span>
          </DialogTitle>
          <DialogDescription>
            Comprehensive IoT ecosystem for intelligent waste management monitoring
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Network Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {networkStats.map((stat, index) => (
              <div key={index} className="bg-card p-3 rounded-lg border text-center">
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <CheckCircle className="h-4 w-4 text-success mx-auto mt-1" />
              </div>
            ))}
          </div>

          {/* Device Types */}
          <div className="space-y-4">
            {deviceTypes.map((device, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <div className="p-2 bg-smart-blue/10 rounded-lg text-smart-blue">
                        {device.icon}
                      </div>
                      <div>
                        <span>{device.name}</span>
                        <div className="text-sm font-normal text-muted-foreground">
                          {device.count} devices deployed
                        </div>
                      </div>
                    </CardTitle>
                    <Badge variant="default" className="bg-success text-success-foreground">
                      {device.status}
                    </Badge>
                  </div>
                  <CardDescription>{device.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {device.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Specifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Battery className="h-5 w-5 text-warning" />
                <span>Technical Specifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-sm mb-2">Communication Protocols:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• LoRaWAN for long-range communication</li>
                    <li>• 4G/5G cellular backup</li>
                    <li>• Wi-Fi for high-data applications</li>
                    <li>• Bluetooth for maintenance access</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2">Power Management:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Solar panel charging systems</li>
                    <li>• 7-day battery backup</li>
                    <li>• Low-power sleep modes</li>
                    <li>• Energy harvesting technology</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-sm mb-2">Data Processing:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Edge computing for real-time decisions</li>
                    <li>• Cloud sync every 15 minutes</li>
                    <li>• AI-powered anomaly detection</li>
                    <li>• Predictive maintenance alerts</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2">Security Features:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Device authentication</li>
                    <li>• Tamper detection</li>
                    <li>• Secure firmware updates</li>
                  </ul>
                </div>
              </div>

              <div className="bg-smart-blue/10 p-3 rounded-lg">
                <h5 className="font-medium text-sm mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-warning" />
                  Real-time Benefits:
                </h5>
                <p className="text-xs text-muted-foreground">
                  IoT integration has improved collection efficiency by 34%, reduced overflow incidents by 78%,
                  and enabled predictive maintenance that prevents 92% of equipment failures.
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