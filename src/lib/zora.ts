
// Import from @zoralabs/coins-sdk with named import
import { Coins } from "@zoralabs/coins-sdk";
import { createWalletClient, http } from "viem";
import { base } from "viem/chains";

interface CreateZoraCoinParams {
  name: string;
  description: string;
  image: string;
  price: number;
  maxSupply: number;
}

interface CreateZoraCoinResult {
  transactionHash: string;
  contractAddress?: string;
}

export async function createZoraCoin({
  name,
  description,
  image,
  price,
  maxSupply,
}: CreateZoraCoinParams): Promise<CreateZoraCoinResult> {
  try {
    console.log("Creating Zora coin:", { name, description, image, price, maxSupply });
    
    // Check if wallet is connected
    // @ts-ignore - Window ethereum property
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error("No wallet detected. Please install MetaMask or another Web3 wallet.");
    }

    try {
      // Request account access
      // @ts-ignore - Window ethereum property
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      
      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found. Please connect your wallet first.");
      }
      
      const account = accounts[0];
      console.log("Connected with account:", account);
      
      // Initialize Coins SDK with the correct instantiation
      const coins = new Coins({
        chain: base,
        clientProvider: {
          transport: http()
        },
        address: account
      });
      
      // In a production app, you would upload the image to IPFS first
      // For this implementation, we'll assume the image is already a valid URI
      
      // Create the coin with the provided parameters
      const createParams = {
        name,
        description,
        imageURI: image,
        maxSupply,
        mintPrice: BigInt(Math.floor(price * 10 ** 18)) // Convert to wei
      };
      
      console.log("Creating coin with params:", createParams);
      
      // Create transaction
      const tx = await coins.create(createParams);
      
      console.log("Transaction created:", tx);
      
      return {
        transactionHash: tx.hash,
        // The contract address will be available after the transaction confirms
        // For now, we return just the transaction hash
      };
    } catch (error) {
      console.error("Error in Zora coin creation:", error);
      throw error;
    }
  } catch (error) {
    console.error("Error creating Zora coin:", error);
    throw error;
  }
}
