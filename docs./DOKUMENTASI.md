# **LAPORAN PROYEK WEBSITE PROFESIONAL**
**Tugas Besar Desain Web - Universitas Pancasila**

---

## **1. IDENTITAS PROYEK**

### **Nama Project**

### **Deskripsi Singkat**

### **Daftar Anggota Kelompok**
| No | Nama Lengkap | NIM | Peran | Kontribusi |
|----|-------------|-----|-------|------------|
| 1 | Farhan Ridwan Badawi | [4524210037] | Project Manager | Koordinasi tim, dokumentasi, deployment |
| 2 | Ketut Sumantre | [4524210048] | UI/UX Designer | Wireframe, palet warna, tipografi |
| 3 | Fais Base Febrian | [4524210033] | Frontend Developer 1 | Struktur folder, framework implementation |
| 4 | Jevrene Samny Pratama | [4524210046] | Frontend Developer 2 | A11y implementation, HTML semantik |
| 5 | Bunga Putri Nuriman | [4524210021] | Frontend Developer 3 | Responsivitas, testing cross-device |
| 6 | Elsa Setia Marcsa | [4524210030] | Tester & Dokumen | Testing, screenshot, review dokumentasi |

---
## **2. TEKNOLOGI**

### **Framework yang Dipakai**
**Bootstrap 5.3.3** – Framework front-end utama yang digunakan untuk membangun seluruh antarmuka website. Bootstrap dipilih karena:
- Menyediakan sistem grid responsif yang konsisten
- Memiliki komponen UI siap pakai (navbar, carousel, card, modal)
- Dukungan mobile-first
  
### **Teknologi Pendukung**
1. **Font Awesome 6.5.2** – Library ikon 
2. **Animate.css 4.1.1** – Library animasi CSS untuk transisi
3. **Vanilla JavaScript** – Untuk semua logika interaktif 
4. **CSS Custom Properties** – Variabel CSS untuk manajemen tema
5. **Google Maps Embed API** – Integrasi peta di halaman kontak

---

## **3. DAFTAR FITUR**

### **1. Navbar Responsif**
- **Sticky Navigation**: Tetap di atas saat scroll
- **Mobile-Friendly**: Menu collapse di perangkat kecil
- **Active State**: Penanda halaman aktif otomatis
- **Smooth Scrolling**: Navigasi internal yang halus

### **2. Hero Section dengan Call-to-Action**
- **Image Carousel**: 4 slide dengan gambar dan teks overlay
- **Responsive Height**: Menyesuaikan tinggi berdasarkan device
- **Captions**: Teks promosi dengan background semi-transparan
- **Call-to-Action Buttons**: Tautan ke halaman pendaftaran dan program

### **3. Card Grid System**
- **Program Cards**: Layout 3 kolom untuk IPA, IPS, Bahasa
- **Hover Effects**: Elevasi dan transformasi saat hover
- **Consistent Design**: Warna dan spacing yang seragam
- **Click Interaction**: Card dapat diklik untuk detail (modal)

### **4. Form Kontak dengan Validasi**
- **WhatsApp Integration**: Form langsung mengirim ke WhatsApp
- **Real-time Validation**: Validasi input dengan Bootstrap
- **Multiple Form Types**: 
  - Form pendaftaran siswa baru
  - Form kontak WhatsApp
  - Form newsletter subscription
- **Success Feedback**: Halaman konfirmasi setelah submit

### **5. Footer Komprehensif**
- **Multi-column Layout**: 3 kolom informasi
- **Complete Contact Info**: Alamat, telepon, email, WhatsApp
- **Social Media Links**: Ikon media sosial dengan hover effect
- **Quick Links**: Navigasi cepat ke halaman utama
- **Copyright Auto-update**: Tahun otomatis diperbarui

### **6. Accessibility Features**
- **Semantic HTML**: Penggunaan tag HTML5 yang tepat
- **ARIA Attributes**: Atribut untuk navigasi dan form
- **Keyboard Navigation**: Dapat dinavigasi dengan keyboard
- **Color Contrast**: Kontras warna memenuhi standar WCAG
- **Alt Text**: Deskripsi untuk semua gambar

### **7. Fitur Tambahan**
- **Back-to-Top Button**: Tombol floating untuk kembali ke atas
- **Modal System**: Pop-up untuk detail program
- **FAQ Accordion**: Pertanyaan umum dengan expand/collapse
- **Gelombang Pendaftaran**: Tampilan visual periode pendaftaran
- **Responsive Images**: Optimasi gambar untuk berbagai device
- **Ripple Effects**: Efek visual saat klik pada card
- **Scroll Animations**: Animasi fade-in saat elemen masuk viewport
---

## **4. STRUKTUR HALAMAN**

### **Hirarki/Sitemap**

## 4. Struktur Halaman (Sitemap Website)

```text
SITEMAP WEBSITE SMA PANCASILA
│
├── HOME (Beranda)
│   ├── Hero Section
│   │   ├── Background Image Sekolah
│   │   ├── Judul Utama
│   │   └── Tagline Sekolah
│   │
│   ├── Profil Singkat Sekolah
│   │   ├── Visi
│   │   ├── Misi
│   │   └── Nilai Sekolah
│   │
│   ├── Program Peminatan (Preview)
│   │   ├── IPA
│   │   ├── IPS
│   │   └── Bahasa
│   │
│   ├── Program Unggulan (Preview)
│   │   ├── Kelas Olimpiade
│   │   ├── Bahasa Internasional
│   │   ├── Digital Literacy
│   │   └── Leadership Program
│   │
│   └── Footer
│
├── PROFIL
│   ├── Hero Profil
│   ├── Sejarah Sekolah
│   ├── Fasilitas Sekolah
│   ├── Prestasi Akademik
│   ├── Prestasi Non-Akademik
│   └── Footer
│
├── PROGRAM
│   ├── Hero Program
│   ├── Program Peminatan
│   │   ├── IPA
│   │   ├── IPS
│   │   └── Bahasa
│   │
│   ├── Program Unggulan
│   │   ├── Kelas Olimpiade
│   │   ├── Bahasa Internasional
│   │   ├── Digital Literacy
│   │   └── Leadership Program
│   │
│   ├── Ekstrakurikuler
│   │   ├── Olahraga
│   │   ├── Seni & Musik
│   │   ├── Sains & Teknologi
│   │   └── Sosial & Kepemimpinan
│   │
│   └── Footer
│
├── PENDAFTARAN
│   ├── Hero Pendaftaran
│   ├── Informasi Pendaftaran
│   ├── Syarat & Biaya
│   ├── Gelombang Pendaftaran
│   ├── Formulir Pendaftaran Online
│   ├── Bantuan Pendaftaran
│   └── Footer
│
└── HUBUNGI KAMI
    ├── Hero Kontak
    ├── Informasi Kontak
    ├── Jam Operasional
    ├── Media Sosial
    ├── Lokasi Sekolah
    ├── Formulir Kontak
    ├── FAQ
    └── Footer
```

### **Struktur Folder**

---

## **5. BUKTI RESPONSIVITAS & TAMPILAN**

### **Halaman Utama (Homepage)**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/f8c9769d-d165-4d93-b480-5240f2b59c53" width="900" alt="Homepage Desktop View" />

#### **Tablet View (768px – 1023px)**
<img src="https://github.com/user-attachments/assets/4872c939-5adb-460a-9152-9122f38e4317" width="600" alt="Homepage Tablet View" />

#### **Mobile View (<768px)**
<img src="https://github.com/user-attachments/assets/93def76a-24af-431c-9d55-8b6c65e48668" width="320" alt="Homepage Mobile View" />

---

### **Halaman Profil Sekolah**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/5bb40585-a1dc-4239-b5c0-52d494e428d7" width="900" alt="Profil Sekolah Desktop View" />

#### **Tablet View (768px – 1023px)**
<img src="https://github.com/user-attachments/assets/f67bf7c3-a813-4a64-8270-29f6b2ae4a02" width="600" alt="Profil Sekolah Tablet View" />

#### **Mobile View (<768px)**
<img src="https://github.com/user-attachments/assets/b4fdf44b-a877-49c2-a7b4-ca3f731a80f0" width="320" alt="Profil Sekolah Mobile View" />

---

### **Halaman Program Sekolah**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/bcd1aa9a-9226-4a3f-a4f5-6b260eceb613" width="900" alt="Program Sekolah Desktop View" />

#### **Tablet View (768px – 1023px)**
<img src="https://github.com/user-attachments/assets/a7e98a8f-9eea-4490-96ad-122074a366b4" width="600" alt="Program Sekolah Tablet View" />

#### **Mobile View (<768px)**
<img src="https://github.com/user-attachments/assets/77ce443f-cc5d-461f-a0bf-1dc1f1ebb9dd" width="320" alt="Program Sekolah Mobile View" />

---

### **Halaman Pendaftaran**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/b8b1d233-4f0b-4172-b2bf-f275fac6f56f" width="900" alt="Pendaftaran Desktop View" />

#### **Tablet View (768px – 1023px)**
<img src="https://github.com/user-attachments/assets/08eea304-b7c7-4902-9f31-bb5d865a86f0" width="600" alt="Pendaftaran Tablet View" />

#### **Mobile View (<768px)**
<img src="https://github.com/user-attachments/assets/586b08a1-ac09-4969-b4ac-dfbc412e1f11" width="320" alt="Pendaftaran Mobile View" />

---

### **Halaman Hubungi Kami**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/0990c635-cb21-4f75-9ff4-67397d54cfbb" width="900" alt="Hubungi Kami Desktop View" />

#### **Tablet View (768px – 1023px)**
<img src="https://github.com/user-attachments/assets/2f24f5b6-a7fd-4a30-b91f-9ed130692c97" width="600" alt="Hubungi Kami Tablet View" />

#### **Mobile View (<768px)**
<img src="https://github.com/user-attachments/assets/3a7c286e-38f3-4266-b058-ce4d533ed60c" width="320" alt="Hubungi Kami Mobile View" />

---

## **6. BUKTI AKSESIBILITAS**

### **1. Lighthouse Audit Results**

#### **Performance Score**

#### **Accessibility Score**

#### **Best Practices Score**

#### **SEO Score**

### **2. Color Contrast Check**

#### **Text Contrast Analysis**

#### **Colorblind Simulation**

### **3. Keyboard Navigation Test**

### **4. Screen Reader Compatibility**

---

## **7. INFORMASI TEKNIS TAMBAHAN**

### **GitHub Repository**

### **Live Website**

### **Commit History & Collaboration**

### **Browser Compatibility**

---

**Dokumen ini dibuat dengan ❤️ oleh Kelompok [NOMOR KELOMPOK]**
**Mata Kuliah Desain Web - Universitas Pancasila**
**Semester Ganjil 2025/2026**
