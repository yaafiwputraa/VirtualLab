"use client"; // Tambahkan ini di baris pertama

import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../style/globals.css"; 

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Dapatkan path yang sedang diakses

  // Tentukan apakah perlu menampilkan Navbar dan Footer berdasarkan path
  const hideNavbarAndFooter = pathname === '/signup' || pathname === '/login';

  return (
    <html lang="en">
      <body>
        {/* Tampilkan Navbar hanya jika path bukan /signup atau /login */}
        {!hideNavbarAndFooter && <Navbar />}
        
        <main>{children}</main>
        
        {/* Tampilkan Footer hanya jika path bukan /signup atau /login */}
        {!hideNavbarAndFooter && <Footer id="contact" />}
      </body>
    </html>
  );
}
