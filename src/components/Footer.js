import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">EduLab</h3>
            <p className="text-sm">
              Platform Virtual Laboratory TPB ITB yang dirancang untuk mendukung pembelajaran praktikum digital yang interaktif dan inovatif.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-white transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="/labs" className="hover:text-white transition-colors">Praktikum</a>
              </li>
              <li>
                <a href="/help" className="hover:text-white transition-colors">Bantuan</a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Hubungi Kami</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Email: </span>
                <a href="mailto:info@virtuallab.com" className="hover:text-white transition-colors">
                  info@virtuallab.com
                </a>
              </p>
              <p>
                <span className="font-medium">Telepon: </span>
                <span>(022) 2500935</span>
              </p>
              <p>
                <span className="font-medium">Alamat: </span>
                <span>Jl. Ganesha No.10, Bandung</span>
              </p>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Virtual Lab TPB ITB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}