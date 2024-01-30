import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sala do Empreendedor de Barbalha",
  
  description: "A sala do empreendedor é uma iniciativa da prefeitura de Barbalha com o apoio do Sebrae/CE através de ações gratuitas voltadas para impulsionar o desenvolvimento de negócios locais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" type="image/svg+xml" href="logo-icon1.svg" />
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
