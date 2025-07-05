import React, { useState, useEffect } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Send, ArrowLeft } from 'lucide-react';

import { Link } from 'react-router-dom'

export default function ContactForm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
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
        <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20" style={{ maxWidth: 'none' }}>
          <div className="flex items-center">
            <img src="/Smartani Typo.png" alt="Smartani Logo" className="h-8 object-contain" />
          </div>

          <div className="hidden md:flex gap-6">
            <Link to="/"><button className="btn bg-green-500 text-white font-semibold hover:bg-green-700 hover:text-white">Home Page</button></Link>
          </div>

          <div className="md:hidden absolute right-5">
            <button className="btn btn-square hover:text-white hover:bg-green-500 btn-ghost" onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md absolute top-16 right-0 z-40 w-48 rounded-lg border border-gray-200">
            <div className="flex flex-col items-start gap-3 py-4 px-4 text-black">
               <Link to="/"><button className="btn bg-green-500 text-white font-semibold hover:bg-green-700 hover:text-white">Home Page</button></Link>
            </div>
          </div>
        )}
      </div>

      <div className="w-full min-h-screen relative overflow-hidden" style={{ width: '100vw' }}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-100 opacity-40 rounded-full blur-2xl"></div>

        <div className="relative z-10 w-full px-4 py-8 lg:py-16" style={{ maxWidth: 'none' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            
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
                <span className="badge badge-success px-4 py-4 text-white rounded-full">Contact Us</span>
                <h1 className="text-4xl lg:text-5xl font-bold text-green-800 leading-tight">
                  Get in <span className="text-green-600">Touch</span>
                </h1>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Mari berdiskusi tentang bagaimana Smartani dapat membantu pertanian Anda menjadi lebih cerdas dan berkelanjutan.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-xl text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-gray-800">info.smartani@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-xl text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Telepon</h3>
                      <p className="text-gray-800">+62 851 1755 1850</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-xl text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Alamat</h3>
                      <p className="text-gray-800">Purwokerto, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block space-y-4">
                <h3 className="text-xl font-bold text-green-800">Mengapa Smartani?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-900">Konsultasi gratis dan tanpa komitmen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-900">Solusi disesuaikan dengan kebutuhan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-900">Dukungan teknis 24/7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-900">Teknologi ramah lingkungan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-green-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Hubungi Kami</h2>
                <p className="text-gray-800">Isi formulir di bawah ini untuk memulai percakapan</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Nama Depan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama depan"
                      className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Nama Belakang <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama belakang"
                      className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Nama Green House
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama green house (opsional)"
                    className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Subjek <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Masukkan subjek pesan"
                    className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/70 resize-none text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
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

      <footer className="bg-black text-white py-12 w-full">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="hidden lg:grid grid-cols-3 gap-8 items-start">
            <div className="space-y-4">
              <img src="/Smartani White.png" alt="logo" className='h-10 object-contain'/>
              <p className="text-gray-400">Bertani menjadi sepenuh hati.</p>
            </div>
          </div>

          <div className="lg:hidden space-y-8">
            <div className="text-center space-y-4">
              <img src="/Smartani White.png" alt="logo" className='h-10 object-contain mx-auto'/>
              <p className="text-gray-400">Bertani menjadi sepenuh hati.</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
              <p>© 2025 Smartani. All rights reserved.</p>
              
              <div className="flex space-x-4 text-xl">
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