import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause, Square, Volume2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AudioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AudioDialog = ({ open, onOpenChange }: AudioDialogProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const audioGuides = [
    {
      title: "Waste Segregation Guide",
      duration: "2:34",
      description: "Learn how to properly separate waste at home",
      file: "waste-segregation.mp3"
    },
    {
      title: "Collection Schedule",
      duration: "1:45", 
      description: "Understanding your area's collection timings",
      file: "collection-schedule.mp3"
    },
    {
      title: "Emergency Procedures",
      duration: "3:12",
      description: "What to do during waste emergencies",
      file: "emergency-procedures.mp3"
    },
    {
      title: "Recycling Guidelines",
      duration: "4:28",
      description: "Complete guide to recycling different materials",
      file: "recycling-guide.mp3"
    }
  ];

  const handlePlay = (audioFile: string) => {
    // Simulate audio playback
    setIsPlaying(true);
    toast({
      title: "Playing Audio Guide",
      description: `Now playing: ${audioFile}`,
    });
    
    // Simulate audio ending after 3 seconds for demo
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5 text-accent" />
            <span>Audio Guides & Instructions</span>
          </DialogTitle>
          <DialogDescription>
            Listen to comprehensive waste management guides in multiple languages
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {audioGuides.map((guide, index) => (
              <div key={index} className="border rounded-lg p-4 bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium">{guide.title}</h4>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">Duration: {guide.duration}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handlePlay(guide.file)}
                      disabled={isPlaying}
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    
                    <Button size="sm" variant="outline" onClick={() => {
                      toast({
                        title: "Download Started",
                        description: `Downloading ${guide.title}`,
                      });
                    }}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {isPlaying && (
                  <div className="mt-3">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000" 
                        style={{ width: "30%" }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0:45</span>
                      <span>{guide.duration}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Language Options Available:</h4>
            <div className="flex flex-wrap gap-2">
              {["English", "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati", "Punjabi"].map((lang) => (
                <span key={lang} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button onClick={handleStop} disabled={!isPlaying}>
              <Square className="h-4 w-4 mr-2" />
              Stop All Audio
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};