
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

interface TextToImageProps {
  onImageGenerated: (imageUrl: string) => void;
}

const TextToImage: React.FC<TextToImageProps> = ({ onImageGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const generateImage = () => {
    if (prompt.trim() === '') return;
    
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // In a real implementation, we would call an AI service here
      // For now, we'll generate a colorful gradient for demonstration
      setIsGenerating(false);
      
      // Create a canvas with a gradient based on the text
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Create a gradient based on the prompt's length and content
        const hash = prompt.split('').reduce((acc, char) => {
          return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);
        
        // Generate two colors based on the hash
        const color1 = `hsl(${hash % 360}, 80%, 60%)`;
        const color2 = `hsl(${(hash + 180) % 360}, 80%, 60%)`;
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add some text from the prompt
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = 'bold 32px Montserrat';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Break prompt into lines
        const words = prompt.split(' ');
        let line = '';
        let lines = [];
        
        for (const word of words) {
          const testLine = line + word + ' ';
          if (ctx.measureText(testLine).width > canvas.width - 40) {
            lines.push(line);
            line = word + ' ';
          } else {
            line = testLine;
          }
        }
        lines.push(line);
        
        // Draw each line
        lines.forEach((line, i) => {
          ctx.fillText(
            line, 
            canvas.width / 2, 
            canvas.height / 2 - 16 * (lines.length - 1) + i * 40
          );
        });
        
        // Get the generated image
        const generatedImage = canvas.toDataURL('image/png');
        onImageGenerated(generatedImage);
      }
    }, 2000);
  };
  
  return (
    <div className="nobi-card p-6">
      <h3 className="text-xl font-bold mb-4">Text to Coin</h3>
      <p className="text-muted-foreground mb-6">
        Don't have an image? Say what's on your mind, and our AI will generate it a cool text image for you
      </p>
      
      <div className="space-y-4">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to create..."
          className="min-h-[120px]"
        />
        
        <Button
          onClick={generateImage}
          disabled={prompt.trim() === '' || isGenerating}
          className="nobi-button-primary w-full"
        >
          {isGenerating ? (
            <>
              <Sparkles className="h-5 w-5 mr-2 animate-spin" /> Generating...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-2" /> Generate Image
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TextToImage;
