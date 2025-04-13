
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Trash2, Wand2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  onImageGenerated: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageGenerated }) => {
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };
  
  const clearImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const remixImage = () => {
    if (!image) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // In a real implementation, we would call an AI service here
      // For now, we'll just add a filter to the image for demonstration
      setIsProcessing(false);
      
      // Create a canvas to apply a simple effect
      const canvas = document.createElement('canvas');
      const img = new Image();
      img.src = image;
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
          // Draw the original image
          ctx.drawImage(img, 0, 0);
          
          // Apply a simple effect (like a blue overlay)
          ctx.fillStyle = 'rgba(93, 63, 211, 0.3)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Get the new image data
          const remixedImage = canvas.toDataURL('image/jpeg');
          onImageGenerated(remixedImage);
        }
      };
    }, 2000);
  };
  
  return (
    <div className="nobi-card p-6">
      <h3 className="text-xl font-bold mb-4">Image Remix</h3>
      <p className="text-muted-foreground mb-6">
        Upload an image to remix with AI and create unique digital art for your Zora Coin
      </p>
      
      {!image ? (
        <div
          className={cn(
            "border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center transition-colors",
            isDragging ? "bg-muted/50 border-primary" : "hover:bg-muted/20"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            accept="image/*"
            className="hidden"
          />
          <Upload className="h-10 w-10 text-muted-foreground mb-4" />
          <p className="text-center text-muted-foreground mb-2">
            Drag & drop an image or click to browse
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Supports JPG, PNG and GIF up to 10MB
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt="Uploaded" 
              className="w-full h-auto object-contain"
            />
            <div className="absolute top-2 right-2">
              <Button
                variant="destructive"
                size="icon"
                onClick={clearImage}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button
            className="nobi-button-primary w-full"
            onClick={remixImage}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Sparkles className="h-5 w-5 mr-2 animate-spin" /> Processing...
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5 mr-2" /> Remix with AI
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
