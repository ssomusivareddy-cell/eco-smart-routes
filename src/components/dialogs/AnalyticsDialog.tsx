import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, TrendingDown, Eye, FileText, Users, MapPin } from "lucide-react";

interface AnalyticsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AnalyticsDialog = ({ open, onOpenChange }: AnalyticsDialogProps) => {
  const performanceMetrics = [
    { label: "Collection Efficiency", value: "94.8%", trend: "+2.3%", isPositive: true },
    { label: "Fuel Consumption", value: "2,340L", trend: "-15%", isPositive: true },
    { label: "Citizen Satisfaction", value: "4.7/5", trend: "+0.3", isPositive: true },
    { label: "Cost per Ton", value: "₹2,450", trend: "-8%", isPositive: true }
  ];

  const wasteAnalytics = [
    { category: "Organic Waste", percentage: 45, trend: "+3%" },
    { category: "Recyclables", percentage: 28, trend: "+7%" },
    { category: "Plastic", percentage: 18, trend: "-2%" },
    { category: "E-waste", percentage: 5, trend: "+12%" },
    { category: "Hazardous", percentage: 4, trend: "-5%" }
  ];

  const zonePerformance = [
    { zone: "Downtown", efficiency: 96, collections: 145, issues: 2 },
    { zone: "Residential East", efficiency: 92, collections: 234, issues: 5 },
    { zone: "Industrial North", efficiency: 89, collections: 89, issues: 8 },
    { zone: "Commercial West", efficiency: 94, collections: 167, issues: 3 }
  ];

  const policyRecommendations = [
    {
      title: "Increase Recycling Centers",
      description: "Data shows 23% increase in recyclable waste. Recommend 3 new centers in high-density areas.",
      priority: "High",
      impact: "Environmental"
    },
    {
      title: "Optimize Industrial Route Timing",
      description: "Industrial zone shows 15% efficiency drop during peak hours. Suggest off-peak scheduling.",
      priority: "Medium", 
      impact: "Operational"
    },
    {
      title: "Enhanced Citizen Education",
      description: "Areas with education programs show 18% better segregation. Expand to all zones.",
      priority: "High",
      impact: "Behavioral"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-accent" />
            <span>Comprehensive Analytics Dashboard</span>
          </DialogTitle>
          <DialogDescription>
            Data-driven insights for policy improvement and resource optimization
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="waste-analysis">Waste Analysis</TabsTrigger>
            <TabsTrigger value="zones">Zone Performance</TabsTrigger>
            <TabsTrigger value="policy">Policy Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                        <p className="text-lg font-bold">{metric.value}</p>
                      </div>
                      <div className={`flex items-center text-xs ${metric.isPositive ? 'text-success' : 'text-destructive'}`}>
                        {metric.isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                        {metric.trend}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Performance Trends</CardTitle>
                <CardDescription>Key operational metrics over the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Interactive performance charts would display here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="waste-analysis" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Waste Composition Analysis</CardTitle>
                  <CardDescription>Current month breakdown by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {wasteAnalytics.map((waste, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                          <span className="text-sm">{waste.category}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{waste.percentage}%</span>
                          <span className="text-xs text-success">{waste.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Seasonal Patterns</CardTitle>
                  <CardDescription>Waste generation patterns by season</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Seasonal analysis charts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="zones" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Zone-wise Performance Comparison</CardTitle>
                <CardDescription>Efficiency metrics across city zones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {zonePerformance.map((zone, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <h5 className="font-medium">{zone.zone}</h5>
                          <p className="text-sm text-muted-foreground">{zone.collections} collections this month</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{zone.efficiency}% efficiency</div>
                        <div className="text-sm text-muted-foreground">{zone.issues} issues reported</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-accent" />
                  <span>AI-Generated Policy Recommendations</span>
                </CardTitle>
                <CardDescription>
                  Data-driven suggestions for improving waste management policies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {policyRecommendations.map((rec, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium">{rec.title}</h5>
                        <div className="flex space-x-2">
                          <span className={`text-xs px-2 py-1 rounded ${
                            rec.priority === 'High' ? 'bg-destructive/20 text-destructive' : 'bg-warning/20 text-warning'
                          }`}>
                            {rec.priority} Priority
                          </span>
                          <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                            {rec.impact}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Button onClick={() => onOpenChange(false)} className="w-full">
          Close Analytics
        </Button>
      </DialogContent>
    </Dialog>
  );
};