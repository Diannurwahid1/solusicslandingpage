import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Solusics.AI: Agen AI
              <br />
              Customer <span className="relative">
                Service
                <div className="absolute -bottom-2 left-0 w-full h-8 bg-gradient-to-r from-rotar-light-purple to-rotar-lighter-purple rounded-full -z-10"></div>
              </span>
              <br />
              untuk Transformasi
              <br />
              Layanan Pelanggan
              {/* Toggle Switch */}
              <div className="inline-flex items-center ml-4">
                <div className="relative">
                  <div className="w-16 h-8 bg-gray-300 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <img 
                      src="https://i.imghippo.com/files/lcA1141GSM.png" 
                      alt="Solusics.AI Logo" 
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </div>
              </div>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Manfaatkan teknologi customer service AI dengan dukungan LLM canggih untuk membantu pelanggan Anda, memberdayakan tim, dan mengurangi beban kerja operasional di berbagai sektor bisnis.
            </p>
          </div>

          {/* Guide Card */}
          <div className="relative overflow-hidden rounded-xl p-6 shadow-sm border max-w-md">
            {/* Background Image */}
            <img 
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Doctor and patient in hospital" 
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-2 relative z-10">
                  Solusics.AI untuk Layanan Preventif Puskesmas Pertama di Indonesia
                </h3>
                <p className="text-sm text-white mb-4 relative z-10">
                  Revolusi layanan kesehatan preventif dengan AI untuk meningkatkan akses dan kualitas pelayanan puskesmas di seluruh Indonesia.
                </p>
                <a href="#" className="text-sm font-medium text-white flex items-center space-x-1 hover:text-green-300 relative z-10">
                  <span>Baca Artikel</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="relative w-16 h-16 z-10">
                {/* Molecule illustration */}
                <div className="absolute inset-0">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-teal-400 rounded-full"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 bg-rotar-secondary-purple rounded-full"></div>
                  <div className="absolute top-0 right-2 w-4 h-4 bg-rotar-primary-orange rounded-full"></div>
                  <div className="absolute bottom-2 left-4 w-5 h-5 bg-rotar-primary-purple rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-rotar-secondary-purple rounded-full"></div>
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                    <line x1="14" y1="14" x2="28" y2="28" stroke="#8B5CF6" strokeWidth="1" />
                    <line x1="28" y1="28" x2="42" y2="14" stroke="#8B5CF6" strokeWidth="1" />
                    <line x1="14" y1="14" x2="32" y2="48" stroke="#8B5CF6" strokeWidth="1" />
                    <line x1="42" y1="14" x2="52" y2="52" stroke="#8B5CF6" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
            <iframe 
              width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/7JTGDkZWWz0?si=U86nW6Wnb_lDn9V0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-[400px] rounded-2xl"
            />
            
            {/* Watch Tutorial Button */}
            <div className="absolute bottom-6 right-6">
              <button className="bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end hover:from-rotar-secondary-purple hover:to-rotar-primary-orange text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all shadow-lg">
                <span className="font-medium">Tonton Tutorial</span>
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current" />
                </div>
              </button>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="flex space-x-4 mt-6">
            {/* Companies Card */}
            <div className="bg-gradient-to-br from-rotar-light-purple to-rotar-lighter-purple rounded-xl p-6 flex-1">
              <div className="text-4xl font-bold text-gray-900 mb-2">+ 500</div>
              <p className="text-sm text-gray-700">
                Perusahaan terkemuka menggunakan Solusics.AI untuk layanan mereka
              </p>
            </div>

            {/* AI-driven Card */}
            <div className="bg-gray-900 rounded-xl p-6 flex-1 text-white">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm">
                <strong>Pertama di Indonesia</strong>
                <br />
                Layanan pelanggan berbasis AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;