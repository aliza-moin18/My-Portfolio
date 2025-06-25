import type { Metadata } from "next";
import jetBrains_Mono from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


const geistSans = jetBrains_Mono({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geistSans",
  weight: "100 900",
});
const geistMono = jetBrains_Mono({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geistSans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Build by Aliza Moin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}>

        <Header />  
        {children} 
        <Footer /> 
      </body>
    </html>
  );
};