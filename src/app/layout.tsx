import "@/styles/global.css"
import { AnimatePresence } from "motion/react";
import { StoreProvider } from "@/providers/StoreProvider";
import { Suspense } from "react";
import {Inter, Playfair_Display} from 'next/font/google'
import { Metadata } from "next";

  const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playFair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400','500','600','700','800','900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Heliogic - Transforming Ideas into Digital Solutions',
  description: "We help businesses adapt and thrive in the digital era through innovative, scalable, and client-focused technology solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${playFair.className} antialiased`}
      >
        <Suspense>
          <StoreProvider>
            <AnimatePresence initial={false} mode="wait">
            {children}
            </AnimatePresence>
          </StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
