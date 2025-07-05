import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { CheckCircle, Leaf, Sun, Droplet, Wifi, Thermometer, Cloud } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-100 w-full">
      {/* Navbar */}
      <div className="navbar bg-black shadow-sm sticky top-0 z-50 h-16 min-h-0">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          <Link to="/"><img src="/Smartani Typo.png" alt="Smartani Logo" className="h-8 object-contain"/></Link>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-green-50 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-5xl bg-white/60 rounded-lg p-8 shadow-md">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-gray-500 mt-2">Hubungi kami melalui formulir di bawah ini</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="w-full mt-1 text-green-500 bg-white rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="w-full mt-1 text-green-500 bg-white rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="example@example.com" className="w-full mt-1 text-green-500 bg-white rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" className="w-full mt-1 text-green-500 bg-white rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="text" className="w-full mt-1 text-green-500 bg-white rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="5" className="w-full mt-1 text-green-500 bg-white rounded-xl border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
            </div>
            <button type="submit" className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-10">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <img src="Smartani White.png" alt="logo" className='h-10 object-contain' />
            <p className="text-gray-400">Bertani menjadi sepenuh hati.</p>
          </div>
        </div>

        {/* Divider */}
          <div className="border-t border-gray-800 mt-10 pt-6">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 space-y-4 sm:space-y-0">
              <p>© 2025 Smartani. All rights reserved.</p>

              {/* Sosial Media */}
              <div className="flex space-x-4 text-xl">
                <a href="https://www.facebook.com/profile.php?id=61577829394231"><i className="fab fa-facebook text-gray-400 hover:text-white"></i></a>
                <a href="https://www.tiktok.com/@smartani.id"><i className="fab fa-tiktok text-gray-400 hover:text-white"></i></a>
                <a href="https://www.instagram.com/smartani.id"><i className="fab fa-instagram text-gray-400 hover:text-white"></i></a>
                <a href="https://www.youtube.com/@InfoSmartani"><i className="fab fa-youtube text-gray-400 hover:text-white"></i></a>
                <a href="https://id.linkedin.com/in/smartani-id-00b291372"><i className="fab fa-linkedin text-gray-400 hover:text-white"></i></a>
                <a href="https://wa.me/+6285117551850"><i className="fab fa-whatsapp text-gray-400 hover:text-white"></i></a>
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
}
