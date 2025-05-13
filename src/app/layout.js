import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingWrapper from "./components/LoadingWrapper";
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Cisangkan',
  description: 'Company Profile',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LoadingWrapper>
          <Navbar />
          {children}
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}