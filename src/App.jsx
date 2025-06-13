import React from 'react';
import { CheckCircle, Leaf, Wifi, Thermometer, Cloud } from 'lucide-react';
import './App.css'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white">
        <div className="text-2xl font-bold text-green-700">Smartani</div>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#features">Fitur</a>
          <a href="#about">Tentang Kami</a>
          <a href="#contact">Kontak</a>
        </nav>
        <button className="btn btn-success">Login</button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Solusi Agritech Berbasis IoT Untuk Greenhouse Masa Depan
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Pantau, kontrol, dan optimalkan pertanian Anda secara real-time dengan teknologi cerdas dari Smartani.
          </p>
          <button className="btn btn-success btn-lg rounded-full">Mulai Sekarang</button>
        </div>
        <div>
          <img src="/greenhouse-iot.png" alt="Smart Greenhouse" className="w-[500px]" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-green-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800">Fitur Unggulan Smartani</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <Wifi className="mx-auto text-green-600" size={48} />
            <h3 className="text-xl font-semibold mt-4">Monitoring Real-Time</h3>
            <p className="mt-2 text-gray-600">Pantau kondisi lingkungan greenhouse Anda secara langsung dari mana saja.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <Thermometer className="mx-auto text-green-600" size={48} />
            <h3 className="text-xl font-semibold mt-4">Sensor Lengkap</h3>
            <p className="mt-2 text-gray-600">Suhu, kelembaban, cahaya, hingga CO2 terintegrasi dalam satu sistem.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <Cloud className="mx-auto text-green-600" size={48} />
            <h3 className="text-xl font-semibold mt-4">Kontrol Otomatis</h3>
            <p className="mt-2 text-gray-600">Kipas, pompa air, pencahayaan otomatis sesuai parameter ideal tanaman.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Tentang Smartani</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Smartani merupakan platform agritech berbasis Internet of Things (IoT) yang membantu petani dan pemilik greenhouse
            dalam meningkatkan hasil panen dengan memanfaatkan teknologi monitoring dan kontrol otomatis. Dengan sistem kami,
            produktivitas meningkat, efisiensi energi terjaga, serta hasil panen lebih berkualitas.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-green-700 text-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold">Smartani</div>
          <div className="text-center md:text-right">
            <p>Kontak: info@smartani.id</p>
            <p>Jl. Teknologi No.1, Jakarta</p>
            <p>© 2025 Smartani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}