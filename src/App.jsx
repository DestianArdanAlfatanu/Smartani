import React, { useState, useEffect } from 'react';
import { Wifi, Thermometer, Cloud, Leaf, Sun, Droplet } from 'lucide-react';

export default function HomePage() {
  const [theme, setTheme] = useState('light');

  // Apply theme when changed
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navbar */}
      <div className="navbar bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img src="/Smartani Green.png" alt="Smartani Logo" className="h-9 object-contain" />

          <div className="hidden md:flex gap-8">
            <a className="btn btn-ghost normal-case" href="#features">Fitur</a>
            <a className="btn btn-ghost normal-case" href="#about">Tentang</a>
            <a className="btn btn-ghost normal-case" href="#contact">Kontak</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="btn btn-success btn-sm">Login</button>

            {/* Toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
              <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64 17.64A9 9 0 0 1 17.64 5.64 9 9 0 1 0 5.64 17.64z" />
              </svg>
              <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm5.66 3.34a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 1 1-1.41 1.41L17.66 6.75a1 1 0 0 1 0-1.41zM21 11a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2zm-9 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zm-6.66-3.34a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 1 1-1.41-1.41l1.42-1.42a1 1 0 0 1 1.41 0zM3 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h2zm3.34-6.66a1 1 0 0 1 0 1.41L4.92 6.75A1 1 0 1 1 3.5 5.34l1.42-1.42a1 1 0 0 1 1.42 0z" />
              </svg>
            </label>

            {/* Hamburger (mobile) */}
            <div className="dropdown md:hidden">
              <label tabIndex="0" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                <li><a href="#features">Fitur</a></li>
                <li><a href="#about">Tentang</a></li>
                <li><a href="#contact">Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="hero min-h-screen bg-gradient-to-b from-green-100 to-white">
        <div className="hero-content flex-col lg:flex-row-reverse container mx-auto px-4">
          <img src="/greenhouse-iot.png" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0" alt="Smartani Greenhouse" />
          <div>
            <h1 className="text-5xl font-bold text-green-800">Revolusi Greenhouse dengan IoT</h1>
            <p className="py-6 text-lg text-gray-600">
              Kontrol & monitoring otomatis pertanian modern Anda dengan teknologi IoT dari Smartani.
            </p>
            <button className="btn btn-success btn-lg rounded-full">Mulai Sekarang</button>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Tentang Smartani</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Smartani hadir sebagai platform agritech berbasis IoT, menghadirkan solusi monitoring dan kontrol otomatis untuk greenhouse modern. Dengan teknologi kami, hasil pertanian Anda lebih optimal, hemat energi, serta mudah dikontrol dari smartphone.
          </p>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-24 bg-green-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800">Fitur Unggulan</h2>
          <p className="text-lg text-gray-500 mt-4">Solusi agritech all-in-one berbasis Internet of Things.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          <div className="card bg-white shadow-xl">
            <div className="card-body items-center text-center">
              <Wifi size={48} className="text-green-600" />
              <h3 className="card-title">Monitoring Real-Time</h3>
              <p>Pantau kondisi lingkungan greenhouse Anda dari mana saja secara langsung.</p>
            </div>
          </div>
          <div className="card bg-white shadow-xl">
            <div className="card-body items-center text-center">
              <Thermometer size={48} className="text-green-600" />
              <h3 className="card-title">Sensor Lengkap</h3>
              <p>Suhu, kelembaban, CO2, pH, hingga kelembaban tanah terkoneksi otomatis.</p>
            </div>
          </div>
          <div className="card bg-white shadow-xl">
            <div className="card-body items-center text-center">
              <Cloud size={48} className="text-green-600" />
              <h3 className="card-title">Kontrol Otomatis</h3>
              <p>Kipas, penyiraman, pencahayaan, dan nutrisi otomatis sesuai parameter ideal tanaman.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-20 bg-white dark:bg-neutral text-center px-4">
        <h2 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-8">Kenapa Memilih Smartani?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="flex flex-col items-center text-center w-full md:w-1/3">
            <Leaf className="text-green-600 dark:text-green-400" size={48} />
            <h4 className="font-semibold text-lg mt-4 text-green-800 dark:text-green-300">Ramah Lingkungan</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Teknologi efisien menjaga ekosistem pertanian.</p>
          </div>
          <div className="flex flex-col items-center text-center w-full md:w-1/3">
            <Sun className="text-green-600 dark:text-green-400" size={48} />
            <h4 className="font-semibold text-lg mt-4 text-green-800 dark:text-green-300">Produktivitas Maksimal</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Panen berkualitas tinggi dengan hasil optimal.</p>
          </div>
          <div className="flex flex-col items-center text-center w-full md:w-1/3">
            <Droplet className="text-green-600 dark:text-green-400" size={48} />
            <h4 className="font-semibold text-lg mt-4 text-green-800 dark:text-green-300">Hemat Air & Nutrisi</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Sistem otomatisasi irigasi presisi.</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-20 bg-green-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Kontak Kami</h2>
          <p className="text-lg text-gray-700 mb-4">Hubungi kami untuk demo & konsultasi:</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="card bg-green-100 p-6 w-80">
              <p className="font-semibold">Email:</p>
              <p className="text-green-700 break-all">info@smartani.id</p>
            </div>
            <div className="card bg-green-100 p-6 w-80">
              <p className="font-semibold">Alamat:</p>
              <p className="text-green-700">Jl. Teknologi No.1, Jakarta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-8">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <img src="/Smartani White.png" alt="Smartani Logo" className="h-9 object-contain" />
          <div className="text-center md:text-right text-sm">
            © 2025 Smartani. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
