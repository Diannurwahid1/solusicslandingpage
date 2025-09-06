import React from 'react';
import { ArrowRight, X } from 'lucide-react';

const Header = () => {
  const [showComingSoon, setShowComingSoon] = React.useState(false);

  const handleComingSoonClick = () => {
    setShowComingSoon(true);
  };

  const closePopup = () => {
    setShowComingSoon(false);
  };

  return (
    <>
      <header className="bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="https://i.imghippo.com/files/lcA1141GSM.png" 
            alt="Solusics.AI Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-semibold text-gray-900">Solusics.AI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Produk</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Solusi</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Sumber Daya</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Harga</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
            <button onClick={handleComingSoonClick} className="text-gray-600 hover:text-gray-900 transition-colors">Masuk</button>
            <button onClick={handleComingSoonClick} className="bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end hover:from-rotar-secondary-purple hover:to-rotar-primary-orange text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all">
            <span>Coba Demo</span>
            <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
      </header>

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-in fade-in duration-300">
            {/* Close Button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end rounded-full flex items-center justify-center mx-auto">
                <img 
                  src="https://i.imghippo.com/files/lcA1141GSM.png" 
                  alt="Solusics.AI Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900">
                Segera Hadir! 🚀
              </h2>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-lg text-gray-600">
                  Kami sedang mempersiapkan sesuatu yang luar biasa untuk Anda!
                </p>
                <p className="text-sm text-gray-500">
                  Platform customer service AI terdepan di Indonesia akan segera diluncurkan. 
                  Bersiaplah untuk mengalami transformasi layanan pelanggan yang revolusioner.
                </p>
              </div>

              {/* Features Preview */}
              <div className="bg-rotar-light-purple rounded-xl p-4 text-left">
                <h3 className="font-semibold text-gray-900 mb-3">Yang akan Anda dapatkan:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rotar-primary-purple rounded-full"></div>
                    <span>AI Customer Service berbahasa Indonesia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rotar-primary-purple rounded-full"></div>
                    <span>Integrasi WhatsApp & Instagram</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rotar-primary-purple rounded-full"></div>
                    <span>Analitik real-time</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rotar-primary-purple rounded-full"></div>
                    <span>Template khusus bisnis Indonesia</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <button 
                  onClick={closePopup}
                  className="w-full bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end hover:from-rotar-secondary-purple hover:to-rotar-primary-orange text-white py-3 px-6 rounded-lg font-medium transition-all"
                >
                  Mengerti, Saya Akan Menunggu! 😊
                </button>
                <p className="text-xs text-gray-400">
                  Terima kasih atas kesabaran Anda. Kami akan segera menghadirkan inovasi terbaik!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;