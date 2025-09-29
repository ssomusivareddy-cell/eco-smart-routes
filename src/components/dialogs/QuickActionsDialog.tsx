import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, MapPin, Users, Settings, Download, Calendar, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuickActionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  action: "report" | "planner" | "requests" | "config" | null;
}

export const QuickActionsDialog = ({ open, onOpenChange, action }: QuickActionsDialogProps) => {
  const [reportType, setReportType] = useState("");
  const [dateRange, setDateRange] = useState("");
  const { toast } = useToast();

  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: `${reportType} report for ${dateRange} has been generated successfully.`,
    });
  };

  const citizenRequests = [
    { id: "CR001", type: "Bin Overflow", location: "Park Avenue", priority: "High", date: "2 hours ago" },
    { id: "CR002", type: "Missed Collection", location: "Downtown Plaza", priority: "Medium", date: "4 hours ago" },
    { id: "CR003", type: "Bulk Pickup", location: "Residential East", priority: "Low", date: "1 day ago" },
    { id: "CR004", type: "Illegal Dumping", location: "Industrial Zone", priority: "High", date: "6 hours ago" }
  ];

  const renderContent = () => {
    switch (action) {
      case "report":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Report Type</label>
                <Select onValueChange={setReportType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="efficiency">Efficiency Report</SelectItem>
                    <SelectItem value="waste-analysis">Waste Analysis</SelectItem>
                    <SelectItem value="route-optimization">Route Optimization</SelectItem>
                    <SelectItem value="citizen-feedback">Citizen Feedback</SelectItem>
                    <SelectItem value="cost-analysis">Cost Analysis</SelectItem>
                    <SelectItem value="environmental-impact">Environmental Impact</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Date Range</label>
                <Select onValueChange={setDateRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-week">Last Week</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="last-quarter">Last Quarter</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Report Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automated data analysis and insights</li>
                <li>• Interactive charts and visualizations</li>
                <li>• Export to PDF, Excel, or PowerPoint</li>
                <li>• Scheduled report delivery via email</li>
                <li>• Comparative analysis with previous periods</li>
              </ul>
            </div>
            <Button onClick={handleGenerateReport} className="w-full bg-hero-gradient hover:shadow-glow transition-spring">
              <Download className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        );
      
      case "planner":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Route Planner</CardTitle>
                <CardDescription>Optimize collection routes using machine learning algorithms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Zone Selection</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select zones" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Zones</SelectItem>
                        <SelectItem value="downtown">Downtown</SelectItem>
                        <SelectItem value="residential">Residential Areas</SelectItem>
                        <SelectItem value="commercial">Commercial Districts</SelectItem>
                        <SelectItem value="industrial">Industrial Zones</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Optimization Priority</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fuel">Fuel Efficiency</SelectItem>
                        <SelectItem value="time">Time Optimization</SelectItem>
                        <SelectItem value="distance">Distance Minimization</SelectItem>
                        <SelectItem value="environmental">Environmental Impact</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="bg-smart-blue/10 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-2">Current Route Performance:</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Efficiency: <span className="font-medium">94.8%</span></div>
                    <div>Fuel Saved: <span className="font-medium">23%</span></div>
                    <div>Time Reduced: <span className="font-medium">18 min</span></div>
                    <div>CO₂ Reduced: <span className="font-medium">15%</span></div>
                  </div>
                </div>
                <Button className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Optimize Routes
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "requests":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Citizen Requests Management</h3>
              <span className="text-sm text-muted-foreground">{citizenRequests.length} pending requests</span>
            </div>
            <div className="space-y-3">
              {citizenRequests.map((request) => (
                <Card key={request.id} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`h-3 w-3 rounded-full ${
                          request.priority === 'High' ? 'bg-destructive' :
                          request.priority === 'Medium' ? 'bg-warning' : 'bg-success'
                        }`} />
                        <div>
                          <p className="font-medium">{request.type}</p>
                          <p className="text-sm text-muted-foreground">{request.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{request.id}</p>
                        <p className="text-xs text-muted-foreground">{request.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button className="w-full" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              View All Requests
            </Button>
          </div>
        );

      case "config":
        return (
          <div className="space-y-4">
            <Tabs defaultValue="general" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">System Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Collection Schedule</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Daily at 6:00 AM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily-6">Daily at 6:00 AM</SelectItem>
                          <SelectItem value="daily-8">Daily at 8:00 AM</SelectItem>
                          <SelectItem value="alternate">Alternate Days</SelectItem>
                          <SelectItem value="custom">Custom Schedule</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Default Language</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="English" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="hi">Hindi</SelectItem>
                          <SelectItem value="ta">Tamil</SelectItem>
                          <SelectItem value="te">Telugu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="alerts" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Alert Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm">Bin Overflow Alerts</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm">Route Delays</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm">Emergency Notifications</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="performance" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Performance Thresholds</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Minimum Efficiency (%)</label>
                      <Input defaultValue="85" type="number" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Max Response Time (minutes)</label>
                      <Input defaultValue="15" type="number" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        );

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (action) {
      case "report": return "Generate Report";
      case "planner": return "Route Planner";
      case "requests": return "Citizen Requests";
      case "config": return "System Configuration";
      default: return "Quick Actions";
    }
  };

  const getIcon = () => {
    switch (action) {
      case "report": return <BarChart3 className="h-5 w-5 text-primary" />;
      case "planner": return <MapPin className="h-5 w-5 text-smart-blue" />;
      case "requests": return <Users className="h-5 w-5 text-success" />;
      case "config": return <Settings className="h-5 w-5 text-accent" />;
      default: return <Settings className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            {getIcon()}
            <span>{getTitle()}</span>
          </DialogTitle>
          <DialogDescription>
            {action === "report" && "Generate comprehensive reports and analytics"}
            {action === "planner" && "AI-powered route optimization and planning"}
            {action === "requests" && "Manage and respond to citizen requests"}
            {action === "config" && "Configure system settings and parameters"}
          </DialogDescription>
        </DialogHeader>
        
        {renderContent()}
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};