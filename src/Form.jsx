import React, { useState } from 'react';
import { CheckCircle, Leaf, Sun, Droplet, Wifi, Thermometer, Cloud } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
    {/* Navbar */}
      <div className="navbar bg-black shadow-sm sticky top-0 z-50 h-16 min-h-0">
        <div className="container mx-auto px-12 flex justify-between items-center">
          <a href="#home"><img src="/Smartani Typo.png" alt="Smartani Logo" className="h-8 object-contain" /></a>
        </div>
      </div>
    
    
    
    
    
      <section className="bg-green-50 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl bg-white/60 rounded-lg p-8 shadow-md">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-gray-500 mt-2">Hubungi kami melalui formulir di bawah ini</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="w-full mt-1 rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="w-full mt-1 rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="example@example.com" className="w-full mt-1 rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" className="w-full mt-1 rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" className="w-full mt-1 rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="5" className="w-full mt-1 rounded-xl border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <button type="submit" className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 transition">
              Send Message
            </button>
          </form>
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
            <div className="join">
                <input className="input join-item" placeholder="Email" />
                <button className="btn join-item rounded-r-full">Subscribe</button>
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