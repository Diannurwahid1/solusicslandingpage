import React from 'react';
import { ArrowRight } from 'lucide-react';

const TemplatesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Templates Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Gunakan template
                <br />
                untuk memulai
                <br />
                proyek Anda
              </h2>
              
              {/* Category Tags */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                    E-commerce
                  </button>
                  <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Pendidikan
                  </button>
                  <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Kesehatan
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Mulai percakapan
                  </button>
                  <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                    SDM
                  </button>
                  <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Pariwisata
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Template Cards */}
            <div className="grid grid-cols-3 gap-4">
              {/* Marketing Template */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-blue-400 to-rotar-secondary-purple rounded-xl p-4 h-32 flex items-center justify-center relative overflow-hidden">
                    {/* Chat bubble mockup */}
                    <div className="absolute top-2 left-2 bg-white rounded-lg p-2 text-xs max-w-24">
                      <div className="text-gray-800 text-[10px] leading-tight">
                        Tingkatkan penjualan dan bantu pengunjung memulai percakapan tentang produk Anda
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end rounded-lg p-2 text-xs max-w-20">
                      <div className="text-white text-[10px] leading-tight">
                        Apa yang bisa Anda ceritakan tentang produk ini?
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Customer Service AI untuk Marketing</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tingkatkan prospek dan percakapan serta bantu pengunjung memulai diskusi tentang produk Anda.
                </p>
                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Coba template gratis →
                </button>
              </div>

              {/* HR Template */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-teal-400 to-rotar-secondary-purple rounded-xl p-4 h-32 flex items-center justify-center relative overflow-hidden">
                    {/* Chat bubble mockup */}
                    <div className="absolute top-2 left-2 bg-white rounded-lg p-2 text-xs max-w-24">
                      <div className="text-gray-800 text-[10px] leading-tight">
                        Sederhanakan percakapan HR dan rekrutmen yang berkualitas
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end rounded-lg p-2 text-xs max-w-20">
                      <div className="text-white text-[10px] leading-tight">
                        Apa saja posisi yang tersedia?
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Customer Service AI untuk HR</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Temukan talenta dan terhubung dengan kandidat melalui percakapan otomatis.
                </p>
                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Coba template gratis →
                </button>
              </div>

              {/* Puskesmas Template */}
              <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Doctor and patient in hospital" 
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/80 to-teal-500/80"></div>
                </div>
                <div className="relative mb-4">
                  <div className="relative z-10">
                  <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-xl p-4 h-32 flex items-center justify-center relative overflow-hidden">
                    {/* Chat bubble mockup */}
                    <div className="absolute top-2 left-2 bg-white rounded-lg p-2 text-xs max-w-24">
                      <div className="text-gray-800 text-[10px] leading-tight">
                        Layani pasien dengan cepat dan akurat
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end rounded-lg p-2 text-xs max-w-20">
                      <div className="text-white text-[10px] leading-tight">
                        Bagaimana cara daftar imunisasi?
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <h3 className="font-bold text-white mb-2 relative z-10">Customer Service AI untuk Puskesmas</h3>
                <p className="text-sm text-white mb-4 relative z-10">
                  Optimalkan layanan kesehatan preventif dan respons pasien dengan AI yang cerdas.
                </p>
                <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors relative z-10">
                  Coba template gratis →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Apa yang dikatakan
              <br />
              perusahaan terkemuka
              <br />
              tentang produk kami
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <p className="text-gray-600 text-base leading-relaxed">
              Bergabunglah dengan semakin banyak bisnis di seluruh dunia yang telah merasakan dampak transformatif dari layanan customer service AI kami.
            </p>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl p-8 relative overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Mbida Messi" 
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Mbida Messi</h3>
                <p className="text-sm opacity-90">Founder CEO & Mbida Market Store</p>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            {/* Client Testimonial Badge */}
            <div className="inline-flex items-center space-x-2 bg-rotar-light-purple px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-rotar-primary-purple rounded-full"></div>
              <span className="text-sm font-medium text-rotar-primary-purple">Testimoni Klien</span>
            </div>

            {/* Testimonial Text */}
              <h3 className="font-bold text-gray-900 mb-2">Customer Service AI Dukungan</h3>
              <p className="text-lg leading-relaxed">
                Saya sangat terkesan dengan tingkat bantuan yang saya terima dari Customer Service AI yang disediakan oleh Solusics.AI. Sistem ini dengan cepat memahami pertanyaan saya dan memberikan respons yang akurat dan membantu.
              </p>
              
              {/* Rating */}
              <div className="flex items-center justify-between mt-6">
                <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">1 / 4</span>
                </div>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <span>Lihat testimoni lainnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default TemplatesSection;