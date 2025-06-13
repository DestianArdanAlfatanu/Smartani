import React, { useState } from 'react';
import { Wifi, Thermometer, Cloud, Leaf, Sun, Droplet } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">

      {/* Navbar */}
      <div className="navbar bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src="/Smartani Green.png" alt="Smartani Logo" className="h-10 object-contain" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <a className="btn btn-ghost normal-case text-black" href="#features">Fitur</a>
            <a className="btn btn-ghost normal-case text-black" href="#about">Tentang</a>
            <a className="btn btn-ghost normal-case text-black" href="#contact">Kontak</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button className="btn btn-square btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current text-black"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> 
              </svg>
            </button>
          </div>

          <div className="hidden md:block">
            <button className="btn btn-success btn-sm">Login</button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md w-full absolute top-16 left-0 z-40">
            <div className="flex flex-col items-center gap-4 py-4">
              <a href="#features" className="btn btn-ghost text-black">Fitur</a>
              <a href="#about" className="btn btn-ghost text-black">Tentang</a>
              <a href="#contact" className="btn btn-ghost text-black">Kontak</a>
              <button className="btn btn-success btn-sm">Login</button>
            </div>
          </div>
        )}
      </div>

      {/* Hero */}
      <div className="hero min-h-[80vh] bg-gradient-to-b from-green-100 to-white">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse container mx-auto px-4">
          <img src="/greenhouse-iot.png" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0" alt="Smartani Greenhouse" />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 leading-snug">
              Revolusi Greenhouse dengan IoT
            </h1>
            <p className="py-6 text-base md:text-lg text-gray-600">
              Kontrol & monitoring otomatis pertanian modern Anda dengan teknologi IoT dari Smartani.
            </p>
            <button className="btn btn-success btn-md md:btn-lg rounded-full">Mulai Sekarang</button>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="py-20 bg-green-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">Tentang Smartani</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Smartani adalah platform agritech berbasis IoT yang membantu petani dan pengelola greenhouse dalam meningkatkan produktivitas hasil panen secara optimal. Dengan sistem monitoring real-time, kontrol otomatis, dan manajemen sumber daya cerdas, Smartani menjawab kebutuhan pertanian modern yang efisien, ramah lingkungan, dan berbasis teknologi.
          </p>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-20 bg-green-50">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">Fitur Unggulan</h2>
          <p className="text-base md:text-lg text-gray-500 mt-4">Solusi agritech all-in-one berbasis Internet of Things.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          <div className="card bg-white shadow-xl p-6">
            <div className="card-body items-center text-center">
              <Wifi size={48} className="text-green-600 mb-4" />
              <h3 className="card-title text-lg text-black">Monitoring Real-Time</h3>
              <p className="text-gray-600 text-sm">Pantau kondisi lingkungan greenhouse Anda dari mana saja secara langsung.</p>
            </div>
          </div>
          <div className="card bg-white shadow-xl p-6">
            <div className="card-body items-center text-center">
              <Thermometer size={48} className="text-green-600 mb-4" />
              <h3 className="card-title text-lg text-black">Sensor Lengkap</h3>
              <p className="text-gray-600 text-sm">Suhu, kelembaban, CO2, pH, hingga sensor cahaya terkoneksi otomatis.</p>
            </div>
          </div>
          <div className="card bg-white shadow-xl p-6">
            <div className="card-body items-center text-center">
              <Cloud size={48} className="text-green-600 mb-4" />
              <h3 className="card-title text-lg text-black">Kontrol Otomatis</h3>
              <p className="text-gray-600 text-sm">Kipas, penyiraman, pencahayaan, dan nutrisi otomatis sesuai parameter ideal tanaman.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">Kenapa Memilih Smartani?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <Leaf className="text-green-600" size={48} />
              <h4 className="font-semibold text-lg mt-4 text-black">Ramah Lingkungan</h4>
              <p className="text-gray-600 text-sm mt-2">Teknologi efisien menjaga ekosistem pertanian.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Sun className="text-green-600" size={48} />
              <h4 className="font-semibold text-lg mt-4 text-black">Produktivitas Maksimal</h4>
              <p className="text-gray-600 text-sm mt-2">Panen berkualitas tinggi dengan hasil optimal.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Droplet className="text-green-600" size={48} />
              <h4 className="font-semibold text-lg mt-4 text-black">Hemat Air & Nutrisi</h4>
              <p className="text-gray-600 text-sm mt-2">Sistem otomatisasi irigasi presisi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">Kontak Kami</h2>
          <p className="text-lg text-gray-700 mb-8">Hubungi kami untuk demo & konsultasi:</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="card bg-green-100 p-6 shadow-md w-full md:w-80">
              <p className="font-semibold text-lg mb-2 text-black">Email:</p>
              <p className="text-green-700 break-words text-base">info@smartani.id</p>
            </div>
            <div className="card bg-green-100 p-6 shadow-md w-full md:w-80">
              <p className="font-semibold text-lg mb-2 text-black">Alamat:</p>
              <p className="text-green-700 text-base">Jl. Teknologi No.1, Jakarta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <img src="/Smartani White.png" alt="Smartani Logo" className="h-10 object-contain mb-4 md:mb-0" />
          <div className="text-center md:text-right text-sm">
            © 2025 Smartani. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
