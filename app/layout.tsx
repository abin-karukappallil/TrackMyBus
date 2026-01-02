import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TrackMyBus",
  description: "Track Your Bus!",
};
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
         <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
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

