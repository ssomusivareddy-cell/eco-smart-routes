import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Wifi,
  Database,
  Map,
  Brain,
  Smartphone,
  Zap,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Settings,
  Download,
  Upload,
  Globe,
  MessageSquare,
  Phone
} from "lucide-react";

const Integration = () => {
  const [apiConnections, setApiConnections] = useState([
    { id: 1, name: "Google Maps API", status: "connected", type: "navigation", health: 98 },
    { id: 2, name: "OpenAI GPT-4", status: "connected", type: "ai", health: 95 },
    { id: 3, name: "PostgreSQL", status: "connected", type: "database", health: 100 },
    { id: 4, name: "WhatsApp Business", status: "pending", type: "communication", health: 0 },
    { id: 5, name: "SMS Gateway", status: "error", type: "communication", health: 0 }
  ]);

  const iotDevices = [
    { id: "SB001", type: "Smart Bin", location: "Downtown Plaza", status: "online", batteryLevel: 87, fillLevel: 65 },
    { id: "SB002", type: "Smart Bin", location: "Park Avenue", status: "online", batteryLevel: 92, fillLevel: 23 },
    { id: "SB003", type: "Smart Bin", location: "Industrial Zone", status: "offline", batteryLevel: 15, fillLevel: 0 },
    { id: "TR001", type: "GPS Tracker", location: "Truck #A1", status: "online", batteryLevel: 78, fillLevel: null },
    { id: "TR002", type: "GPS Tracker", location: "Truck #B2", status: "online", batteryLevel: 85, fillLevel: null }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
      case "online":
        return "success";
      case "pending":
        return "warning";
      case "error":
      case "offline":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
      case "online":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <AlertTriangle className="h-4 w-4" />;
      case "error":
      case "offline":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Settings className="h-4 w-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "navigation":
        return <Map className="h-4 w-4" />;
      case "ai":
        return <Brain className="h-4 w-4" />;
      case "database":
        return <Database className="h-4 w-4" />;
      case "communication":
        return <MessageSquare className="h-4 w-4" />;
      default:
        return <Globe className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card-gradient border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Integration Hub</h1>
              <p className="text-muted-foreground mt-1">
                Manage APIs, IoT devices, and system integrations
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Config
              </Button>
              <Button className="bg-hero-gradient hover:shadow-glow transition-spring">
                <Upload className="h-4 w-4 mr-2" />
                Sync All
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="apis" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="apis">API Connections</TabsTrigger>
            <TabsTrigger value="iot">IoT Devices</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="apis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* API Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-accent" />
                    <span>API Services</span>
                  </CardTitle>
                  <CardDescription>
                    External service integrations and their status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {apiConnections.map((api) => (
                      <div key={api.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-muted rounded">
                            {getTypeIcon(api.type)}
                          </div>
                          <div>
                            <p className="font-medium">{api.name}</p>
                            <p className="text-sm text-muted-foreground capitalize">{api.type} service</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {api.health > 0 && (
                            <span className="text-xs text-muted-foreground">{api.health}%</span>
                          )}
                          <Badge variant={getStatusColor(api.status) as any} className="flex items-center space-x-1">
                            {getStatusIcon(api.status)}
                            <span className="capitalize">{api.status}</span>
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* API Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Integration</CardTitle>
                  <CardDescription>
                    Connect additional services to expand functionality
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="Service name" />
                    <Input placeholder="API endpoint" />
                    <Input placeholder="API key" type="password" />
                    <Button className="w-full bg-hero-gradient hover:shadow-glow transition-spring">
                      Add Integration
                    </Button>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Available Integrations</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">Google Gemini</Button>
                      <Button variant="outline" size="sm">MongoDB</Button>
                      <Button variant="outline" size="sm">Twilio SMS</Button>
                      <Button variant="outline" size="sm">Slack</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="iot" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-smart-blue" />
                  <span>IoT Device Network</span>
                </CardTitle>
                <CardDescription>
                  Monitor and manage connected smart bins and vehicle trackers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {iotDevices.map((device) => (
                    <Card key={device.id} className="border-border">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Smartphone className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{device.id}</span>
                          </div>
                          <Badge variant={getStatusColor(device.status) as any}>
                            {device.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{device.type}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Location:</span>
                            <span className="font-medium">{device.location}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Battery:</span>
                            <span className={`font-medium ${
                              device.batteryLevel > 50 ? 'text-success' :
                              device.batteryLevel > 20 ? 'text-warning' : 'text-destructive'
                            }`}>
                              {device.batteryLevel}%
                            </span>
                          </div>
                          {device.fillLevel !== null && (
                            <div className="flex justify-between text-sm">
                              <span>Fill Level:</span>
                              <span className={`font-medium ${
                                device.fillLevel < 50 ? 'text-success' :
                                device.fillLevel < 80 ? 'text-warning' : 'text-destructive'
                              }`}>
                                {device.fillLevel}%
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* WhatsApp Integration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-success" />
                    <span>WhatsApp Business</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary">Pending Setup</Badge>
                    <p className="text-sm text-muted-foreground">
                      Connect WhatsApp Business API for citizen notifications and support
                    </p>
                    <Button className="w-full">Configure WhatsApp</Button>
                  </div>
                </CardContent>
              </Card>

              {/* SMS Gateway */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-smart-blue" />
                    <span>SMS Gateway</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="destructive">Connection Error</Badge>
                    <p className="text-sm text-muted-foreground">
                      SMS service for collection reminders and alerts
                    </p>
                    <Button className="w-full" variant="outline">Reconnect SMS</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Voice Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>Voice Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary">Not Configured</Badge>
                    <p className="text-sm text-muted-foreground">
                      Multi-language voice assistant for accessibility
                    </p>
                    <Button className="w-full" variant="outline">Setup Voice</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Communication Settings</CardTitle>
                <CardDescription>
                  Configure multi-modal communication preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span>Multi-language Support</span>
                    <Badge variant="default">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span>Accessibility Features</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span>Offline SMS Fallback</span>
                    <Badge variant="secondary">Needs Configuration</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>
                    Real-time monitoring of all integrated systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                    <div className="text-center">
                      <Zap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">System health monitoring dashboard will be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Network Performance</CardTitle>
                  <CardDescription>
                    API response times and network statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                    <div className="text-center">
                      <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Network performance metrics will be shown here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Integration;