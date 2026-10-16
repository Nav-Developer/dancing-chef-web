import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dancing Chef",
  description: "Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeRegistry>
          {/* <Navbar /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </ThemeRegistry>
      </body>
    </html>
  );
}
