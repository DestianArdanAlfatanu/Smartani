import React from 'react';
import { Wifi, Thermometer, Cloud, Leaf, Sun, Droplet } from 'lucide-react';

export default function HomePage() {
  return (
    <div data-theme="smartani">

      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between">
          <div className="text-2xl font-bold text-primary">Smartani</div>
          <div className="hidden md:flex gap-8">
            <a className="btn btn-ghost normal-case text-lg" href="#features">Fitur</a>
            <a className="btn btn-ghost normal-case text-lg" href="#about">Tentang</a>
            <a className="btn btn-ghost normal-case text-lg" href="#contact">Kontak</a>
          </div>
          <div>
            <button className="btn btn-secondary btn-sm">Login</button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="hero min-h-screen bg-gradient-to-b from-accent to-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse container mx-auto">
          <img src="/greenhouse-iot.png" className="max-w-sm rounded-lg shadow-2xl" alt="Smartani Greenhouse" />
          <div>
            <h1 className="text-5xl font-bold text-primary">Revolusi Greenhouse IoT</h1>
            <p className="py-6 text-lg text-neutral">
              Monitoring, otomatisasi, dan pengendalian greenhouse modern berbasis teknologi IoT canggih.
            </p>
            <button className="btn btn-primary btn-lg rounded-full">Mulai Sekarang</button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-24 bg-accent">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">Fitur Unggulan</h2>
          <p className="text-lg text-neutral mt-4">Teknologi all-in-one berbasis IoT untuk greenhouse modern.</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Wifi size={48} className="text-primary" />
              <h3 className="card-title">Monitoring Real-Time</h3>
              <p>Pantau kondisi lingkungan greenhouse Anda dari mana saja secara langsung.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Thermometer size={48} className="text-primary" />
              <h3 className="card-title">Sensor Lengkap</h3>
              <p>Suhu, kelembaban, CO2, pH, hingga kelembaban tanah terkoneksi otomatis.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <Cloud size={48} className="text-primary" />
              <h3 className="card-title">Kontrol Otomatis</h3>
              <p>Pengaturan otomatis kipas, penyiraman, pencahayaan, dan nutrisi sesuai parameter ideal tanaman.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Kenapa Memilih Smartani?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="flex items-center gap-4">
              <Leaf className="text-primary" size={36} />
              <div>
                <h4 className="font-semibold text-lg">Ramah Lingkungan</h4>
                <p className="text-neutral">Efisiensi energi & sumber daya menjaga ekosistem pertanian.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Sun className="text-primary" size={36} />
              <div>
                <h4 className="font-semibold text-lg">Produktivitas Maksimal</h4>
                <p className="text-neutral">Panen berkualitas tinggi, hasil optimal, bisnis berkembang pesat.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Droplet className="text-primary" size={36} />
              <div>
                <h4 className="font-semibold text-lg">Hemat Air & Nutrisi</h4>
                <p className="text-neutral">Irigasi presisi hemat air, nutrisi terkendali, hasil optimal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="py-20 bg-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Tentang Smartani</h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            Smartani hadir sebagai platform agritech berbasis IoT, menghadirkan solusi monitoring dan kontrol otomatis untuk greenhouse modern. Dengan teknologi kami, hasil pertanian Anda lebih optimal, hemat energi, serta mudah dikontrol dari smartphone.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-20 bg-base-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Kontak Kami</h2>
          <p className="text-lg text-neutral mb-4">Hubungi kami untuk demo & konsultasi:</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="card bg-accent p-6 w-80">
              <p className="font-semibold">Email:</p>
              <p className="text-primary">info@smartani.id</p>
            </div>
            <div className="card bg-accent p-6 w-80">
              <p className="font-semibold">Alamat:</p>
              <p className="text-primary">Jl. Teknologi No.1, Jakarta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-base-100 py-8">
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
