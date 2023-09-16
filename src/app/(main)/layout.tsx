import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookmark Manager",
  description: "Created by Mir Saheb Ali",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
