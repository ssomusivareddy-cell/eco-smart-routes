import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin,
  Camera,
  Calendar,
  MessageSquare,
  Recycle,
  Truck,
  AlertCircle,
  CheckCircle,
  Phone,
  MessageCircle,
  Volume2,
  Clock,
  Star,
  Award
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Citizen = () => {
  const [reportForm, setReportForm] = useState({
    type: "",
    location: "",
    description: "",
    urgency: ""
  });
  const [pickupForm, setPickupForm] = useState({
    items: "",
    date: "",
    address: "",
    contact: ""
  });
  const { toast } = useToast();

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Report Submitted",
      description: "Thank you! Your waste issue report has been submitted and will be addressed shortly.",
    });
    setReportForm({ type: "", location: "", description: "", urgency: "" });
  };

  const handlePickupRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pickup Scheduled",
      description: "Your bulk waste pickup has been scheduled. You'll receive a confirmation shortly.",
    });
    setPickupForm({ items: "", date: "", address: "", contact: "" });
  };

  const recentReports = [
    { id: "R001", type: "Overflow", location: "Main St & 5th Ave", status: "resolved", date: "2 days ago" },
    { id: "R002", type: "Missed Collection", location: "Park Avenue", status: "in-progress", date: "1 day ago" },
    { id: "R003", type: "Illegal Dumping", location: "Industrial Zone", status: "pending", date: "3 hours ago" }
  ];

  const recyclingTips = [
    {
      category: "Plastic",
      icon: <Recycle className="h-6 w-6 text-smart-blue" />,
      tips: ["Clean containers before recycling", "Check recycling numbers 1-7", "Remove caps and lids"]
    },
    {
      category: "Electronics",
      icon: <AlertCircle className="h-6 w-6 text-warning" />,
      tips: ["Never put in regular trash", "Visit certified e-waste centers", "Data wipe before disposal"]
    },
    {
      category: "Organic",
      icon: <CheckCircle className="h-6 w-6 text-success" />,
      tips: ["Compost food scraps", "Avoid meat and dairy", "Use brown and green materials"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card-gradient border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Citizen Portal</h1>
            <p className="text-muted-foreground">
              Report issues, schedule services, and learn about proper waste management
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="report" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="report">Report Issue</TabsTrigger>
            <TabsTrigger value="pickup">Schedule Pickup</TabsTrigger>
            <TabsTrigger value="education">Learn & Recycle</TabsTrigger>
            <TabsTrigger value="communication">Contact Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="report" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Report Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-warning" />
                    <span>Report Waste Issue</span>
                  </CardTitle>
                  <CardDescription>
                    Help us maintain a clean city by reporting waste management issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleReportSubmit} className="space-y-4">
                    <Select onValueChange={(value) => setReportForm({...reportForm, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="overflow">Bin Overflow</SelectItem>
                        <SelectItem value="missed">Missed Collection</SelectItem>
                        <SelectItem value="illegal">Illegal Dumping</SelectItem>
                        <SelectItem value="damaged">Damaged Bin</SelectItem>
                        <SelectItem value="other">Other Issue</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Input
                      placeholder="Location (address or landmark)"
                      value={reportForm.location}
                      onChange={(e) => setReportForm({...reportForm, location: e.target.value})}
                      required
                    />
                    
                    <Textarea
                      placeholder="Describe the issue in detail..."
                      value={reportForm.description}
                      onChange={(e) => setReportForm({...reportForm, description: e.target.value})}
                      required
                    />
                    
                    <Select onValueChange={(value) => setReportForm({...reportForm, urgency: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Can wait a few days</SelectItem>
                        <SelectItem value="medium">Medium - Should be addressed soon</SelectItem>
                        <SelectItem value="high">High - Needs immediate attention</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex space-x-2 pt-4">
                      <Button type="submit" className="flex-1 bg-hero-gradient hover:shadow-glow transition-spring">
                        Submit Report
                      </Button>
                      <Button type="button" variant="outline" size="icon">
                        <Camera className="h-4 w-4" />
                      </Button>
                      <Button type="button" variant="outline" size="icon">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Recent Reports</CardTitle>
                  <CardDescription>
                    Track the status of your submitted reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center space-x-3">
                          <div className={`h-3 w-3 rounded-full ${
                            report.status === 'resolved' ? 'bg-success' :
                            report.status === 'in-progress' ? 'bg-warning' : 'bg-smart-blue'
                          }`} />
                          <div>
                            <p className="font-medium">{report.type}</p>
                            <p className="text-sm text-muted-foreground">{report.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium capitalize">{report.status}</p>
                          <p className="text-xs text-muted-foreground">{report.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pickup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-smart-blue" />
                  <span>Schedule Bulk Pickup</span>
                </CardTitle>
                <CardDescription>
                  Request special collection for large items or bulk waste
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePickupRequest} className="space-y-4">
                  <Textarea
                    placeholder="List items for pickup (furniture, appliances, etc.)"
                    value={pickupForm.items}
                    onChange={(e) => setPickupForm({...pickupForm, items: e.target.value})}
                    required
                  />
                  
                  <Input
                    type="date"
                    value={pickupForm.date}
                    onChange={(e) => setPickupForm({...pickupForm, date: e.target.value})}
                    required
                  />
                  
                  <Input
                    placeholder="Pickup address"
                    value={pickupForm.address}
                    onChange={(e) => setPickupForm({...pickupForm, address: e.target.value})}
                    required
                  />
                  
                  <Input
                    placeholder="Contact number"
                    value={pickupForm.contact}
                    onChange={(e) => setPickupForm({...pickupForm, contact: e.target.value})}
                    required
                  />

                  <Button type="submit" className="w-full bg-hero-gradient hover:shadow-glow transition-spring">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Pickup
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {recyclingTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      {tip.icon}
                      <span>{tip.category} Recycling</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tip.tips.map((item, idx) => (
                        <li key={idx} className="text-sm flex items-start space-x-2">
                          <Star className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>AI Recycling Guide</span>
                </CardTitle>
                <CardDescription>
                  Get personalized recycling advice powered by AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input placeholder="Ask about any item... (e.g., 'Can I recycle pizza boxes?')" className="flex-1" />
                  <Button className="bg-hero-gradient hover:shadow-glow transition-spring">
                    Ask AI
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Get instant answers about proper disposal and recycling methods
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <Card className="border-success/20 bg-success/5">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-success" />
                    <span>WhatsApp</span>
                  </CardTitle>
                  <CardDescription>
                    Quick updates and service notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Connect WhatsApp
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Available in multiple local languages
                  </p>
                </CardContent>
              </Card>

              {/* SMS */}
              <Card className="border-smart-blue/20 bg-smart-blue/5">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-smart-blue" />
                    <span>SMS Alerts</span>
                  </CardTitle>
                  <CardDescription>
                    Collection schedules and reminders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Setup SMS
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Text-based communication for all devices
                  </p>
                </CardContent>
              </Card>

              {/* Voice */}
              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Volume2 className="h-5 w-5 text-accent" />
                    <span>Voice Support</span>
                  </CardTitle>
                  <CardDescription>
                    Accessible voice-based assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Multi-language voice support available
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
                <CardDescription>
                  Ensuring waste management services are accessible to everyone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Language Support</h4>
                    <p className="text-sm text-muted-foreground">Available in local languages including Hindi, Tamil, Bengali, and more</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Visual Accessibility</h4>
                    <p className="text-sm text-muted-foreground">High contrast mode and screen reader compatibility</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Voice Commands</h4>
                    <p className="text-sm text-muted-foreground">Report issues and schedule services using voice</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Offline Support</h4>
                    <p className="text-sm text-muted-foreground">SMS-based services for areas with limited internet</p>
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

export default Citizen;