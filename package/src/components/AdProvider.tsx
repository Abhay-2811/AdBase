import React, { ReactNode } from "react";

export const AdProvider: React.FC<{ region: string; children: ReactNode }> = ({
  region,
  children,
}) => {
  return <div>AdProvider</div>;
};
