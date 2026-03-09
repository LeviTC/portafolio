import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Erick Leví | Front-End Developer",
  description: "Front-End Developer with 4+ years of experience building e-commerce platforms, ERP systems, and warehouse mobile applications. Specialized in React, Next.js, and TypeScript.",
  icons: "/icon.svg"
};

const IBM_PLEX_MONO = IBM_Plex_Mono({
  weight: [ "100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${IBM_PLEX_MONO.className}`}>
        {children}
      </body>
    </html>
  );
}
