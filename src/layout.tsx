import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header style={{backgroundColor:"lightgray", padding:"10px"}}>
        <p>Header</p>
      </header>
      <body>{children}</body>
      <footer style={{backgroundColor:"lightgray", padding:"10px"}}>
        <p>Footer</p>
      </footer>
    </html>
  );
}
