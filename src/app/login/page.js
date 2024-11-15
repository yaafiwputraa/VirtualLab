// src/app/login/page.js

'use client';
import React, { useState } from 'react';
import { MailIcon, LockIcon, ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // src/app/login/page.js

  // src/app/login/page.js

const handleLogin = async (event) => {
    event.preventDefault();
  
    const response = await fetch('/api/login', { // Perhatikan perubahan endpoint ini
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user));
      alert("Login successful");
      router.push('/');
    } else {
      alert("Invalid email or password");
    }
  };
  
  

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <form onSubmit={handleLogin} className="w-full max-w-md z-10 space-y-6">
        {/* Left side decorative pattern */}
        <div className="text-center mb-8">
          <img 
            src="/logo.png" 
            alt="EduLab ITB" 
            className="h-10 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Selamat Datang Kembali
          </h1>
          <p className="text-gray-600 mt-2">
            Masuk ke akun platform pembelajaran TPB ITB Anda
          </p>
        </div>

        {/* Input fields with icons */}
        <div className="relative">
          <MailIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            placeholder="Email ITB"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 h-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="relative">
          <LockIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 h-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Remember me and Forgot password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-600">Ingat saya</span>
          </label>
          <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
            Lupa password?
          </a>
        </div>

        {/* Login button */}
        <button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:gap-3">
          Masuk
          <ArrowRightIcon className="w-4 h-4" />
        </button>

        {/* Additional info */}
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">atau</span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-600">
              Belum punya akun?{' '}
              <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                Daftar di sini
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Dengan masuk, Anda menyetujui{' '}
              <a href="#" className="text-blue-600 hover:underline">Syarat & Ketentuan</a>
              {' '}serta{' '}
              <a href="#" className="text-blue-600 hover:underline">Kebijakan Privasi</a>
              {' '}kami
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
