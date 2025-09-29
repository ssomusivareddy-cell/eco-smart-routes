import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Volume2, Languages, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VoiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VoiceDialog = ({ open, onOpenChange }: VoiceDialogProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const { toast } = useToast();

  const languages = [
    { code: "en", name: "English", phone: "+91 1800-WASTE-EN" },
    { code: "hi", name: "Hindi", phone: "+91 1800-WASTE-HI" },
    { code: "ta", name: "Tamil", phone: "+91 1800-WASTE-TA" },
    { code: "te", name: "Telugu", phone: "+91 1800-WASTE-TE" },
    { code: "bn", name: "Bengali", phone: "+91 1800-WASTE-BN" },
    { code: "mr", name: "Marathi", phone: "+91 1800-WASTE-MR" }
  ];

  const handleCall = () => {
    const selectedLang = languages.find(lang => lang.code === selectedLanguage);
    if (!selectedLang) {
      toast({
        title: "Language Required",
        description: "Please select your preferred language for voice support.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Initiating Call",
      description: `Connecting to ${selectedLang.name} support at ${selectedLang.phone}`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5 text-accent" />
            <span>Voice Support Hotline</span>
          </DialogTitle>
          <DialogDescription>
            Get immediate voice assistance in your preferred language
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-3 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Service Hours & Information
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Emergency Support:</span>
                <span className="font-medium text-success">24/7 Available</span>
              </div>
              <div className="flex justify-between">
                <span>General Inquiries:</span>
                <span className="font-medium">6 AM - 10 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Average Wait Time:</span>
                <span className="font-medium">< 2 minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Voice Recognition:</span>
                <span className="font-medium">AI-Powered</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center">
              <Languages className="h-4 w-4 mr-2" />
              Select Language
            </label>
            <Select onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your preferred language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name} - {lang.phone}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-accent/10 border border-accent/20 p-3 rounded-lg">
            <h5 className="font-medium text-sm mb-2">Voice Services Available:</h5>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Report waste collection issues</li>
              <li>• Schedule bulk pickup services</li>
              <li>• Get recycling guidance</li>
              <li>• Emergency waste overflow reports</li>
              <li>• Route schedule inquiries</li>
              <li>• Accessibility support</li>
            </ul>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleCall} className="flex-1 bg-hero-gradient hover:shadow-glow transition-spring">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};