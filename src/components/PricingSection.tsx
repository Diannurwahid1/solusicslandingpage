import React, { useState } from 'react';
import { Check, ArrowRight, Star, MessageSquare, Crown, Building, Zap } from 'lucide-react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: 'Starter',
      icon: MessageSquare,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      monthlyPrice: 299000,
      yearlyPrice: 299000 * 12 * 0.83, // 17% discount
      description: 'Cocok untuk bisnis kecil yang baru memulai',
      features: [
        'Hingga 1.000 percakapan/bulan',
        '1 saluran komunikasi',
        'Respons AI dasar',
        'Dashboard analitik sederhana',
        'Dukungan email',
        'Template respons standar'
      ],
      buttonText: 'Pilih Paket',
      buttonStyle: 'bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400',
      popular: false,
      trialText: 'Coba gratis 14 hari'
    },
    {
      name: 'Professional',
      icon: Star,
      iconBg: 'bg-rotar-light-purple',
      iconColor: 'text-rotar-primary-purple',
      monthlyPrice: 799000,
      yearlyPrice: 799000 * 12 * 0.83, // 17% discount
      description: 'Solusi lengkap untuk bisnis berkembang',
      features: [
        'Hingga 10.000 percakapan/bulan',
        'Semua saluran komunikasi',
        'AI respons lanjutan',
        'Analitik mendalam',
        'Dukungan prioritas',
        'Kustomisasi penuh',
        'Integrasi WhatsApp Business',
        'Multi-bahasa',
        'Pelatihan AI khusus'
      ],
      buttonText: 'Pilih Paket',
      buttonStyle: 'bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end text-white hover:from-rotar-secondary-purple hover:to-rotar-primary-orange',
      popular: true,
      trialText: 'Coba gratis 14 hari'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      monthlyPrice: 1999000,
      yearlyPrice: 1999000 * 12 * 0.83, // 17% discount
      description: 'Untuk perusahaan besar dengan kebutuhan khusus',
      features: [
        'Percakapan tak terbatas',
        'Semua fitur Professional',
        'Dedicated account manager',
        'SLA 99.9% uptime',
        'Custom integrations',
        'Advanced security',
        'White-label solution',
        'API akses penuh',
        'Pelatihan tim on-site',
        'Backup & disaster recovery'
      ],
      buttonText: 'Pilih Paket',
      buttonStyle: 'bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400',
      popular: false,
      trialText: 'Coba gratis 14 hari'
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  const getPrice = (plan: any) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getPeriod = () => {
    return isYearly ? '/tahun' : '/bulan';
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Solusics.ai</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Pilih Paket yang Tepat untuk Bisnis Anda
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Mulai gratis 14 hari, tidak perlu kartu kredit. Upgrade kapan saja sesuai kebutuhan bisnis Anda.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-2">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Bulanan
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-rotar-primary-purple focus:ring-offset-2 ${
                isYearly ? 'bg-rotar-primary-purple' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Tahunan
            </span>
            {isYearly && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Hemat 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${
                  plan.popular 
                    ? 'border-rotar-primary-purple scale-105' 
                    : 'border-gray-200 hover:border-rotar-light-purple'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-rotar-gradient-start to-rotar-gradient-end text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Paling Populer</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${plan.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${plan.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      Rp {formatPrice(getPrice(plan))}
                    </span>
                    <span className="text-gray-600 ml-2">{getPeriod()}</span>
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all mb-4 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>

                  <p className="text-sm text-gray-500">{plan.trialText}</p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Butuh solusi kustom? Kami menawarkan paket yang disesuaikan untuk klien enterprise.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a href="#" className="text-rotar-primary-purple hover:text-rotar-secondary-purple font-medium flex items-center space-x-2">
              <span>Bandingkan semua fitur</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-rotar-primary-purple hover:text-rotar-secondary-purple font-medium flex items-center space-x-2">
              <span>Hubungi tim sales</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pertanyaan yang Sering Diajukan
          </h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Bisakah saya mengubah paket kapan saja?</h4>
              <p className="text-gray-600 text-sm">
                Ya, Anda dapat meningkatkan atau menurunkan paket kapan saja. Perubahan akan tercermin dalam siklus penagihan berikutnya.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Apakah ada uji coba gratis?</h4>
              <p className="text-gray-600 text-sm">
                Tentu saja! Kami menawarkan uji coba gratis 14 hari untuk semua paket sehingga Anda dapat menguji kemampuan customer service AI kami sebelum berkomitmen.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Apa yang terjadi jika saya melebihi batas percakapan?</h4>
              <p className="text-gray-600 text-sm">
                Kami akan memberi tahu Anda ketika mendekati batas. Anda dapat meningkatkan paket atau membeli kredit percakapan tambahan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;