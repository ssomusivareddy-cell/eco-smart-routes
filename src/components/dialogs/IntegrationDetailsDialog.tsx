import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Database, MessageSquare, Slack, Download, Upload, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface IntegrationDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  integration: "gemini" | "mongodb" | "twilio" | "slack" | "export" | "sync" | null;
}

export const IntegrationDetailsDialog = ({ open, onOpenChange, integration }: IntegrationDetailsDialogProps) => {
  const [apiKey, setApiKey] = useState("");
  const [isConfiguring, setIsConfiguring] = useState(false);
  const { toast } = useToast();

  const handleConfigure = () => {
    setIsConfiguring(true);
    setTimeout(() => {
      setIsConfiguring(false);
      toast({
        title: "Integration Configured",
        description: `${getIntegrationName()} has been successfully configured and connected.`,
      });
      onOpenChange(false);
    }, 2000);
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "System configuration export has been initiated. Download will start shortly.",
    });
    // Simulate file download
    const configData = {
      timestamp: new Date().toISOString(),
      version: "2.1.4",
      database: { type: "PostgreSQL", version: "13.8" },
      apis: {
        googleMaps: { status: "connected", version: "v3" },
        openAI: { status: "connected", model: "gpt-4" },
        whatsapp: { status: "pending" }
      },
      iotDevices: { total: 1247, online: 1205, offline: 42 },
      routes: { active: 24, optimized: true },
      settings: {
        language: "multi",
        accessibility: true,
        notifications: "enabled"
      }
    };
    
    const blob = new Blob([JSON.stringify(configData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'waste-management-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSyncAll = () => {
    toast({
      title: "Sync Initiated",
      description: "Synchronizing all systems and data. This may take a few minutes.",
    });
  };

  const getIntegrationName = () => {
    switch (integration) {
      case "gemini": return "Google Gemini AI";
      case "mongodb": return "MongoDB Database";
      case "twilio": return "Twilio SMS";
      case "slack": return "Slack Notifications";
      case "export": return "Export Configuration";
      case "sync": return "Sync All Systems";
      default: return "Integration";
    }
  };

  const getIntegrationIcon = () => {
    switch (integration) {
      case "gemini": return <Brain className="h-5 w-5 text-primary" />;
      case "mongodb": return <Database className="h-5 w-5 text-success" />;
      case "twilio": return <MessageSquare className="h-5 w-5 text-smart-blue" />;
      case "slack": return <Slack className="h-5 w-5 text-accent" />;
      case "export": return <Download className="h-5 w-5 text-warning" />;
      case "sync": return <Upload className="h-5 w-5 text-primary" />;
      default: return <Zap className="h-5 w-5 text-primary" />;
    }
  };

  const renderIntegrationContent = () => {
    switch (integration) {
      case "gemini":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Google Gemini AI Integration</span>
                </CardTitle>
                <CardDescription>
                  Advanced AI capabilities for citizen interactions and predictive analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-sm mb-2">Capabilities:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Natural language processing for citizen queries</li>
                      <li>• Multilingual support (12 languages)</li>
                      <li>• Intelligent waste categorization</li>
                      <li>• Predictive route optimization</li>
                      <li>• Automated report generation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-2">Performance Metrics:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Query accuracy: 97.3%</li>
                      <li>• Response time: &lt;2 seconds</li>
                      <li>• Language detection: 99.1%</li>
                      <li>• Context understanding: 94.8%</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Gemini API Key</label>
                  <Input
                    type="password"
                    placeholder="Enter your Google Gemini API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                </div>
                <Badge variant="default" className="bg-success">Connected & Active</Badge>
              </CardContent>
            </Card>
          </div>
        );

      case "mongodb":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5 text-success" />
                  <span>MongoDB Database Integration</span>
                </CardTitle>
                <CardDescription>
                  Scalable NoSQL database for waste management data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-sm mb-2">Collections:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• waste_bins (1,247 documents)</li>
                      <li>• collection_routes (89 documents)</li>
                      <li>• citizen_reports (5,432 documents)</li>
                      <li>• vehicle_tracking (45 documents)</li>
                      <li>• analytics_data (12,890 documents)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-2">Performance:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Database size: 2.3 GB</li>
                      <li>• Query response: <50ms</li>
                      <li>• Uptime: 99.9%</li>
                      <li>• Backup frequency: Daily</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-success/10 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    MongoDB Atlas cluster configured with auto-scaling, automated backups, 
                    and real-time analytics for optimal performance.
                  </p>
                </div>
                <Badge variant="default" className="bg-success">Connected & Optimized</Badge>
              </CardContent>
            </Card>
          </div>
        );

      case "twilio":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-smart-blue" />
                  <span>Twilio SMS Integration</span>
                </CardTitle>
                <CardDescription>
                  Reliable SMS communications for citizen notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-sm mb-2">SMS Templates:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Collection schedule updates</li>
                      <li>• Emergency overflow alerts</li>
                      <li>• Pickup confirmations</li>
                      <li>• Route change notifications</li>
                      <li>• Service disruption alerts</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-2">Statistics (This Month):</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Messages sent: 34,567</li>
                      <li>• Delivery rate: 98.7%</li>
                      <li>• Response rate: 23.4%</li>
                      <li>• Languages: 8 supported</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-smart-blue/10 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-2">Sample SMS Messages:</h5>
                  <div className="space-y-2 text-xs">
                    <div className="bg-background p-2 rounded border">
                      "🗑️ Reminder: Waste collection in your area tomorrow at 6 AM. Please keep bins outside. -City Waste Mgmt"
                    </div>
                    <div className="bg-background p-2 rounded border">
                      "⚠️ ALERT: Bin overflow reported at Park Ave. Collection team dispatched. ETA: 30 mins. Report ID: #WR2024"
                    </div>
                  </div>
                </div>
                <Badge variant="default" className="bg-smart-blue text-white">Active & Delivering</Badge>
              </CardContent>
            </Card>
          </div>
        );

      case "slack":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Slack className="h-5 w-5 text-accent" />
                  <span>Slack Integration</span>
                </CardTitle>
                <CardDescription>
                  Team notifications and operational alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-sm mb-2">Channels:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• #waste-alerts (Critical issues)</li>
                      <li>• #route-updates (Schedule changes)</li>
                      <li>• #citizen-feedback (User reports)</li>
                      <li>• #maintenance (Equipment status)</li>
                      <li>• #analytics (Daily reports)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-2">Automation:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Emergency alert broadcasting</li>
                      <li>• Daily performance summaries</li>
                      <li>• Maintenance reminders</li>
                      <li>• Citizen complaint routing</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Slack Webhook URL</label>
                  <Input
                    type="password"
                    placeholder="https://hooks.slack.com/services/..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                </div>
                <Badge variant="outline">Ready to Connect</Badge>
              </CardContent>
            </Card>
          </div>
        );

      case "export":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="h-5 w-5 text-warning" />
                  <span>Export Configuration</span>
                </CardTitle>
                <CardDescription>
                  Download complete system configuration and settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h5 className="font-medium text-sm mb-3">Export Package Includes:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• System configuration settings</li>
                    <li>• API integration parameters</li>
                    <li>• IoT device configurations</li>
                    <li>• Route optimization settings</li>
                    <li>• User access permissions</li>
                    <li>• Notification templates</li>
                    <li>• Database schema definitions</li>
                    <li>• Security configurations</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Format: <span className="font-medium">JSON</span></div>
                  <div>Size: <span className="font-medium">~2.3 MB</span></div>
                  <div>Encryption: <span className="font-medium">AES-256</span></div>
                  <div>Validity: <span className="font-medium">30 days</span></div>
                </div>
                <Button onClick={handleExport} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Configuration
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case "sync":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-primary" />
                  <span>Sync All Systems</span>
                </CardTitle>
                <CardDescription>
                  Synchronize data across all integrated systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h5 className="font-medium text-sm mb-3">Sync Operations:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• IoT sensor data synchronization</li>
                    <li>• Route optimization updates</li>
                    <li>• Citizen report processing</li>
                    <li>• Analytics data refresh</li>
                    <li>• Database consistency check</li>
                    <li>• API connection validation</li>
                    <li>• Cache refresh and optimization</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Last Sync:</strong> 2 hours ago<br/>
                    <strong>Status:</strong> All systems synchronized<br/>
                    <strong>Next Auto-Sync:</strong> In 4 hours<br/>
                    <strong>Sync Duration:</strong> ~3-5 minutes
                  </p>
                </div>
                <Button onClick={handleSyncAll} className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Start Full Synchronization
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  if (integration === "export" || integration === "sync") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {getIntegrationIcon()}
              <span>{getIntegrationName()}</span>
            </DialogTitle>
          </DialogHeader>
          {renderIntegrationContent()}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            {getIntegrationIcon()}
            <span>{getIntegrationName()}</span>
          </DialogTitle>
          <DialogDescription>
            Configure and manage {getIntegrationName().toLowerCase()} integration
          </DialogDescription>
        </DialogHeader>
        
        {renderIntegrationContent()}
        
        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          {integration !== "export" && integration !== "sync" && (
            <Button 
              onClick={handleConfigure}
              disabled={isConfiguring}
              className="bg-hero-gradient hover:shadow-glow transition-spring"
            >
              {isConfiguring ? "Configuring..." : "Save Configuration"}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};