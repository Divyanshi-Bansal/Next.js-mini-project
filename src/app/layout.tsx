import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title:"main layout metadata title",
//   content:"main layout metadata content",
//   discription:"main layout metadata discription"
// }

// nested layouts can override metadata defined in the parent layout.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor:"lightgray", padding:"10px"}}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{backgroundColor:"lightgray", padding:"10px"}}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
