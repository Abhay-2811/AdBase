import { createPublicClient, http } from 'viem';
import { baseSepolia } from 'viem/chains';
import { abi } from './data.json';

// Initialize public client
const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http('https://sepolia.base.org'),
});

// Create an async function to handle the contract call
const createCampaign = async ({ walletClient, region, campaignName, spendingLimit, adCIDs }) => {
  try {
    const result = await walletClient.writeContract({
      abi: abi,
      address: "0x7ce9B26204108da8De59b3F43c98C06b732cF19e",
      functionName: "createCampaign",
      args: [region, campaignName, spendingLimit, adCIDs],
      value: spendingLimit
    });
    console.log('Campaign created successfully:', result);
  } catch (error) {
    console.error('Error creating campaign:', error);
  }
};

export { createCampaign };
