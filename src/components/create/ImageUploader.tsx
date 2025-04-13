
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Trash2, Wand2, Sparkles, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import RemixOptions, { RemixStyle } from './RemixOptions';

interface ImageUploaderProps {
  onImageGenerated: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageGenerated }) => {
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<RemixStyle | null>(null);
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
        setShowOptions(true);
        setSelectedStyle(null);
      }
    };
    reader.readAsDataURL(file);
  };
  
  const clearImage = () => {
    setImage(null);
    setShowOptions(false);
    setSelectedStyle(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const applyRemix = () => {
    if (!image || !selectedStyle) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Create a canvas to apply different effects based on the selected style
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
          
          // Apply different effects based on the selected style
          switch (selectedStyle) {
            case 'cartoon':
              // Apply cartoon-like effect (simplified)
              ctx.filter = 'saturate(150%) contrast(120%) brightness(110%)';
              ctx.drawImage(img, 0, 0);
              ctx.filter = 'none';
              
              // Add edge detection (simplified cartoon look)
              ctx.lineWidth = 2;
              ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
              ctx.beginPath();
              ctx.rect(5, 5, canvas.width - 10, canvas.height - 10);
              ctx.stroke();
              break;
              
            case 'artistic':
              // Apply artistic filter
              ctx.filter = 'sepia(50%) hue-rotate(30deg) saturate(170%)';
              ctx.drawImage(img, 0, 0);
              ctx.filter = 'none';
              
              // Add subtle vignette
              const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width
              );
              gradient.addColorStop(0.7, 'rgba(0,0,0,0)');
              gradient.addColorStop(1, 'rgba(0,0,0,0.3)');
              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              break;
              
            case 'vibrant':
              // Apply vibrant color enhancement
              ctx.filter = 'contrast(130%) brightness(110%) saturate(200%)';
              ctx.drawImage(img, 0, 0);
              
              // Add color overlay
              ctx.filter = 'none';
              ctx.fillStyle = 'rgba(93, 63, 211, 0.2)';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              break;
          }
          
          // Get the remixed image
          const remixedImage = canvas.toDataURL('image/jpeg', 0.9);
          onImageGenerated(remixedImage);
          setIsProcessing(false);
          setShowOptions(false);
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
        <div className="space-y-6">
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt="Uploaded" 
              className="w-full h-auto object-contain"
            />
            <div className="absolute top-2 right-2 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 backdrop-blur-sm"
                onClick={() => setShowOptions(!showOptions)}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                className="bg-destructive/80 backdrop-blur-sm"
                onClick={clearImage}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {showOptions ? (
            <RemixOptions 
              selectedStyle={selectedStyle}
              onSelectStyle={setSelectedStyle}
              isProcessing={isProcessing}
              onApply={applyRemix}
            />
          ) : (
            <Button
              className="nobi-button-primary w-full"
              onClick={() => setShowOptions(true)}
            >
              <Wand2 className="h-5 w-5 mr-2" /> Choose Remix Style
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
