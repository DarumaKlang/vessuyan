import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vessuyan - เว็บไซต์ดูดวง",
  description: "บริการดูดวง โหราศาสตร์ ไพ่ยิปซี และศาสตร์ตัวเลข",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
