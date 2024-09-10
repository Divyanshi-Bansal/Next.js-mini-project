import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <header style={{backgroundColor:"lightgoldenrodyellow", padding:"10px"}}>
          <p>Product landing Layout</p>
        </header>
        <body className={inter.className}>{children}</body>
        <footer style={{backgroundColor:"lightgoldenrodyellow", padding:"10px"}}>
          <p>Product landing Footer</p>
        </footer>
      </html>
    );
  }