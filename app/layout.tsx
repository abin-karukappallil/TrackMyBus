import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TrackMyBus",
  description: "Track Your Bus!",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="TrackMyBus" href="/favicon" />
        <title>TrackMyBus</title>
      </head>
    <body className="overflow-clip">
       <div className="sticky">
        {children}
        <BackgroundBeams/>
   </div>
    </body>
  </html>
  );
}

