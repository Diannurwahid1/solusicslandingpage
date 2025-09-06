# Solusics.AI - Landing Page

![Solusics.AI Logo](https://i.imghippo.com/files/lcA1141GSM.png)

## 🚀 Tentang Proyek

Solusics.AI adalah platform customer service AI terdepan di Indonesia yang membantu bisnis meningkatkan layanan pelanggan dengan teknologi LLM canggih. Landing page ini dibangun untuk memperkenalkan solusi customer service AI yang revolusioner kepada pasar Indonesia.

## ✨ Fitur Utama

- **🤖 Customer Service AI Berbahasa Indonesia** - AI yang memahami konteks dan bahasa lokal
- **📱 Integrasi Multi-Platform** - WhatsApp, Instagram, dan platform komunikasi lainnya
- **📊 Analitik Real-time** - Dashboard analitik mendalam untuk insight bisnis
- **🎯 Template Khusus Bisnis** - Template yang disesuaikan untuk berbagai sektor di Indonesia
- **🔧 Kustomisasi Penuh** - Personalisasi AI sesuai kebutuhan bisnis
- **🌐 Multi-bahasa** - Mendukung 80+ bahasa termasuk bahasa Indonesia

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: React 18 dengan TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS dengan custom color palette
- **Icons**: Lucide React
- **Font**: Manrope (Google Fonts)
- **Deployment**: Ready for production deployment

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--rotar-primary-purple: #8B5CF6
--rotar-secondary-purple: #A78BFA
--rotar-light-purple: #EDE9FE
--rotar-lighter-purple: #F3F4F6
--rotar-primary-orange: #F97316

/* Gradients */
--rotar-gradient-start: #8B5CF6
--rotar-gradient-end: #EC4899
```

### Typography
- **Primary Font**: Manrope (300, 400, 500, 600, 700)
- **Responsive Design**: Mobile-first approach
- **Spacing System**: 8px grid system

## 📁 Struktur Proyek

```
src/
├── components/
│   ├── Header.tsx              # Navigation dan popup "Coming Soon"
│   ├── HeroSection.tsx         # Hero section dengan video YouTube
│   ├── TrustedCompaniesSection.tsx # Section perusahaan partner
│   ├── CustomerExperienceSection.tsx # Fitur pengalaman pelanggan
│   ├── ConversationsSection.tsx # Demo chatbot WhatsApp
│   ├── TemplatesSection.tsx    # Template dan testimoni
│   ├── PricingSection.tsx      # Paket harga dan FAQ
│   ├── CTASection.tsx          # Call-to-action akhir
│   └── Footer.tsx              # Footer dengan links
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles dan Tailwind imports
```

## 🚀 Cara Menjalankan Proyek

### Prerequisites
- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Instalasi

1. Clone repository
```bash
git clone [repository-url]
cd solusics-landing-page
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## 📱 Fitur Responsif

Landing page ini dioptimalkan untuk semua ukuran layar:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Komponen Utama

### 1. Header
- Logo Solusics.AI
- Navigation menu
- CTA buttons dengan popup "Coming Soon"

### 2. Hero Section
- Judul utama dengan highlight text
- Video YouTube terintegrasi
- Statistik perusahaan
- Card artikel featured

### 3. Customer Experience
- Demo chat interface
- Integrasi dengan platform populer
- Statistik konversi

### 4. Conversations Demo
- Simulasi WhatsApp chat
- Fitur AI dalam bahasa Indonesia
- Mobile-responsive chat interface

### 5. Templates & Testimonials
- Template untuk berbagai industri
- Testimoni klien dengan foto
- Category filtering

### 6. Pricing
- 3 tier pricing (Starter, Professional, Enterprise)
- Toggle bulanan/tahunan
- FAQ section

### 7. CTA Section
- Final call-to-action
- Contact buttons
- Gradient background dengan decorative elements

## 🌟 Highlights

- **SEO Optimized**: Meta tags lengkap untuk search engine
- **Performance**: Optimized images dan lazy loading
- **Accessibility**: ARIA labels dan keyboard navigation
- **Modern UI/UX**: Apple-level design aesthetics
- **Indonesian Market Focus**: Content dan design untuk pasar Indonesia

## 🔧 Kustomisasi

### Mengubah Warna
Edit file `tailwind.config.js` untuk mengubah color palette:

```javascript
colors: {
  'rotar': {
    'primary-purple': '#8B5CF6',
    // ... other colors
  }
}
```

### Menambah Komponen
1. Buat file baru di folder `src/components/`
2. Import dan gunakan di `App.tsx`
3. Ikuti pattern yang sudah ada untuk konsistensi

## 📊 Analytics & Tracking

Landing page siap untuk integrasi dengan:
- Google Analytics
- Facebook Pixel  
- Custom tracking events

## 🚀 Deployment

Proyek ini siap untuk deployment ke:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Environment Variables
Tidak ada environment variables yang diperlukan untuk basic deployment.

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**Solusics.AI Team**
- Website: [solusics.ai](https://solusics.ai)
- Email: info@solusics.ai

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Pexels](https://pexels.com/) untuk stock photos

---

**Made with ❤️ for Indonesian businesses by Solusics.AI Team**