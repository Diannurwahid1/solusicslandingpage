import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Links */}
          <div className="grid grid-cols-3 gap-8">
            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Perusahaan</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tentang Solusics.AI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Harga</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Sumber Daya</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Panduan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Perpustakaan Tools</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Syarat Penggunaan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              </ul>
            </div>
          </div>
          
          {/* Right Side - Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.imghippo.com/files/lcA1141GSM.png" 
                alt="Solusics.AI Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-3xl font-bold text-white">Solusics.AI</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Kami berada di garis depan pengembangan customer service AI, 
              berdedikasi untuk membantu bisnis berinteraksi dengan 
              pelanggan mereka secara lebih efektif.
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
            
            {/* Copyright */}
            <div className="flex items-center text-gray-400">
              <span className="mr-2">©</span>
              <span>Solusics.AI. Semua Hak Dilindungi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;