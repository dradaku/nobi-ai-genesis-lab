
// Import the Coins SDK
import { createCoin } from "@zoralabs/coins-sdk";
import { createWalletClient, http } from "viem";
import { base } from "viem/chains";

interface CreateZoraCoinParams {
  name: string;
  description: string;
  image: string;
  symbol: string;
}

interface CreateZoraCoinResult {
  transactionHash: string;
  contractAddress?: string;
}

export async function createZoraCoin({
  name,
  description,
  image,
  symbol,
}: CreateZoraCoinParams): Promise<CreateZoraCoinResult> {
  try {
    console.log("Creating Zora coin:", { name, description, image, symbol });
    
    // Check if wallet is connected
    // @ts-ignore - Window ethereum property
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error("No wallet detected. Please install MetaMask or another Web3 wallet.");
    }

    try {
      // Request account access
      // @ts-ignore - Window ethereum property
      const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts",
        params: [{ eth_accounts: {} }],
        // Adding the app name that will appear in MetaMask
        jsonrpc: "2.0",
        id: 1,
        AppInfo: {
          name: "Nobi AI",
          appOrigin: window.location.origin
        }
      });
      
      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found. Please connect your wallet first.");
      }
      
      const account = accounts[0];
      console.log("Connected with account:", account);
      
      console.log("Creating coin with params:", {
        name,
        symbol,
        image
      });
      
      // Call createCoin with the required arguments according to the SDK
      const tx = await createCoin(
        {
          name,
          symbol,
          // The SDK expects the property to be called 'imageURI' not 'image'
          imageURI: image, 
        },
        {
          chain: base, // Explicitly using the Base blockchain
          clientProvider: {
            transport: http()
          },
        },
        account
      );
      
      console.log("Transaction created:", tx);
      
      return {
        transactionHash: tx.hash,
        // The contract address will be available after the transaction confirms
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
