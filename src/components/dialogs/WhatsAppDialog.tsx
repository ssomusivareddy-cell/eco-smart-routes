import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WhatsAppDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WhatsAppDialog = ({ open, onOpenChange }: WhatsAppDialogProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { toast } = useToast();

  const handleConnect = () => {
    if (!phoneNumber) {
      toast({
        title: "Phone Number Required",
        description: "Please enter your phone number to connect WhatsApp support.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "WhatsApp Connected",
      description: `Connected to WhatsApp support. You'll receive messages at ${phoneNumber}`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-success" />
            <span>WhatsApp Support</span>
          </DialogTitle>
          <DialogDescription>
            Connect to our WhatsApp support for instant updates and assistance
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Support Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Support Number:</span>
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Available:</span>
                <span className="font-medium">24/7</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Languages:</span>
                <span className="font-medium">Hindi, English, Tamil</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Your Mobile Number</Label>
            <Input
              id="phone"
              placeholder="+91 XXXXX XXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="bg-success/10 border border-success/20 p-3 rounded-lg">
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-success mt-0.5" />
              <div className="text-sm">
                <p className="font-medium">What you'll receive:</p>
                <ul className="mt-1 text-muted-foreground">
                  <li>• Collection schedule updates</li>
                  <li>• Route change notifications</li>
                  <li>• Emergency alerts</li>
                  <li>• Direct support chat</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleConnect} className="flex-1 bg-hero-gradient hover:shadow-glow transition-spring">
              <MessageCircle className="h-4 w-4 mr-2" />
              Connect WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};