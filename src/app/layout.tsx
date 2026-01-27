import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ecobio | Infusiones con propósito",
  description:
    "Infusiones artesanales, toppings para mate y té, y blends pensados para acompañar tu bienestar cotidiano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
        <body>
          <Header />
          <WhatsAppButton />
            {children}
          <Footer />
        </body>
    </html>
  );
}
