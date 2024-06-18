import React, { useState, createContext } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "./Wagmi";
import { AdWrapper } from "./AdWrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AdBaseProvider = ({ region, children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AdWrapper region={region} children={children} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default AdBaseProvider;
