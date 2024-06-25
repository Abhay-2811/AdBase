import dotenv from 'dotenv';
dotenv.config();

import { createPublicClient, createWalletClient, http } from 'viem'; 
import { privateKeyToAccount } from 'viem/accounts';
import { baseSepolia } from 'viem/chains';
import { abi } from './data.json';

dotenv.config();

// Initialize account
// const account = privateKeyToAccount(`0x${process.env.WALLET_PRIVATE_KEY}`);
const account = privateKeyToAccount('07a4034808af37281563389f68fd337f75c5a254c6e10e48428a637dfaa04a21');

const walletClient = createWalletClient({
  chain: baseSepolia,
  account,
  transport: http('https://sepolia.base.org'), 
});

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http('https://sepolia.base.org'),
});

// Create an async function to handle the contract call
const createCampaign = async ({ region, campaignName, spendingLimit, adCIDs }) => {
  try {
    const result = await walletClient.writeContract({
      abi: abi,
      address: "0x7ce9B26204108da8De59b3F43c98C06b732cF19e",
      functionName: "createCampaign",
      args: [region, campaignName, spendingLimit, adCIDs],
      value: spendingLimit // If the function requires sending ether, specify the value
    });
    console.log('Campaign created successfully:', result);
  } catch (error) {
    console.error('Error creating campaign:', error);
  }
};

export { createCampaign };
