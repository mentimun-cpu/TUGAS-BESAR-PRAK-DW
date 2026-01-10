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
SITEMAP WEBSITE SMA PANCASILA
│
├── NAVBAR (Semua Halaman)
│   ├── Logo SMA Pancasila
│   ├── Beranda (index.html)
│   ├── Profil (profil.html)
│   ├── Program (program.html)
│   ├── Pendaftaran (pendaftaran.html)
│   └── Hubungi Kami (kontak.html)
│
├── BERANDA (index.html)
│   ├── Hero Section
│   │   ├── Background Image Sekolah
│   │   ├── Judul Utama
│   │   └── Tagline Sekolah
│   │
│   ├── Profil Singkat Sekolah
│   │   ├── Visi Sekolah
│   │   ├── Misi Sekolah
│   │   └── Nilai-Nilai Sekolah
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
├── PROFIL (profil.html)
│   ├── Hero Profil
│   │   ├── Judul Profil Sekolah
│   │   └── Deskripsi Lengkap Sekolah
│   │
│   ├── Sejarah Sekolah
│   │   ├── Tahun Pendirian
│   │   └── Perkembangan Sekolah
│   │
│   ├── Fasilitas Sekolah
│   │   ├── Laboratorium IPA
│   │   ├── Laboratorium Komputer
│   │   ├── Perpustakaan
│   │   ├── Lapangan Olahraga
│   │   ├── Kantin Sehat
│   │   └── Area WiFi Sekolah
│   │
│   ├── Prestasi Sekolah
│   │   ├── Prestasi Akademik
│   │   └── Prestasi Non-Akademik
│   │
│   └── Footer
│
├── PROGRAM (program.html)
│   ├── Hero Program
│   │   ├── Judul "Program Sekolah"
│   │   └── Deskripsi Program Unggulan
│   │
│   ├── Program Peminatan
│   │   ├── Program IPA
│   │   ├── Program IPS
│   │   └── Program Bahasa
│   │
│   ├── Program Unggulan
│   │   ├── Kelas Olimpiade
│   │   ├── Program Bahasa Internasional
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
├── PENDAFTARAN (pendaftaran.html)
│   ├── Hero Pendaftaran
│   │   ├── Judul: "Pendaftaran Siswa Baru"
│   │   ├── Tahun Ajaran 2025/2026
│   │   └── Ilustrasi Ikon Kelulusan
│   │
│   ├── Informasi Pendaftaran
│   │   ├── Sekretariat
│   │   │   ├── Nama Sekolah
│   │   │   ├── Alamat Lengkap Sekolah
│   │   │   └── Kode Pos
│   │   │
│   │   ├── Jam Pelayanan
│   │   │   ├── Senin – Jumat (08.00 – 16.00 WIB)
│   │   │   ├── Sabtu (08.00 – 12.00 WIB)
│   │   │   └── Minggu & Hari Libur (Tutup)
│   │   │
│   │   └── Pendaftaran Online
│   │       ├── Website Resmi PPDB
│   │       └── Aplikasi SMA Pancasila (Play Store & App Store)
│   │
│   ├── Syarat & Biaya
│   │   ├── Biaya Masuk
│   │   │   ├── Biaya Pendaftaran
│   │   │   ├── SPP Bulanan
│   │   │   └── Uang Pangkal (dapat dicicil)
│   │   │
│   │   └── Persyaratan Dokumen
│   │       ├── Formulir Pendaftaran
│   │       ├── Fotokopi Akta Kelahiran
│   │       ├── Fotokopi Kartu Keluarga
│   │       ├── Fotokopi Rapor Kelas 7–9
│   │       ├── Pas Foto (3x4 & 4x6)
│   │       └── Surat Keterangan Lulus / Aktif
│   │
│   ├── Gelombang Pendaftaran 2025/2026
│   │   ├── Gelombang 1
│   │   │   ├── Periode: Februari – April 2025
│   │   │   ├── Kuota: 100 Siswa
│   │   │   └── Diskon 20%
│   │   │
│   │   ├── Gelombang 2
│   │   │   ├── Periode: Mei – Juli 2025
│   │   │   ├── Kuota: 150 Siswa
│   │   │   └── Diskon 10%
│   │   │
│   │   └── Gelombang 3
│   │       ├── Periode: Agustus 2025
│   │       ├── Kuota: 50 Siswa
│   │       └── Status: Kuota Terbatas
│   │
│   ├── Formulir Pendaftaran Online
│   │   ├── Nama Lengkap
│   │   ├── Email
│   │   ├── Nomor WhatsApp
│   │   ├── Alamat Lengkap
│   │   ├── Asal Sekolah
│   │   ├── Pilihan Program
│   │   ├── Catatan Tambahan (Opsional)
│   │   └── Tombol "Daftar Sekarang"
│   │
│   ├── Bantuan Pendaftaran
│   │   ├── Telepon
│   │   ├── WhatsApp
│   │   └── Email Resmi PPDB
│   │
│   └── Footer Pendaftaran
│
├── HUBUNGI KAMI (kontak.html)
│   ├── Alamat Sekolah
│   ├── Nomor Telepon
│   ├── Email Resmi
│   ├── WhatsApp
│   ├── Media Sosial
│   └── Google Maps Lokasi
│
└── FOOTER (Semua Halaman)
    ├── Alamat Sekolah
    ├── Jam Pelayanan
    ├── Cara Pendaftaran
    │   ├── Isi Formulir Online
    │   ├── Verifikasi Dokumen
    │   ├── Pembayaran
    │   ├── Tes Seleksi
    │   └── Pengumuman Hasil
    ├── Informasi Kontak
    ├── Media Sosial
    └── Copyright © SMA Pancasila
├── HUBUNGI KAMI (kontak.html)
│   ├── Header / Hero Section
│   │   ├── Judul Halaman: "Hubungi Kami"
│   │   ├── Subjudul: "Kami siap membantu dan menjawab semua pertanyaan Anda"
│   │   └── Ilustrasi Ikon Customer Service
│
│   ├── Informasi Kontak (Card Section)
│   │   ├── Sekretariat Sekolah
│   │   │   ├── Nama Sekolah: SMA Pancasila
│   │   │   ├── Alamat Lengkap
│   │   │   │   ├── Jl. Pendidikan No. 123
│   │   │   │   ├── Kelurahan Pancasila
│   │   │   │   ├── Kecamatan Pancoran
│   │   │   │   ├── Kota Jakarta Selatan
│   │   │   │   └── Provinsi DKI Jakarta
│   │   │   └── Kode Pos: 12780
│   │   │
│   │   ├── Telepon & Fax
│   │   │   ├── Telepon: (021) 123-4567
│   │   │   └── Fax: (021) 123-4568
│   │   │
│   │   ├── Email Resmi
│   │   │   ├── Umum: info@smapancasila.sch.id
│   │   │   ├── Pendaftaran: pendaftaran@smapancasila.sch.id
│   │   │   └── Humas: humas@smapancasila.sch.id
│   │   │
│   │   └── WhatsApp
│   │       ├── Informasi: 0812-3456-7890
│   │       └── Pendaftaran: 0813-4567-8901
│
│   ├── Jam Operasional (Card Section)
│   │   ├── Sekretariat
│   │   │   ├── Senin – Jumat: 08.00 – 16.00 WIB
│   │   │   ├── Sabtu: 08.00 – 12.00 WIB
│   │   │   └── Minggu & Hari Libur: Tutup
│   │   │
│   │   ├── Kegiatan Belajar Mengajar
│   │   │   ├── Senin – Kamis: 07.00 – 15.30 WIB
│   │   │   ├── Jumat: 07.00 – 14.00 WIB
│   │   │   └── Sabtu: Ekstrakurikuler & Kegiatan Khusus
│   │   │
│   │   └── Perpustakaan
│   │       ├── Senin – Jumat: 08.00 – 17.00 WIB
│   │       └── Sabtu: 08.00 – 13.00 WIB
│
│   ├── Media Sosial (Card Section)
│   │   ├── Instagram
│   │   ├── Facebook
│   │   ├── YouTube
│   │   ├── Twitter (X)
│   │   ├── TikTok
│   │   └── LinkedIn
│
│   ├── Lokasi Sekolah
│   │   ├── Peta Lokasi (Google Maps Embed)
│   │   │   └── Marker Lokasi SMA Pancasila
│   │   │
│   │   └── Akses Transportasi
│   │       ├── Kendaraan Pribadi
│   │       │   └── Akses via Tol Pancoran → Jl. Pendidikan
│   │       │
│   │       ├── Transportasi Umum
│   │       │   ├── TransJakarta: Koridor 6 (Ragunan – Dukuh Atas)
│   │       │   ├── Angkot: Rute 02, 05, 07
│   │       │   └── Bus Kota: P19, P20
│   │       │
│   │       └── Area Parkir
│   │           ├── Parkir Kendaraan Pribadi
│   │           └── Parkir Bus Sekolah
│
│   ├── Formulir Kontak (WhatsApp Form)
│   │   ├── Nama Lengkap *
│   │   ├── Email *
│   │   ├── Subjek Pesan *
│   │   │   ├── Informasi Umum
│   │   │   ├── Pendaftaran
│   │   │   ├── Akademik
│   │   │   └── Kerja Sama
│   │   ├── Pesan *
│   │   ├── Checkbox Newsletter
│   │   ├── Tombol: "Kirim via WhatsApp"
│   │   └── Catatan: Redirect ke WhatsApp
│
│   ├── FAQ (Pertanyaan yang Sering Diajukan)
│   │   ├── Kapan pendaftaran siswa baru dibuka?
│   │   ├── Berapa biaya masuk SMA Pancasila?
│   │   ├── Apakah tersedia program beasiswa?
│   │   ├── Bagaimana sistem pembelajaran?
│   │   └── Apakah tersedia asrama siswa?
│
│   └── Footer Halaman Kontak
└── FOOTER (Global)
    ├── Alamat Sekolah
    │   └── Jl. Pendidikan No. 123, Pancoran, Jakarta Selatan
    │
    ├── Kontak Darurat
    │   ├── Telepon Sekolah
    │   ├── UGD Sekolah
    │   └── Keamanan
    │
    ├── Layanan Cepat
    │   ├── Pendaftaran Online
    │   ├── Program Sekolah
    │   ├── Prestasi Sekolah
    │   └── Beranda
    │
    ├── Media Sosial
    │   ├── Instagram
    │   ├── Facebook
    │   ├── YouTube
    │   └── TikTok
    │
    └── Copyright
        └── © SMA Pancasila


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
