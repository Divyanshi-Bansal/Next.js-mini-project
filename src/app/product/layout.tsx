import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title:"product layout metadata title",
//   content:"product layout metadata content",
//   discription:"product layout metadata discription"
// }

//page.tsx metadata overwirtes the values of metadata of layout.
// nested layouts can override metadata defined in the parent layout.

// export const metadata : Metadata = {
//   title:"layout title",
//   description:"layout desc"
// }

export const metadata : Metadata = {
  title:{
    absolute:"",
    default:"next.js tutorial - metadata title", //it will show if absolute and template title is empty.
    template:"%s | learning" //product | learning
  },
  description:"layout desc"
}

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