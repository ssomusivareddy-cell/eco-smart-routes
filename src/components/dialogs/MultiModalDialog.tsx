import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MessageSquare, Phone, Volume2, Smartphone, Users, Globe } from "lucide-react";

interface MultiModalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MultiModalDialog = ({ open, onOpenChange }: MultiModalDialogProps) => {
  const communicationChannels = [
    {
      name: "WhatsApp Business",
      users: "45,230",
      languages: 8,
      description: "Instant messaging with rich media support",
      features: ["Automated notifications", "Image sharing for issues", "Two-way communication", "Status updates"],
      icon: <MessageCircle className="h-5 w-5 text-success" />,
      status: "active"
    },
    {
      name: "SMS Gateway",
      users: "67,890", 
      languages: 12,
      description: "Universal text messaging for all devices",
      features: ["Emergency alerts", "Collection reminders", "Schedule changes", "Confirmation messages"],
      icon: <MessageSquare className="h-5 w-5 text-smart-blue" />,
      status: "active"
    },
    {
      name: "Voice Hotline",
      users: "12,450",
      languages: 10,
      description: "AI-powered voice assistance and human support",
      features: ["24/7 availability", "Voice commands", "Multi-language support", "Accessibility friendly"],
      icon: <Phone className="h-5 w-5 text-accent" />,
      status: "active"
    },
    {
      name: "Mobile App Push",
      users: "38,920",
      languages: 6,
      description: "Real-time notifications through mobile app",
      features: ["Location-based alerts", "Personalized content", "Offline capability", "Rich notifications"],
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      status: "active"
    }
  ];

  const accessibilityFeatures = [
    "Screen reader compatibility for visually impaired users",
    "Voice-to-text conversion for hearing impaired users", 
    "High contrast mode for better visibility",
    "Simple language options for easy understanding",
    "Picture-based communication for literacy challenges",
    "Offline SMS fallback for connectivity issues"
  ];

  const languageSupport = [
    { language: "Hindi", users: "52,340", coverage: "95%" },
    { language: "English", users: "41,230", coverage: "88%" },
    { language: "Tamil", users: "28,450", coverage: "92%" },
    { language: "Bengali", users: "19,680", coverage: "87%" },
    { language: "Telugu", users: "15,230", coverage: "89%" },
    { language: "Marathi", users: "12,890", coverage: "85%" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-success" />
            <span>Multi-Modal Communication System</span>
          </DialogTitle>
          <DialogDescription>
            Inclusive communication channels ensuring accessibility for all urban population segments
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Communication Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communicationChannels.map((channel, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-sm">
                      <div className="p-2 bg-muted rounded-lg">
                        {channel.icon}
                      </div>
                      <div>
                        <span>{channel.name}</span>
                        <div className="text-xs font-normal text-muted-foreground">
                          {channel.users} active users
                        </div>
                      </div>
                    </CardTitle>
                    <Badge variant="default" className="bg-success text-success-foreground">
                      {channel.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs">{channel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Languages:</span>
                      <span className="font-medium">{channel.languages} supported</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {channel.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Language Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Multi-Language Support</span>
              </CardTitle>
              <CardDescription>
                Comprehensive language coverage for inclusive communication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {languageSupport.map((lang, index) => (
                  <div key={index} className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{lang.language}</span>
                      <Badge variant="secondary" className="text-xs">{lang.coverage}</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">{lang.users} users</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Accessibility Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5 text-accent" />
                <span>Accessibility & Inclusion</span>
              </CardTitle>
              <CardDescription>
                Ensuring waste management services are accessible to all citizens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-sm mb-3">Accessibility Features:</h5>
                  <ul className="space-y-2">
                    {accessibilityFeatures.map((feature, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-success mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-3">Economic Inclusion:</h5>
                  <div className="space-y-3">
                    <div className="bg-success/10 p-3 rounded-lg">
                      <h6 className="text-xs font-medium mb-1">Low-Income Support</h6>
                      <p className="text-xs text-muted-foreground">
                        Free SMS services and voice calls for basic waste management needs
                      </p>
                    </div>
                    <div className="bg-smart-blue/10 p-3 rounded-lg">
                      <h6 className="text-xs font-medium mb-1">Digital Divide Bridge</h6>
                      <p className="text-xs text-muted-foreground">
                        Offline-capable features and basic phone compatibility
                      </p>
                    </div>
                  </div>
                </div>
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