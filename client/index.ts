import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http } from 'viem'; 
import { privateKeyToAccount } from 'viem/accounts';
import { baseSepolia } from 'viem/chains';
import { abi } from './AdBase';

dotenv.config();

// Initialise account
const account = privateKeyToAccount(`0x${process.env.WALLET_PRIVATE_KEY}`);

const walletClient = createWalletClient({
  chain: baseSepolia,
  account,
  transport: http('https://sepolia.base.org'), 
});

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http('https://sepolia.base.org'),  // Correctly pass the URL to http
});

// Create an async function to handle the contract call
const createCampaign = async () => {
  try {
    const result = await walletClient.writeContract({
      abi: abi,
      address: "0x7ce9B26204108da8De59b3F43c98C06b732cF19e",
      functionName: "createCampaign",
    });
    console.log('Campaign created successfully:', result);
  } catch (error) {
    console.error('Error creating campaign:', error);
  }
};

// Call the async function
createCampaign();
