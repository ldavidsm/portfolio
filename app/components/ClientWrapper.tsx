"use client";
import React from "react"; // Importante para usar ReactNode
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

// Definimos la interfaz para las props
interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}