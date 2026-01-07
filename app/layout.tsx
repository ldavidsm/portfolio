import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";
import React from "react"; 

export const metadata = {
  title: "Luis Senra Mirabal | Software Engineer",
  description: "Software Engineer Portfolio",
};


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}