import React, { ReactNode, createContext, useState, useContext} from "react";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { useAccount } from "wagmi";
import { BlackCreateWalletButton } from "./CreateWallet";

const AdContext = createContext();

export const AdWrapper = ({ region, dev_wallet_address, children }) => {
  const { address, isConnected } = useAccount();
  
  const context_value = {
    region,
    address,
    dev_wallet_address
  };
  const sdk = new CoinbaseWalletSDK({
    appName: "Adbase",
    appChainIds: [8453],
    appLogoUrl: "",
  });

  return (
    <div>
      {isConnected ? (
        <AdContext.Provider value={context_value}>{children}</AdContext.Provider>
      ) : (
        <div>
          <BlackCreateWalletButton />
        </div>
      )}
    </div>
  );
};

export const useAdContext = () => useContext(AdContext);

