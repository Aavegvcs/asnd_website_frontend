import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

import { Montserrat } from "next/font/google";
import Footer from "@/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // specify weights you want to use
});

export const metadata = {
  title: "ASND",
  description: "ASND",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
