import React from 'react';
import { MessageCircle } from 'lucide-react';

const CustomerExperienceSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Main Title */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Berikan pengalaman
                <br />
                <span className="relative">
                  pelanggan
                  <div className="absolute -bottom-2 left-0 w-full h-8 bg-gradient-to-r from-rotar-light-purple to-rotar-lighter-purple rounded-full -z-10"></div>
                </span>
                <br />
                berkualitas tinggi
                {/* Toggle Switch */}
                <div className="inline-flex items-center ml-4">
                  <div className="relative">
                    <div className="w-20 h-10 bg-rotar-primary-purple rounded-full border-2 border-rotar-secondary-purple"></div>
                    <div className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-md">
                Manfaatkan teknologi chatbot AI dalam alat komunikasi yang didukung LLM canggih untuk membantu pelanggan Anda, memberdayakan tim Anda, dan mengurangi beban kerja Anda.
              </p>
            </div>

            {/* Integration Icons Grid */}
            <div className="bg-gray-200 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
                {/* Notion */}
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                    <span className="text-white font-bold text-lg">N</span>
                  </div>
                </div>
                
                {/* Evernote */}
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.5 3C6.6 3 5 4.6 5 6.5S6.6 10 8.5 10 12 8.4 12 6.5 10.4 3 8.5 3zm7 18c1.9 0 3.5-1.6 3.5-3.5S17.4 14 15.5 14 12 15.6 12 17.5 13.6 21 15.5 21z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Google Meet */}
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <div className="w-8 h-8 grid grid-cols-2 gap-0.5 rounded">
                    <div className="bg-red-500 rounded-tl"></div>
                    <div className="bg-yellow-500 rounded-tr"></div>
                    <div className="bg-blue-500 rounded-bl"></div>
                    <div className="bg-green-500 rounded-br"></div>
                  </div>
                </div>
                
                {/* Microsoft Teams */}
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Text */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">
                Otomatiskan alur kerja Anda dengan integrasi kami
              </h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-md">
                Hubungkan Solusics.AI dengan alat layanan pelanggan, penjualan, pemasaran, dan rekrutmen Anda menggunakan API, webhook, atau integrasi Zapier kami yang mudah digunakan.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Chat Interface Card */}
            <div className="bg-gradient-to-br from-rotar-light-purple to-rotar-lighter-purple rounded-2xl p-6 relative">
              {/* Top Right Label */}
              <div className="absolute top-4 right-4 bg-white bg-opacity-80 px-4 py-2 rounded-xl">
                <div className="text-sm font-semibold text-gray-900 mb-1">Selalu dapat diakses dengan obrolan langsung kami.</div>
                <div className="text-xs text-gray-600">Tingkatkan Komunikasi dengan Obrolan Langsung Real-Time.</div>
              </div>

              {/* Chat Window */}
              <div className="bg-white rounded-xl shadow-lg max-w-sm mt-12">
                {/* Chat Messages */}
                <div className="p-4 space-y-4">
                  {/* User Message */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">J</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">James Kokolomel</div>
                      <div className="bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end text-white px-4 py-2 rounded-lg text-sm max-w-xs">
                        Saya lupa kata sandi saya
                      </div>
                    </div>
                  </div>
                  
                  {/* Bot Response */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Solusics.AI</div>
                      <div className="bg-gray-100 px-4 py-3 rounded-lg text-sm max-w-xs">
                        <p className="text-gray-800">
                          Jangan khawatir, kita semua pernah berada dalam situasi yang melankolis seperti itu. Untuk mengatur ulang kata sandi Anda, buka halaman login dan klik Lupa Kata Sandi? Kemudian, masukkan alamat email dan ikuti langkah-langkahnya.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional User Avatars */}
              <div className="flex items-center space-x-2 mt-4 ml-4">
                <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Bottom Cards Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Boost Conversations Card */}
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Tingkatkan percakapan 96% dengan AI
                </h3>
                <p className="text-sm text-gray-600">
                  Chatbot bertenaga AI dan alat otomatisasi kami siap membantu.
                </p>
              </div>
              
              {/* Conversion Rate Card */}
              <div className="bg-gradient-to-br from-rotar-gradient-start to-rotar-gradient-end rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-2">12.5%</div>
                  <div className="text-sm font-semibold mb-1">PERCAKAPAN</div>
                  <div className="text-sm font-semibold">KARYAWAN</div>
                </div>
                {/* Circular Progress */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4"/>
                    <circle cx="32" cy="32" r="28" fill="none" stroke="white" strokeWidth="4" 
                            strokeDasharray="44 132" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Communication Channels Card */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Pusatkan Komunikasi Anda</h3>
              <p className="text-sm text-gray-300 mb-6">
                Mudah menanggapi obrolan dari semua saluran Anda dalam satu tampilan.
              </p>
              
              {/* Social Media Icons */}
              <div className="grid grid-cols-3 gap-4 max-w-xs">
                {/* WhatsApp */}
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                
                {/* Instagram */}
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                
                {/* Solusics AI */}
                <div className="w-12 h-12 bg-gradient-to-br from-rotar-gradient-start to-rotar-gradient-end rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                
                
              </div>
            </div>

            {/* Insights Card */}
            <div className="bg-gradient-to-br from-rotar-gradient-start to-rotar-gradient-end rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Dapatkan wawasan berharga dari audiens Anda</h3>
              <p className="text-sm">
                Statistik memberikan wawasan berharga tentang bagaimana pelanggan berinteraksi dengan Solusics.AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperienceSection;