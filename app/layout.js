import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Transition from "./transition";
import Header from "./components/Header";
import { Providers } from "./providers";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khaas Din",
  description: "Shubhkaamnaaye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
        <Transition>
        
        <Providers>
        {children}
        <Navbar />
        </Providers>
        
        </Transition>
       
        </body>
    </html>
  );
}
