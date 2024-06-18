"use client";

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";
import { AdProvider } from "adbase-provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdProvider>{children}</AdProvider>
      </body>
    </html>
  );
}
