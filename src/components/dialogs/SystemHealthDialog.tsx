import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Globe, 
  Server, 
  Database, 
  Wifi, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  HardDrive,
  Cpu,
  Memory
} from "lucide-react";

interface SystemHealthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "health" | "network";
}

export const SystemHealthDialog = ({ open, onOpenChange, type }: SystemHealthDialogProps) => {
  const systemMetrics = [
    { name: "CPU Usage", value: 45, status: "good", icon: <Cpu className="h-4 w-4" /> },
    { name: "Memory Usage", value: 67, status: "good", icon: <Memory className="h-4 w-4" /> },
    { name: "Disk Usage", value: 23, status: "good", icon: <HardDrive className="h-4 w-4" /> },
    { name: "Network Load", value: 34, status: "good", icon: <Wifi className="h-4 w-4" /> }
  ];

  const services = [
    { name: "API Gateway", status: "healthy", uptime: "99.9%", response: "12ms" },
    { name: "Database Cluster", status: "healthy", uptime: "100%", response: "8ms" },
    { name: "IoT Data Processor", status: "healthy", uptime: "99.7%", response: "45ms" },
    { name: "Route Optimizer", status: "healthy", uptime: "99.8%", response: "234ms" },
    { name: "Notification Service", status: "warning", uptime: "98.2%", response: "67ms" },
    { name: "Analytics Engine", status: "healthy", uptime: "99.9%", response: "156ms" }
  ];

  const networkMetrics = [
    { endpoint: "Google Maps API", latency: "45ms", success: "99.8%", errors: 2 },
    { endpoint: "OpenAI GPT-4", latency: "234ms", success: "99.2%", errors: 12 },
    { endpoint: "PostgreSQL DB", latency: "8ms", success: "100%", errors: 0 },
    { endpoint: "IoT Device Gateway", latency: "67ms", success: "99.1%", errors: 8 },
    { endpoint: "WhatsApp Business", latency: "123ms", success: "97.8%", errors: 23 },
    { endpoint: "SMS Gateway", latency: "89ms", success: "98.9%", errors: 5 }
  ];

  const alerts = [
    { type: "warning", message: "Notification service experiencing elevated latency", time: "5 minutes ago" },
    { type: "info", message: "Scheduled database maintenance completed", time: "2 hours ago" },
    { type: "success", message: "IoT device connectivity restored in Zone 3", time: "4 hours ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
      case "good":
        return "text-success";
      case "warning":
        return "text-warning";
      case "critical":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
      case "good":
        return <Badge variant="default" className="bg-success text-success-foreground">Healthy</Badge>;
      case "warning":
        return <Badge variant="default" className="bg-warning text-warning-foreground">Warning</Badge>;
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  if (type === "health") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-accent" />
              <span>System Health Monitor</span>
            </DialogTitle>
            <DialogDescription>
              Real-time monitoring of all system components and services
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              {/* System Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {systemMetrics.map((metric, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {metric.icon}
                          <span className="text-sm font-medium">{metric.name}</span>
                        </div>
                        <span className={`text-sm font-bold ${getStatusColor(metric.status)}`}>
                          {metric.value}%
                        </span>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Overall Health */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-success" />
                    <span>Overall System Health</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success mb-2">98.7%</div>
                      <div className="text-sm text-muted-foreground">Overall Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">1,247</div>
                      <div className="text-sm text-muted-foreground">Active IoT Devices</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-smart-blue mb-2">23ms</div>
                      <div className="text-sm text-muted-foreground">Avg Response Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{service.name}</CardTitle>
                        {getStatusBadge(service.status)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Uptime:</span>
                          <span className="font-medium ml-2">{service.uptime}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Response:</span>
                          <span className="font-medium ml-2">{service.response}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="alerts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>System Alerts & Notifications</CardTitle>
                  <CardDescription>Recent system events and status changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alerts.map((alert, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                        <div className={`mt-1 ${
                          alert.type === 'warning' ? 'text-warning' :
                          alert.type === 'success' ? 'text-success' : 'text-smart-blue'
                        }`}>
                          {alert.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> :
                           alert.type === 'success' ? <CheckCircle className="h-4 w-4" /> :
                           <Clock className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Button onClick={() => onOpenChange(false)} className="w-full">
            Close Monitor
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  // Network Performance Dialog
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-smart-blue" />
            <span>Network Performance Monitor</span>
          </DialogTitle>
          <DialogDescription>
            API response times and network connectivity statistics
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Network Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">99.2%</div>
                <div className="text-sm text-muted-foreground">Network Uptime</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">87ms</div>
                <div className="text-sm text-muted-foreground">Avg Latency</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-warning mb-1">50</div>
                <div className="text-sm text-muted-foreground">Total Errors (24h)</div>
              </CardContent>
            </Card>
          </div>

          {/* API Endpoints Performance */}
          <Card>
            <CardHeader>
              <CardTitle>API Endpoint Performance</CardTitle>
              <CardDescription>Response times and success rates for external integrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {networkMetrics.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-4 w-4 text-smart-blue" />
                      <div>
                        <p className="font-medium text-sm">{endpoint.endpoint}</p>
                        <p className="text-xs text-muted-foreground">
                          Latency: {endpoint.latency} | Success: {endpoint.success}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${
                        endpoint.errors === 0 ? 'text-success' :
                        endpoint.errors < 10 ? 'text-warning' : 'text-destructive'
                      }`}>
                        {endpoint.errors} errors
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Network Traffic */}
          <Card>
            <CardHeader>
              <CardTitle>Network Traffic Analysis</CardTitle>
              <CardDescription>Real-time data flow and bandwidth usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Network traffic visualization would display here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Button onClick={() => onOpenChange(false)} className="w-full">
          Close Network Monitor
        </Button>
      </DialogContent>
    </Dialog>
  );
};