import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Card */}
        <div className="relative">
          {/* Main Green Card */}
          <div className="bg-gradient-to-br from-rotar-gradient-start to-rotar-gradient-end rounded-3xl p-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-300 rounded-full opacity-30 translate-x-32 -translate-y-32"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-rotar-light-purple rounded-full opacity-30 translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-rotar-primary-purple rounded-full opacity-20 -translate-x-24 translate-y-24"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Ambil kendali produktivitas
                <br />
                Anda dengan customer service AI
                <br />
                LLM canggih sekarang
              </h2>
              <p className="text-white text-lg mb-8 max-w-md">
                Transformasikan Layanan Pelanggan Anda dengan Solusi Customer Service AI Solusics.AI yang Didukung LLM canggih.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center space-x-2 transition-colors font-medium">
                  <span>Pesan Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-xl flex items-center space-x-2 transition-colors font-medium border border-white border-opacity-20">
                  <Phone className="w-5 h-5" />
                  <span>Hubungi Kami</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Overlapping Purple Card */}
          <div className="absolute -top-4 -right-4 w-80 h-32 bg-gradient-to-r from-rotar-primary-orange to-rotar-secondary-purple rounded-2xl opacity-80"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;