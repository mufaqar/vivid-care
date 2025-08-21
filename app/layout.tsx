import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { Playfair_Display, Poppins } from "next/font/google";

// Load Playfair with CSS variable
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Care Services | Supported Living",
  description: "Compassionate care tailored to your needs, in the comfort of your own home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${poppins.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
