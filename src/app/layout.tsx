import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})
export const metadata: Metadata = {
  title: "Zenspire | Terapis anda yang terpersonalisasi untuk dukungan gangguan kecemasan sosial",
  description: "Zenspire memberikan perawatan Cognitive Behavioral Therapy yang terpersonalisasi dan dukungan personal. Zenspire menyediakan ruang terapi mandiri secara komprehensif. Dapat diakses kapanpun dan dimanapun tanpa biaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
