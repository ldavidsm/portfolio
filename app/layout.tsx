// app/layout.tsx o app/layout.jsx
"use client";

import "./globals.css";
import "../i18n"; // importa la configuración de i18next
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={i18n.language || "es"}>
      <body className="bg-black text-white">
        {/* I18next Provider */}
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
