import React, { useState, useEffect } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';

import { Link } from 'react-router-dom'

export default function ContactForm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    greenhouse: '',
    location: '',
    subject: '',
    consult: ''
  });

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.padding = '0';
      rootElement.style.margin = '0';
      rootElement.style.textAlign = 'left';
      rootElement.style.maxWidth = '100%';
      rootElement.style.width = '100%';
      rootElement.style.height = '100%';
    }

    return () => {
      if (rootElement) {
        rootElement.style.padding = '';
        rootElement.style.margin = '';
        rootElement.style.textAlign = '';
        rootElement.style.maxWidth = '';
        rootElement.style.width = '';
        rootElement.style.height = '';
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div 
      className="w-screen min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-x-hidden"
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0
      }}
    >
      <div 
        className="navbar bg-black shadow-lg sticky top-0 z-50 h-16 min-h-0"
        style={{ width: '100vw', margin: 0, padding: 0 }}
      >
        <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32" style={{ maxWidth: 'none' }}>
          <div className="flex items-center">
            <Link to="/"><img src="/Smartani Typo.png" alt="Smartani Logo" className="h-8 object-contain" /></Link>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full min-h-screen relative overflow-hidden" style={{ width: '100vw' }}>
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-100 opacity-40 rounded-full blur-2xl"></div>

        <div className="relative z-10 w-full px-4 py-8 lg:py-16 xl:py-20 2xl:py-24" style={{ maxWidth: 'none' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-start max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
            {/* Left Column - Contact Info */}
            <div className="space-y-8 lg:pt-12">
              <div className="mb-6 -mt-5">
                <Link to="/">
                <button className="btn btn-ghost text-green-600 hover:bg-green-50 gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Beranda
                </button>
                </Link>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-green-800 leading-tight">
                  Get in <span className="text-green-600">Touch</span>
                </h1>
                <p className="text-base lg:text-lg xl:text-xl text-gray-800 leading-relaxed">
                  Mari berdiskusi tentang bagaimana Smartani dapat membantu pertanian Anda menjadi lebih cerdas dan berkelanjutan.
                </p>
              </div>

              <div className="space-y-4 xl:space-y-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 xl:gap-6">
                    <div className="bg-green-500 p-3 xl:p-4 rounded-xl text-white">
                      <Mail className="w-5 h-5 xl:w-6 xl:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base xl:text-lg">Email</h3>
                      <p className="text-gray-800 text-sm xl:text-base">info.smartani@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 xl:gap-6">
                    <div className="bg-green-500 p-3 xl:p-4 rounded-xl text-white">
                      <Phone className="w-5 h-5 xl:w-6 xl:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base xl:text-lg">Telepon</h3>
                      <p className="text-gray-800 text-sm xl:text-base">+62 851 1755 1850</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 xl:p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 xl:gap-6">
                    <div className="bg-green-500 p-3 xl:p-4 rounded-xl text-white">
                      <MapPin className="w-5 h-5 xl:w-6 xl:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base xl:text-lg">Alamat</h3>
                      <p className="text-gray-800 text-sm xl:text-base">Purwokerto, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block space-y-4 xl:space-y-6">
                <h3 className="text-lg xl:text-xl 2xl:text-2xl font-bold text-green-800">Mengapa Smartani?</h3>
                <div className="space-y-3 xl:space-y-4">
                  <div className="flex items-center gap-3 xl:gap-4">
                    <CheckCircle className="text-green-500 w-5 h-5 xl:w-6 xl:h-6 flex-shrink-0" />
                    <span className="text-gray-900 text-sm xl:text-base">Konsultasi gratis dan tanpa komitmen</span>
                  </div>
                  <div className="flex items-center gap-3 xl:gap-4">
                    <CheckCircle className="text-green-500 w-5 h-5 xl:w-6 xl:h-6 flex-shrink-0" />
                    <span className="text-gray-900 text-sm xl:text-base">Solusi disesuaikan dengan kebutuhan</span>
                  </div>
                  <div className="flex items-center gap-3 xl:gap-4">
                    <CheckCircle className="text-green-500 w-5 h-5 xl:w-6 xl:h-6 flex-shrink-0" />
                    <span className="text-gray-900 text-sm xl:text-base">Dukungan teknis 24/7</span>
                  </div>
                  <div className="flex items-center gap-3 xl:gap-4">
                    <CheckCircle className="text-green-500 w-5 h-5 xl:w-6 xl:h-6 flex-shrink-0" />
                    <span className="text-gray-900 text-sm xl:text-base">Teknologi ramah lingkungan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 xl:p-10 2xl:p-12 shadow-2xl border border-green-100">
              <div className="text-center mb-6 lg:mb-8 xl:mb-10">
                <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-2">Hubungi Kami</h2>
                <p className="text-gray-800 text-base xl:text-lg">Isi formulir di bawah ini untuk memulai percakapan</p>
              </div>

              <div className="space-y-4 lg:space-y-6 xl:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm xl:text-base font-semibold text-gray-900">
                      Nama Depan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama depan"
                      className="w-full px-4 py-3 xl:px-5 xl:py-4 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500 text-sm xl:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm xl:text-base font-semibold text-gray-900">
                      Nama Belakang <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama belakang"
                      className="w-full px-4 py-3 xl:px-5 xl:py-4 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500 text-sm xl:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm xl:text-base font-semibold text-gray-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@example.com"
                    className="w-full px-4 py-3 xl:px-5 xl:py-4 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500 text-sm xl:text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm xl:text-base font-semibold text-gray-900">
                    Nama Green House
                  </label>
                  <input
                    type="text"
                    name="greenhouse"
                    value={formData.greenhouse}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama green house (opsional)"
                    className="w-full px-4 py-3 xl:px-5 xl:py-4 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500 text-sm xl:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm xl:text-base font-semibold text-gray-900">
                    Lokasi Green House
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Masukkan lokasi green house (opsional)"
                    className="w-full px-4 py-3 xl:px-5 xl:py-4 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500 text-sm xl:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm xl:text-base font-semibold text-gray-900">
                    Subjek <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Masukkan subjek pesan"
                    className="w-full px-4 py-3 xl:px-5 xl:py-4 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500 text-sm xl:text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm xl:text-base font-semibold text-gray-900">
                    Konsultasi <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="consult"
                    value={formData.consult}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Konsultasikan kendala Anda di sini..."
                    className="w-full px-4 py-3 xl:px-5 xl:py-4 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 resize-none text-gray-900 placeholder-gray-500 text-sm xl:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 xl:py-5 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm xl:text-base"
                >
                  <Send className="w-5 h-5 xl:w-6 xl:h-6" />
                  Kirim Formulir
                </button>
              </div>

              <div className="lg:hidden mt-8 pt-6 border-t border-green-100">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span className="text-gray-900">Konsultasi Gratis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span className="text-gray-900">Dukungan 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span className="text-gray-900">Solusi Custom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span className="text-gray-900">Eco-Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8 lg:py-12 xl:py-16 w-full">
        <div className="w-full max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="hidden lg:grid grid-cols-3 gap-8 xl:gap-12 items-start">
            <div className="space-y-4 xl:space-y-6">
              <img src="/Smartani White.png" alt="logo" className="h-8 xl:h-10 object-contain"/>
              <p className="text-gray-400 text-base xl:text-lg">Bertani menjadi sepenuh hati.</p>
            </div>
          </div>

          <div className="lg:hidden space-y-8">
            <div className="text-center space-y-4">
              <img src="/Smartani White.png" alt="logo" className="h-8 xl:h-10 object-contain mx-auto"/>
              <p className="text-gray-400 text-base xl:text-lg">Bertani menjadi sepenuh hati.</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm xl:text-base text-gray-400 space-y-4 md:space-y-0">
              <p>© 2025 Smartani. All rights reserved.</p>
              
              <div className="flex space-x-4 xl:space-x-6 text-lg xl:text-xl">
                <a href="https://www.facebook.com/profile.php?id=61577829394231" className="hover:text-white text-gray-400 transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@smartani.id" className="hover:text-white text-gray-400 transition-colors">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://www.instagram.com/smartani.id" className="hover:text-white text-gray-400 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@InfoSmartani" className="hover:text-white text-gray-400 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://id.linkedin.com/in/smartani-id-00b291372" className="hover:text-white text-gray-400 transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://wa.me/+6285117551850" className="hover:text-white text-gray-400 transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}