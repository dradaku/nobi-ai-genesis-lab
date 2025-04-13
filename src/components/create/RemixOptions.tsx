
import React from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Wand2, Paintbrush, Image, Palette } from "lucide-react";

export type RemixStyle = 'cartoon' | 'artistic' | 'vibrant';

interface RemixOptionsProps {
  onSelectStyle: (style: RemixStyle) => void;
  selectedStyle: RemixStyle | null;
  isProcessing: boolean;
  onApply: () => void;
}

const RemixOptions: React.FC<RemixOptionsProps> = ({ 
  onSelectStyle, 
  selectedStyle, 
  isProcessing,
  onApply
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Choose a remix style</h3>
      
      <RadioGroup
        value={selectedStyle || ''}
        onValueChange={(value) => onSelectStyle(value as RemixStyle)}
        className="grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        <div className={`border rounded-lg p-4 ${selectedStyle === 'cartoon' ? 'border-primary bg-muted/20' : 'border-border'}`}>
          <RadioGroupItem value="cartoon" id="cartoon" className="sr-only" />
          <Label htmlFor="cartoon" className="flex flex-col items-center cursor-pointer space-y-2">
            <Paintbrush className="h-8 w-8 mb-2 text-primary" />
            <span className="font-medium">Cartoon</span>
            <span className="text-xs text-muted-foreground text-center">
              Transform your image into a cartoon-style illustration
            </span>
          </Label>
        </div>

        <div className={`border rounded-lg p-4 ${selectedStyle === 'artistic' ? 'border-primary bg-muted/20' : 'border-border'}`}>
          <RadioGroupItem value="artistic" id="artistic" className="sr-only" />
          <Label htmlFor="artistic" className="flex flex-col items-center cursor-pointer space-y-2">
            <Palette className="h-8 w-8 mb-2 text-primary" />
            <span className="font-medium">Artistic</span>
            <span className="text-xs text-muted-foreground text-center">
              Apply an artistic filter with enhanced colors and textures
            </span>
          </Label>
        </div>

        <div className={`border rounded-lg p-4 ${selectedStyle === 'vibrant' ? 'border-primary bg-muted/20' : 'border-border'}`}>
          <RadioGroupItem value="vibrant" id="vibrant" className="sr-only" />
          <Label htmlFor="vibrant" className="flex flex-col items-center cursor-pointer space-y-2">
            <Wand2 className="h-8 w-8 mb-2 text-primary" />
            <span className="font-medium">Vibrant</span>
            <span className="text-xs text-muted-foreground text-center">
              Enhance your image with vibrant colors and dynamic contrast
            </span>
          </Label>
        </div>
      </RadioGroup>
      
      <Button
        className="nobi-button-primary w-full mt-4"
        onClick={onApply}
        disabled={isProcessing || !selectedStyle}
      >
        {isProcessing ? (
          <>Processing...</>
        ) : (
          <>Apply {selectedStyle} style</>
        )}
      </Button>
    </div>
  );
};

export default RemixOptions;
