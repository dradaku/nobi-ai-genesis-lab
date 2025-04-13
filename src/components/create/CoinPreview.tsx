
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Coins,
  Loader2,
  CheckCircle,
  ArrowRight,
  X,
  Save,
  Share,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";
import { createZoraCoin } from "@/lib/zora";

interface CoinPreviewProps {
  image: string | null;
  onClear: () => void;
}

const CoinPreview: React.FC<CoinPreviewProps> = ({ image, onClear }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0.01');
  const [quantity, setQuantity] = useState('100');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  
  const handleMint = async () => {
    if (!title || !description || !price || !quantity) {
      toast.error("Please fill all the fields");
      return;
    }
    
    if (!image) {
      toast.error("Image is required");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Create Zora coin with the SDK
      const result = await createZoraCoin({
        name: title,
        description,
        image: image,
        price: parseFloat(price),
        maxSupply: parseInt(quantity),
      });

      setTransactionHash(result.transactionHash);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Your Zora Coin transaction has been submitted successfully!");
    } catch (error) {
      console.error("Error creating coin:", error);
      setError(error instanceof Error ? error.message : "Failed to create coin");
      toast.error("Failed to create coin. Please try again.");
      setIsSubmitting(false);
    }
  };
  
  const handleNewCoin = () => {
    setIsSuccess(false);
    onClear();
    setTitle('');
    setDescription('');
    setPrice('0.01');
    setQuantity('100');
    setTransactionHash(null);
    setError(null);
  };

  const viewOnExplorer = () => {
    if (transactionHash) {
      window.open(`https://base.blockscout.com/tx/${transactionHash}`, '_blank');
    }
  };

  return (
    <div className="nobi-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Your Zora Coin</h3>
        <Button variant="outline" size="icon" onClick={onClear}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      {!isSuccess ? (
        <>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1">
              {image && (
                <div className="rounded-lg overflow-hidden aspect-square">
                  <img
                    src={image}
                    alt="Generated Coin"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Coin Title
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="My Amazing Creation"
                  className="nobi-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="A unique digital creation..."
                  className="nobi-input"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Price (ETH)
                  </label>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    min="0.001"
                    step="0.001"
                    className="nobi-input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Quantity
                  </label>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    step="1"
                    className="nobi-input"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
          
          <Button
            className="nobi-button-primary w-full"
            disabled={isSubmitting}
            onClick={handleMint}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Creating Coin...
              </>
            ) : (
              <>
                <Coins className="h-5 w-5 mr-2" /> Create Zora Coin
              </>
            )}
          </Button>
        </>
      ) : (
        <div className="flex flex-col items-center text-center py-8">
          <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          
          <h3 className="text-xl font-bold mb-2">
            Transaction Submitted!
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Your transaction to mint a Zora Coin on Base has been submitted.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
            <Button 
              className="flex gap-2 items-center justify-center"
              onClick={viewOnExplorer}
            >
              <Save className="h-5 w-5" /> View on Explorer
            </Button>
            
            <Button variant="outline" className="flex gap-2 items-center justify-center">
              <Share className="h-5 w-5" /> Share
            </Button>
            
            <Button 
              className="nobi-button-primary col-span-1 md:col-span-2"
              onClick={handleNewCoin}
            >
              Create Another Coin <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinPreview;
