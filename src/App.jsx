import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Form from './Form' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import { CheckCircle, Leaf, Sun, Droplet, Wifi, Thermometer, Cloud } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navbar */}
      <div className="navbar bg-black shadow-sm sticky top-0 z-50 h-16 min-h-0">
        <div className="container mx-auto px-12 flex justify-between items-center">
          <img src="/Smartani Typo.png" alt="Smartani Logo" className="h-8 object-contain" />

          <div className="hidden md:flex gap-6">
            <a href="#home" className="btn btn-ghost normal-case text-white hover:bg-white-500 hover:text-black">Home</a>
            <a href="#features" className="btn btn-ghost normal-case text-white hover:bg-white-500 hover:text-black">Features</a>
            <a href="#about" className="btn btn-ghost normal-case text-white hover:bg-white-500 hover:text-black">About Us</a>
            <a href="#faqs" className="btn btn-ghost normal-case text-white hover:bg-white-500 hover:text-black">FAQs</a>
            <a href="./Form" className="btn bg-green-500 text-white font-semibold hover:bg-green-700 hover:text-white">Hubungi Kami</a>
          </div>

          <div className="md:hidden">
            <button className="btn btn-square btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md w-full absolute top-16 left-0 z-40">
            <div className="flex flex-col items-center gap-4 py-4">
              <a href="#home" className="btn btn-ghost text-white">Home</a>
              <a href="#features" className="btn btn-ghost text-white">Features</a>
              <a href="#about" className="btn btn-ghost text-white">About Us</a>
              <a href="#faqs" className="btn btn-ghost text-white">FAQs</a>
              <a href="#contact" className="btn btn-ghost text-white">Hubungi Kami</a>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section  id="home"  className="min-h-screen flex flex-col-reverse lg:flex-row items-center container mx-auto px-4 -mt-16 relative overflow-hidden">
      
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 top-0 w-[500px] h-[300px] bg-green-200 opacity-50 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/7"></div>
        </div>
        
        <div className="w-full lg:w-1/2 lg:pl-20 text-center lg:text-left space-y-6 z-10 ">
          <span className="badge badge-success text-white px-4 py-4 rounded-2xl">Home</span>

          <h1 className="text-5xl md:text-6xl font-bold text-green-800 leading-snug">
            Bertani Menjadi <br /> Sepenuh Hati
          </h1>

          <p className="text-2xl font-semibold text-gray-700">
            Bertani Lebih Tenang, Hasil Lebih <br /> Maksimal!
          </p>

          <ul className="mt-6 space-y-4 text-left text-gray-700 font-medium text-lg">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Produktivitas Optimal
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Presisi yang Andal
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Kontrol Penuh di Tangan Anda
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Keberlanjutan dan Ramah Lingkungan
            </li>
          </ul>

          <button className="btn btn-success text-white btn-lg mt-6 rounded-xl">Mulai</button>
          
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-20">
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200 opacity-40 rounded-full blur-3xl translate-x-1/3 translate-y-1/1 z-0"></div>
          <img src="/model.jpeg" alt="Petani Smartani" className="w-80 md:w-96 lg:w-[600px] rounded-3xl shadow-2xl" />
        </div>
      </section>

      {/* Premis Tagline */}
      <div className="w-full text-center -mt-10">
        <p className="italic text-base md:text-lg lg:text-2xl text-gray-500 max-w-7xl mx-auto px-4">
          Driven by innovation, we’re building the future of smart farming where data and simplicity go hand in hand.
        </p>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          
          {/* Badge Features */}
          <div className="mb-4">
            <span className="badge badge-success px-4 py-4 text-white rounded-2xl">Features</span>
          </div>

          {/* Judul & Subjudul */}
          <h2 className="text-4xl md:text-4xl font-bold text-green-800 mb-4">Fitur Terdepan Smartani</h2>
          <p className="text-gray-600 text-2xl mb-16 max-w-4xl mx-auto">
            Inilah fitur-fitur unggulan Smartani yang membawa Greenhouse Anda ke level berikutnya.
          </p>

          {/* Grid Fitur Mengelilingi Gambar */}
          <div className="relative flex flex-col items-center justify-center">

          <div className="absolute left-0 top-0 w-[500px] h-[300px] bg-green-100 opacity-50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* Fitur Atas Kiri */}
            <div className="absolute -top-10 left-1/4 w-64 text-center transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-500 p-3 rounded-xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mails-icon lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/>
                <path d="M2 8v11c0 1.1.9 2 2 2h14"/>
                </svg>
                </div>
                <h4 className="font-bold text-green-600">Smart Notification <span className="text-black">& Reminder Panen</span></h4>
                <p className="text-gray-600 text-sm">
                  Notifikasi otomatis untuk status nutrisi, jadwal penyiraman, dan waktu panen agar tidak terlewat.
                </p>
              </div>
            </div>

            {/* Fitur Atas Kanan */}
            <div className="absolute -top-10 right-1/4 w-64 text-center transform translate-x-1/2">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-500 p-3 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                  <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h4 className="font-bold text-green-600">Sensor Lingkungan <span className="text-black">Terintegrasi</span></h4>
                <p className="text-gray-600 text-sm">
                  Sensor yang memahami tanaman Anda.
                  Satu sistem terintegrasi untuk membaca
                  suhu, kelembapan udara, kelembapan
                  tanah, intensitas cahaya, pH, hingga CO2
                  secara real-time.
                </p>
              </div>
            </div>

            {/* Gambar Utama */}
            <div className="relative z-10">
              <img src="/Galaxy Tab S8 Ultra.png" alt="Dashboard Smartani" className="mx-auto max-w-lg" />
              <img src="/iPhone 12 Pro.png" alt="Kontrol Smartani" className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-32" />
            </div>

            {/* Fitur Bawah Kiri */}
            <div className="absolute -bottom-4 left-1/4 w-64 text-center transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-500 p-3 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined">
                  <path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/>
                  </svg>
                </div>
                <h4 className="font-bold text-green-600">Dashboard & Otomasi <span className="text-black">Berbasis AI</span></h4>
                <p className="text-gray-600 text-sm">
                  Pompa menyala otomatis menyesuaikan
                  kondisi ideal tanaman, dan bisa Anda
                  kontrol langsung dari genggaman. Baik
                  di rumah, bepergian, maupun berlibur,
                  greenhouse tetap dapat dipantau lewat
                  smartphone.
                </p>
              </div>
            </div>

            {/* Fitur Bawah Kanan */}
            <div className="absolute bottom-0 right-1/4 w-64 text-center transform translate-x-1/2">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-500 p-3 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-plug-icon lucide-house-plug"><path d="M10 12V8.964"/><path d="M14 12V8.964"/><path d="M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"/>
                  <path d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"/>
                  </svg>
                </div>
                <h4 className="font-bold text-green-600">Ekosistem <span className="text-black">Hemat Energi</span></h4>
                <p className="text-gray-600 text-sm">
                  Dengan teknologi presisi, penggunaan air
                  dan pupuk dapat berkurang drastis dan
                  otomatis mendukung greenhouse eco
                  friendly berstandar SDG. Bumi tenang,
                  Anda pun senang.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200 opacity-40 rounded-full blur-3xl translate-x-1/3 translate-y-1/1 z-0"></div>
          </div>
        </div>
      </section>

      {/* Premis After Features */}
      <section className="bg-transparent py-10 flex justify-center">
        <div className="bg-black text-white rounded-2xl px-6 py-8 w-full max-w-7xl text-center shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Cara Cepat Mewujudkan Pertanian Cerdas</h3>
          <p className="text-base md:text-lg mb-6">
            Dengan Smartani, Anda tak hanya mengikuti perkembangan, Anda memimpinnya. Bergabunglah hari ini.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="btn bg-green-500 text-white hover:text-green-500 hover:bg-white transition duration-300">
              Hubungi Kami
            </button>
            <button className="btn btn-outline border-white bg-white text-black hover:bg-gray-300 hover:text-black transition duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">

        <div className="container mx-auto px-4 flex flex-col gap-12">

          {/* Judul Tengah */}
          <div className="text-center max-w-5xl mx-auto space-y-4">
            <span className="badge badge-success px-4 py-4 text-white rounded-2xl">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 leading-snug">
              Empowering the Future of Eco-Friendly Greenhouse
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kami memiliki misi untuk mewujudkan pertanian modern yang tidak hanya produktif, tetapi juga berkelanjutan dan ramah lingkungan. Bersama Smartani, teknologi hadir untuk mendampingi dan memberdayakan manusia, bukan menggantikannya.
            </p>
          </div>

          {/* Bawah: Grid 2 Kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            {/* List Kiri */}
            <div className="space-y-6 justify-self-start text-left pl-20">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-plus-icon lucide-house-plus"><path d="M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475"/><path d="M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"/><path d="M15 18h6"/><path d="M18 15v6"/></svg>
                  </div>
                <div>
                  <h4 className="font-bold text-green-700 text-xl">Seamless Greenhouse Management</h4>
                  <p className="text-gray-600 text-lg">Semua proses greenhouse dalam satu dashboard, mudah dipahami, dengan mudah.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 text-xl">Technology Grows with Farmers</h4>
                  <p className="text-gray-600 text-lg">Solusi pertanian berbasis AI yang dirancang untuk mendampingi petani dalam mengelola lahan secara cerdas.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth-lock-icon lucide-earth-lock"><path d="M7 3.34V5a3 3 0 0 0 3 3"/><path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M12 2a10 10 0 1 0 9.54 13"/><path d="M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 text-xl">Eco-Friendly Practices</h4>
                  <p className="text-gray-600 text-lg">Mendukung tujuan pembangunan berkelanjutan (SDG) dan prinsip ESG untuk bumi yang lebih baik.</p>
                </div>
              </div>
            </div>
              <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-green-200 opacity-40 rounded-full blur-3xl translate-x-1/1 translate-y-1/3 z-0"></div>
            {/* Foto Kanan */}
            <div className="flex justify-self-end pr-20">
              <img src="/model-2.png" alt="Smartani Team" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-3xl shadow-2xl" />
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-400 opacity-40 rounded-full blur-3xl translate-x-1/1 translate-y-1/3 z-0"></div>
          
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faqs" className="py-20 bg-white  relative overflow-visible">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-200 opacity-40 rounded-full blur-3xl -translate-x-1/1 -translate-y-1/3 z-0"></div>
        <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Kiri: Intro FAQ */}
          <div className="lg:w-1/2 space-y-10 text-green-700">
            <span className="badge badge-success text-white px-4 py-4 rounded-2xl">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 text-xl max-w-md">
              Kenali Smartani lebih dekat dengan temukan bagaimana teknologi ini bekerja dan apa saja yang bisa Anda dapatkan dari penggunaannya.
            </p>
            <img src="/LogoSmartani.PNG" alt="Smartani Logo" className="w-60 mt-6" />
          </div>

          {/* Kanan: List FAQ */}
          <div className="lg:w-1/2 space-y-4 text-green-700">

            {/* FAQ 1 */}
            <div className="dropdown dropdown-start w-full">
              <div tabIndex={0} role="button" className="btn btn-outline w-full rounded-xl h-20 px-8 text-lg justify-between items-center bg-green-500 text-white hover:bg-green-700 hover:text-white">
                Apa manfaat menggunakan Smartani?
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 w-full shadow rounded-box mt-2 p-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>
                  <p>Mempermudah pemantauan lahan, hemat air, pupuk, dan tenaga, panen lebih optimal dan stabil, mengurangi risiko gagal panen, akses informasi dari mana saja.</p>
                </li>
              </ul>
            </div>

            {/* FAQ 2 */}
            <div className="dropdown dropdown-start w-full">
              <div tabIndex={0} role="button" className="btn btn-outline w-full rounded-xl h-20 px-8 text-lg justify-between items-center bg-green-500 text-white hover:bg-green-700 hover:text-white">
                Apa saja yang bisa dipantau oleh Smartani?
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 w-full shadow rounded-box mt-2 p-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>
                  <p>Smartani dapat memantau kelembapan udara, suhu, intensitas cahaya, pH tanah, kecerahan, TDS, hingga CO2.</p>
                </li>
              </ul>
            </div>

            {/* FAQ 3 */}
            <div className="dropdown dropdown-start w-full">
              <div tabIndex={0} role="button" className="btn btn-outline w-full rounded-xl h-20 px-8 text-lg justify-between text-left items-center bg-green-500 text-white hover:bg-green-700 hover:text-white">
                Apakah ada batasan luas greenhouse untuk Smartani?
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 w-full shadow rounded-box mt-2 p-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>
                  <p>Tidak ada. Smartani mendukung berbagai ukuran greenhouse, dari kecil hingga besar. Kami menyesuaikan solusi dan konfigurasi sensor berdasarkan kebutuhan dan luas lahan Anda.</p>
                </li>
              </ul>
            </div>

            {/* FAQ 4 */}
            <div className="dropdown dropdown-start w-full">
              <div tabIndex={0} role="button" className="btn btn-outline w-full rounded-xl h-20 px-8 text-lg justify-between items-center bg-green-500 text-white hover:bg-green-700 hover:text-white">
                Bagaimana proses pemesanan Smartani?
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 w-full shadow rounded-box mt-2 p-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>
                  <p>Kontak langsung ke tim kami melalui WhatsApp atau email: info.smartani@gmail.com. Konsultasi kebutuhan terlebih dahulu (gratis), lalu kami bantu rekomendasikan paket terbaik sesuai kondisi lahan Anda.</p>
                </li>
              </ul>
            </div>

            {/* FAQ 5 */}
            <div className="dropdown dropdown-start w-full">
              <div tabIndex={0} role="button" className="btn btn-outline w-full rounded-xl h-20 px-8 text-lg justify-between items-center bg-green-500 text-white hover:bg-green-700 hover:text-white">
                Bagaimana cara pemasangan Smartani?
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m16 10-4 4-4-4" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 w-full shadow rounded-box mt-2 p-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>
                  <p>Tim kami siap datang langsung ke lokasi Anda untuk membantu pemasangan dan pelatihan penggunaan.</p>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consult" className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4">
          <img src="/model-4.png" alt="Kontak Smartani" className="w-full rounded-3xl max-w-lg mx-auto" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Hubungi Kami</h2>
            <p className="text-gray-700 mb-6">Konsultasi gratis untuk optimalkan pertanian Anda bersama Smartani.</p>
            <button className="btn btn-success bg-green-500 text-white btn-lg">Konsultasi Sekarang</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden text-center">
        <span className="badge badge-success text-white mb-10 px-4 py-4 rounded-2xl">Contact Us</span>
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          
          {/* Judul & Subjudul */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Let’s stay connected</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Kami selalu siap mendengar cerita greenhouse Anda. Hubungi kami melalui:
            </p>
          </div>

          {/* Info Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Email */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-500 p-4 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="m4 4 8 8 8-8" /><path d="M4 20h16V4H4z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold">Email</h4>
              <p className="text-gray-700">info.smartani@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-500 p-4 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.83.35 1.65.68 2.42a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.66-1.14a2 2 0 0 1 2.11-.45c.77.33 1.59.56 2.42.68a2 2 0 0 1 1.72 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold">Phone</h4>
              <p className="text-gray-700">0851xxxxx</p>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-green-500 p-4 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold">Socials</h4>
              <div className="flex space-x-4 text-gray-700 text-xl">
              
                <a href="https://www.instagram.com/smartani.id" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                <a href="https://www.tiktok.com/@smartani.id" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="8" cy="18" r="4" />
                    <path d="M12 18V2l7 4" />
                  </svg>
                </a>

                <a href="https://www.youtube.com/@InfoSmartani" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>

                <a href="https://wa.me/085156615935" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Gambar Bawah */}
          <div className="flex justify-center">
            <img
              src="/model-3.jpeg"
              alt="Greenhouse Smartani"
              className="rounded-3xl w-full max-w-3xl shadow-md"
            />
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Logo & Deskripsi */}
          <div className="space-y-3">
            <img src="Smartani White.png" alt="logo" className='h-10 object-contain'/>
            <p className="text-gray-400">Bertani menjadi sepenuh hati.</p>
          </div>

          {/* Navigasi Link */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-gray-300 md:justify-center">
            <a href="#home" className="text-white hover:text-green-500">Home</a>
            <a href="#features" className="text-white hover:text-green-500">Features</a>
            <a href="#about" className="text-white hover:text-green-500">About Us</a>
            <a href="#faqs" className="text-white hover:text-green-500">FAQs</a>
            <button className='btn btn-success text-white hover:text-white hover:bg-green-500'>
              <a href="#contact" className="hover:text-white text-white hover:bg-green-500">Hubungi Kami</a>
            </button>
          </div>

          {/* Newsletter */}
          <div className="space-y-3 text-right">
            <h4 className="font-semibold">Newsletter</h4>
            <div className="flex items-center space-x-2 justify-end">
              <input
                type="email"
                placeholder="Enter your work email"
                className="input input-bordered text-black input-sm w-48 md:w-64"
              />
              <button className="btn btn-success bg-green-500 btn-sm font-semibold text-white">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <p>© 2025 Smartani. All rights reserved.</p>
            
            {/* Sosial Media */}
            <div className="flex space-x-4 text-xl">
              <a href="#"><i className="fab fa-facebook text-gray-400 hover:text-white"></i></a>
              <a href="https://www.tiktok.com/@smartani.id"><i className="fab fa-tiktok text-gray-400 hover:text-white"></i></a>
              <a href="https://www.instagram.com/smartani.id"><i className="fab fa-instagram text-gray-400 hover:text-white"></i></a>
              <a href="https://www.youtube.com/@InfoSmartani"><i className="fab fa-youtube text-gray-400 hover:text-white"></i></a>
              <a href="#"><i className="fab fa-linkedin text-gray-400 hover:text-white"></i></a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}