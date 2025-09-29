import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Accessibility as AccessibilityIcon,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Type,
  Palette,
  Smartphone,
  Globe,
  Users,
  MessageCircle,
  Phone,
  Headphones
} from "lucide-react";

const Accessibility = () => {
  const [settings, setSettings] = useState({
    highContrast: false,
    fontSize: [16],
    voiceEnabled: false,
    screenReader: false,
    language: "en",
    colorBlindMode: false,
    reducedMotion: false,
    keyboardNav: true
  });

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिन्दी" },
    { code: "ta", name: "Tamil", native: "தமிழ்" },
    { code: "bn", name: "Bengali", native: "বাংলা" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
    { code: "mr", name: "Marathi", native: "मराठी" },
    { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
    { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
    { code: "ml", name: "Malayalam", native: "മലയാളം" },
    { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" }
  ];

  const accessibilityFeatures = [
    {
      title: "Visual Accessibility",
      icon: <Eye className="h-6 w-6" />,
      features: [
        "High contrast mode for better visibility",
        "Adjustable font sizes (12px to 24px)",
        "Color blind friendly color schemes",
        "Screen reader compatibility",
        "Keyboard navigation support"
      ]
    },
    {
      title: "Audio Accessibility", 
      icon: <Volume2 className="h-6 w-6" />,
      features: [
        "Voice-based issue reporting",
        "Audio feedback for actions",
        "Text-to-speech for notifications",
        "Multi-language voice support",
        "Audio descriptions for visual content"
      ]
    },
    {
      title: "Motor Accessibility",
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        "Large touch targets (44px minimum)",
        "Voice commands for navigation",
        "Reduced motion preferences",
        "Single-handed operation support",
        "Gesture alternatives"
      ]
    },
    {
      title: "Cognitive Accessibility",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Simple, clear language",
        "Visual cues and icons",
        "Step-by-step guidance",
        "Error prevention and recovery",
        "Consistent navigation patterns"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card-gradient border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Accessibility Center</h1>
            <p className="text-muted-foreground">
              Customize your experience to make waste management services accessible for everyone
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AccessibilityIcon className="h-5 w-5 text-primary" />
                  <span>Accessibility Settings</span>
                </CardTitle>
                <CardDescription>
                  Customize the interface to meet your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Language Selection */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <label className="font-medium">Language</label>
                  </div>
                  <Select value={settings.language} onValueChange={(value) => setSettings({...settings, language: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.native} ({lang.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Font Size */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Type className="h-4 w-4 text-muted-foreground" />
                    <label className="font-medium">Font Size: {settings.fontSize[0]}px</label>
                  </div>
                  <Slider
                    value={settings.fontSize}
                    onValueChange={(value) => setSettings({...settings, fontSize: value})}
                    max={24}
                    min={12}
                    step={2}
                    className="w-full"
                  />
                </div>

                {/* Visual Options */}
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span>Visual Options</span>
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">High Contrast Mode</label>
                      <Switch
                        checked={settings.highContrast}
                        onCheckedChange={(checked) => setSettings({...settings, highContrast: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Color Blind Friendly</label>
                      <Switch
                        checked={settings.colorBlindMode}
                        onCheckedChange={(checked) => setSettings({...settings, colorBlindMode: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Reduced Motion</label>
                      <Switch
                        checked={settings.reducedMotion}
                        onCheckedChange={(checked) => setSettings({...settings, reducedMotion: checked})}
                      />
                    </div>
                  </div>
                </div>

                {/* Audio Options */}
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center space-x-2">
                    <Volume2 className="h-4 w-4 text-muted-foreground" />
                    <span>Audio & Voice</span>
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Voice Commands</label>
                      <Switch
                        checked={settings.voiceEnabled}
                        onCheckedChange={(checked) => setSettings({...settings, voiceEnabled: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Screen Reader Support</label>
                      <Switch
                        checked={settings.screenReader}
                        onCheckedChange={(checked) => setSettings({...settings, screenReader: checked})}
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-hero-gradient hover:shadow-glow transition-spring">
                  Save Accessibility Preferences
                </Button>
              </CardContent>
            </Card>

            {/* Communication Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Alternative Communication</CardTitle>
                <CardDescription>
                  Multiple ways to access waste management services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-smart-blue" />
                      <div>
                        <p className="font-medium">Voice Hotline</p>
                        <p className="text-sm text-muted-foreground">Call for assistance in any local language</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Call Now</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-success" />
                      <div>
                        <p className="font-medium">WhatsApp Support</p>
                        <p className="text-sm text-muted-foreground">Text-based assistance with voice messages</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Headphones className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">Audio Guide</p>
                        <p className="text-sm text-muted-foreground">Step-by-step voice instructions</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Listen</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Overview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
                <CardDescription>
                  Comprehensive support for users with diverse needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {accessibilityFeatures.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-md text-primary">
                          {category.icon}
                        </div>
                        <h4 className="font-semibold">{category.title}</h4>
                      </div>
                      <ul className="space-y-2 ml-11">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="border-success/20 bg-success/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AccessibilityIcon className="h-5 w-5 text-success" />
                  <span>Accessibility Standards</span>
                </CardTitle>
                <CardDescription>
                  Built with inclusive design principles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <span className="text-sm">WCAG 2.1 AA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <span className="text-sm">Section 508 Compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <span className="text-sm">Multi-language Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <span className="text-sm">Keyboard Navigation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-success" />
                    <span className="text-sm">Screen Reader Compatible</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;