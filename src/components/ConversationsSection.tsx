import React from 'react';
import { MessageCircle, RefreshCw, Settings, Mic, Image, MessageSquare, Truck, Bookmark, ArrowLeft } from 'lucide-react';

const ConversationsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Tingkatkan Layanan Pelanggan di Indonesia
            <br />
            <span className="bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end text-transparent bg-clip-text">Dengan Chatbot AI Terbaik dari Solusics.AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Otomatisasi Percakapan Cepat, Tepat, & Akurat.
            <br />
            Hemat Waktu dan Biaya Customer Service Anda.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Gaya Bahasa Natural */}
          <div className="space-y-8">
            <div className="bg-rotar-light-purple rounded-2xl p-8 border border-rotar-primary-purple">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaya Bahasa Natural & Lokal</h3>
              <p className="text-gray-600 mb-8">Chatbot AI yang Berbicara Seperti Manusia</p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <MessageCircle className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Mengerti Konteks Percakapan Bahasa Indonesia</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <RefreshCw className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Memahami Singkatan dan Bahasa Gaul Lokal</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <Settings className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Adaptif untuk Berbagai Dialek di Indonesia</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cerdas & Mudah Dilatih untuk Bisnis Anda</h3>
              <p className="text-gray-600 mb-8">AI dapat dilatih khusus untuk kebutuhan bisnis di Indonesia</p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <MessageCircle className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Mendukung 80+ Bahasa, Termasuk Bahasa Indonesia</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <Image className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Mampu Membaca dan Memahami Gambar</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <Mic className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Mendengar dan Merespons Voice Note</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - WhatsApp Simulation */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* WhatsApp Header */}
                  <div className="bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end px-4 py-3 pt-8 flex items-center space-x-3">
                    <ArrowLeft className="w-6 h-6 text-white" />
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-600">CS</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Solusics.AI</div>
                      <div className="text-white text-xs">Online</div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 bg-rotar-lighter-purple p-4 space-y-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
                    {/* Customer Message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                        <p className="text-sm">Halo, Saya Sekarang sedang Ada yang ingin saya tanya nih 😊</p>
                        <div className="text-xs text-white mt-1 text-right">10:30</div>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md max-w-xs shadow-sm">
                        <p className="text-sm text-gray-800">Halo! Saya siap membantu Anda. Silakan tanyakan apa yang ingin Anda ketahui 😊</p>
                        <div className="text-xs text-gray-500 mt-1">10:30</div>
                      </div>
                    </div>

                    {/* Customer Question */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                        <p className="text-sm">Oke, Saya mau tanya. Itu yang berbayar kira-kira berapa ya?</p>
                        <div className="text-xs text-white mt-1 text-right">10:31</div>
                      </div>
                    </div>

                    {/* AI Detailed Response */}
                    <div className="flex justify-start">
                      <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md max-w-xs shadow-sm">
                        <p className="text-sm text-gray-800">Tentu! Kami punya beberapa paket berlangganan yang bisa disesuaikan dengan kebutuhan bisnis Anda:</p>
                        <br />
                        <p className="text-sm text-gray-800">• Paket Basic: Rp 299.000/bulan
• Paket Professional: Rp 599.000/bulan  
• Paket Enterprise: Custom pricing</p>
                        <br />
                        <p className="text-sm text-gray-800">Mau saya jelaskan detail fitur masing-masing paket?</p>
                        <div className="text-xs text-gray-500 mt-1">10:32</div>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex justify-start">
                      <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Input */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-3 flex items-center space-x-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center space-x-2">
                      <span className="text-gray-400 text-sm">Ketik pesan...</span>
                      <div className="ml-auto flex space-x-2">
                        <button className="text-gray-400">📎</button>
                        <button className="text-gray-400">📷</button>
                        <button className="text-gray-400">🎤</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Integrasi & Tools */}
          <div className="space-y-8">
            <div className="bg-rotar-light-purple rounded-2xl p-8 border border-rotar-primary-purple">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalisasi</h3>
              <p className="text-gray-600 mb-8">Atur AI sesuai dengan gaya yang kamu inginkan</p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <Settings className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Full Kustomisasi</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <MessageSquare className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Gaya Bahasa</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <ArrowLeft className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Atur Percakapan</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrasi & Analitik</h3>
              <p className="text-gray-600 mb-8">Terhubung dengan sistem bisnis dan dapatkan insight mendalam</p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <Settings className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">API Integration</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <RefreshCw className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Real-time Analytics</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rotar-lighter-purple rounded-2xl flex items-center justify-center mb-3 mx-auto">
                    <Bookmark className="w-8 h-8 text-rotar-primary-purple" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Data Export</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationsSection;