
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import AiAgent from '@/components/create/AiAgent';
import ImageUploader from '@/components/create/ImageUploader';
import TextToImage from '@/components/create/TextToImage';
import CoinPreview from '@/components/create/CoinPreview';

const Create = () => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
  const handleImageGenerated = (imageUrl: string) => {
    setGeneratedImage(imageUrl);
    // Scroll to the preview section
    setTimeout(() => {
      document.getElementById('preview-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  const clearGeneratedImage = () => {
    setGeneratedImage(null);
  };

  return (
    <MainLayout>
      <div className="nobi-content-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Create with Nobi AI</h1>
          <p className="text-xl text-muted-foreground">
            Get personalized content ideas, remix your images with AI, and mint your
            creations as Zora Coins
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">AI Creator Assistant</h2>
            <p className="text-muted-foreground mb-6">
              Chat with our AI to discover content ideas tailored to your creative style and audience
            </p>
            <AiAgent />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Create Your Content</h2>
              <p className="text-muted-foreground mb-6">
                Upload images to remix or generate new content with our AI tools
              </p>
            </div>
            
            <ImageUploader onImageGenerated={handleImageGenerated} />
            <TextToImage onImageGenerated={handleImageGenerated} />
          </div>
        </div>
        
        {generatedImage && (
          <div id="preview-section" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Preview & Mint</h2>
            <p className="text-muted-foreground mb-6">
              Review your creation and mint it as a Zora Coin on Base
            </p>
            <CoinPreview 
              image={generatedImage}
              onClear={clearGeneratedImage}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Create;
