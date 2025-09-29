import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/ui/stat-card";
import { 
  Truck,
  MapPin,
  Recycle,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Settings,
  Download,
  RefreshCw
} from "lucide-react";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const stats = [
    {
      title: "Active Collection Routes",
      value: "24",
      icon: <Truck className="h-4 w-4" />,
      trend: { value: 8, label: "from last week", isPositive: true },
      variant: "success" as const
    },
    {
      title: "Smart Bins Online",
      value: "1,247",
      icon: <MapPin className="h-4 w-4" />,
      trend: { value: 12, label: "from last month", isPositive: true },
      variant: "default" as const
    },
    {
      title: "Waste Collected Today",
      value: "45.2T",
      icon: <Recycle className="h-4 w-4" />,
      trend: { value: 5, label: "above average", isPositive: true },
      variant: "accent" as const
    },
    {
      title: "Efficiency Score",
      value: "94.8%",
      icon: <TrendingUp className="h-4 w-4" />,
      trend: { value: 2.3, label: "improvement", isPositive: true },
      variant: "success" as const
    }
  ];

  const alerts = [
    { id: 1, type: "warning", message: "Bin #247 at Park Ave is 95% full", time: "2 min ago" },
    { id: 2, type: "success", message: "Route optimization saved 15% fuel today", time: "1 hour ago" },
    { id: 3, type: "info", message: "Scheduled maintenance for Sector 5 bins", time: "3 hours ago" }
  ];

  const routes = [
    { id: "R001", zone: "Downtown", status: "active", efficiency: 96, trucks: 3 },
    { id: "R002", zone: "Residential East", status: "completed", efficiency: 89, trucks: 2 },
    { id: "R003", zone: "Industrial North", status: "active", efficiency: 92, trucks: 4 },
    { id: "R004", zone: "Commercial West", status: "pending", efficiency: 87, trucks: 2 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card-gradient border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Monitor and optimize city-wide waste management operations
              </p>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={handleRefreshData}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh Data
              </Button>
              <Button className="bg-hero-gradient hover:shadow-glow transition-spring">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <span>Recent Alerts</span>
                  </CardTitle>
                  <CardDescription>
                    Real-time system notifications and warnings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alerts.map((alert) => (
                      <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                        <div className={`h-2 w-2 rounded-full mt-2 ${
                          alert.type === 'warning' ? 'bg-warning' :
                          alert.type === 'success' ? 'bg-success' : 'bg-smart-blue'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span>Quick Actions</span>
                  </CardTitle>
                  <CardDescription>
                    Frequently used management tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                      <BarChart3 className="h-6 w-6" />
                      <span className="text-sm">Generate Report</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                      <MapPin className="h-6 w-6" />
                      <span className="text-sm">Route Planner</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                      <Users className="h-6 w-6" />
                      <span className="text-sm">Citizen Requests</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                      <Settings className="h-6 w-6" />
                      <span className="text-sm">System Config</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="routes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Collection Routes Status</CardTitle>
                <CardDescription>
                  Monitor active routes and optimize collection efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {routes.map((route) => (
                    <div key={route.id} className="flex items-center justify-between p-4 border rounded-lg bg-card-gradient">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className={`h-3 w-3 rounded-full ${
                            route.status === 'active' ? 'bg-success' :
                            route.status === 'completed' ? 'bg-smart-blue' : 'bg-warning'
                          }`} />
                          <span className="font-medium">{route.id}</span>
                        </div>
                        <div>
                          <p className="font-medium">{route.zone}</p>
                          <p className="text-sm text-muted-foreground">{route.trucks} trucks assigned</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{route.efficiency}% efficiency</p>
                        <p className="text-sm text-muted-foreground capitalize">{route.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Detailed insights and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Analytics charts and data visualizations will be integrated here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure system parameters and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <div className="text-center">
                    <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">System configuration options will be available here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;