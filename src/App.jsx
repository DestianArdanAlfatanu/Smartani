import React from 'react';
import { Wifi, Thermometer, Cloud, Leaf, Sun, Droplet } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-100">

      {/* Navbar */}
      <div className="navbar bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between">
          <div className="text-2xl font-bold text-green-700">Smartani</div>
          <div className="hidden md:flex gap-8">
            <a className="btn btn-ghost normal-case" href="#features">Fitur</a>
            <a className="btn btn-ghost normal-case" href="#about">Tentang</a>
            <a className="btn btn-ghost normal-case" href="#contact">Kontak</a>
          </div>
          <div>
            <button className="btn btn-success btn-sm">Login</button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="hero min-h-screen bg-gradient-to-b from-green-100 to-white">
        <div className="hero-content flex-col lg:flex-row-reverse container mx-auto">
          <img src="/greenhouse-iot.png" className="max-w-sm rounded-lg shadow-2xl" alt="Smartani Greenhouse" />
          <div>
            <h1 className="text-5xl font-bold text-green-800">Revolusi Greenhouse dengan IoT</h1>
            <p className="py-6 text-lg text-gray-600">
              Kontrol & monitoring otomatis pertanian modern Anda dengan teknologi IoT dari Smartani.
            </p>
            <button className="btn btn-success btn-lg rounded-full">Mulai Sekarang</button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-24 bg-green-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800">Fitur Unggulan</h2>
          <p className="text-lg text-gray-500 mt-4">Solusi agritech all-in-one berbasis Internet of Things.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
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
      <div className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Kenapa Memilih Smartani?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="flex items-center gap-4">
              <Leaf className="text-green-600" size={36} />
              <div>
                <h4 className="font-semibold text-lg">Ramah Lingkungan</h4>
                <p className="text-gray-600">Teknologi efisien menjaga ekosistem pertanian.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Sun className="text-green-600" size={36} />
              <div>
                <h4 className="font-semibold text-lg">Produktivitas Maksimal</h4>
                <p className="text-gray-600">Panen berkualitas tinggi dengan hasil optimal.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Droplet className="text-green-600" size={36} />
              <div>
                <h4 className="font-semibold text-lg">Hemat Air & Nutrisi</h4>
                <p className="text-gray-600">Sistem otomatisasi irigasi presisi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="py-20 bg-green-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Tentang Smartani</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Smartani hadir sebagai platform agritech berbasis IoT, menghadirkan solusi monitoring dan kontrol otomatis untuk greenhouse modern. Dengan teknologi kami, hasil pertanian Anda lebih optimal, hemat energi, serta mudah dikontrol dari smartphone.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Kontak Kami</h2>
          <p className="text-lg text-gray-700 mb-4">Hubungi kami untuk demo & konsultasi:</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="card bg-green-100 p-6 w-80">
              <p className="font-semibold">Email:</p>
              <p className="text-green-700">info@smartani.id</p>
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
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold text-xl">Smartani</div>
          <div className="text-center md:text-right text-sm">
            © 2025 Smartani. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
