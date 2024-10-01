import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css';
import "./globals.css";
import { Theme } from "@radix-ui/themes";


export const metadata: Metadata = {
  title: "Meteora",
  description: "E-commerce de roupas",
};

const inter = Inter({
  weight:['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
