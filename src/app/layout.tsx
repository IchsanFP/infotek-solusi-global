import "@/styles/global.css"
import { AnimatePresence } from "motion/react";
import { Suspense } from "react";
import {Inter, Montserrat} from 'next/font/google'
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playFair = Montserrat({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400','500','600','700','800','900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PT Infotek Solusi Global – Integrating Global Innovation for a Smarter Indonesia',
  // description: "We help businesses adapt and thrive in the digital era through innovative, scalable, and client-focused technology solutions.",
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
        <ToastContainer position="top-right" autoClose={3000}/>
        <Suspense>
            <AnimatePresence initial={false} mode="wait">
            {children}
            </AnimatePresence>
        </Suspense>
      </body>
    </html>
  );
}
