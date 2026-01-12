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
<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/8aaf76e4-5df6-4712-9011-efa3e7cc9cc8" />

#### **Accessibility Score**
<img width="1919" height="637" alt="image" src="https://github.com/user-attachments/assets/817cf7c3-a91f-4fa4-aad4-630f2d2e6c40" />

#### **Best Practices Score**
<img width="1919" height="532" alt="image" src="https://github.com/user-attachments/assets/d53a793f-a736-4ab7-8b25-3c7ba784a5ae" />

#### **SEO Score**
<img width="1919" height="703" alt="image" src="https://github.com/user-attachments/assets/b40ecd6f-9e1d-4154-95aa-138262dd2796" />

Audit Lighthouse dilakukan menggunakan Google Chrome DevTools. Hasil menunjukkan bahwa website telah memenuhi sebagian besar standar aksesibilitas dan praktik terbaik pengembangan web. Skor Accessibility sebesar 82 menandakan bahwa website cukup ramah bagi pengguna, meskipun masih terdapat beberapa aspek minor yang dapat ditingkatkan.


### **2. Color Contrast Check**
Pengujian kontras warna dilakukan menggunakan WebAIM. Pengujian ini bertujuan memastikan keterbacaan teks pada website SMA Pancasila terhadap latar belakangnya. Pengujian difokuskan pada elemen utama seperti navbar, carousel (hero section), tombol, konten teks, dan footer.

primary color: #5c88e0 digunakan untuk teks besarnya dan background.
<img width="940" height="487" alt="image" src="https://github.com/user-attachments/assets/4b9efca5-3c43-4f3f-93b5-6ae68d40c627" />

secondary color: #0059B3 digunakan untuk background content.
<img width="938" height="473" alt="image" src="https://github.com/user-attachments/assets/2214abbc-1719-4522-aeb2-f4b84eccf666" />

color accent: #FFCC00 digunakan untuk beberapa content seperti background button.
<img width="949" height="478" alt="image" src="https://github.com/user-attachments/assets/fe0839fb-d205-4119-b0b9-78d24d882595" />

teks color: #000000 dan background #FFFFFF
<img width="962" height="488" alt="image" src="https://github.com/user-attachments/assets/05365b4d-5e65-4fa3-9ced-e8b8ae86e9e9" />

### **3. Colorblind Simulation
Simulasi buta warna dilakukan untuk memastikan website tetap dapat digunakan oleh pengguna dengan keterbatasan persepsi warna, seperti protanopia, deuteranopia, tritanopia dan achromatopsia. Simulasi dilakukan menggunakan fitur Emulate Vision Deficiencies pada Chrome Dev Tools.
protanopia (buta warna merah)
<img width="1919" height="880" alt="image" src="https://github.com/user-attachments/assets/412a727f-a5f7-4514-ba75-907272608e3b" />

Deuteranopia (buta warna hijau)
<img width="1919" height="846" alt="image" src="https://github.com/user-attachments/assets/b672205f-fef3-47e3-b565-51ab7a2fc362" />

Tritanopia (buta warna biru kuning)
<img width="1919" height="839" alt="image" src="https://github.com/user-attachments/assets/4678986b-432b-4f7b-bc7c-2065b659284e" />

Achromatopsia (buta warna total)
<img width="1919" height="841" alt="image" src="https://github.com/user-attachments/assets/a4a9ace5-43c0-4efc-a96b-e200de4c8f2a" />

Kesimpulan:
#### **Text Contrast Analysis**
Hasil pengujian menunjukkan bahwa sebagian besar warna memiliki rasio kontras yang baik dan telah memenuhi standar WCAG level AA dan AAA. Teks pada navbar dan footer tetap terbaca dengan jelas, sementara tombol memiliki warna yang kontras sehingga mudah dikenali oleh pengguna.
Kontras warna pada website sudah mendukung keterbacaan yang baik bagi pengguna, termasuk pengguna dengan gangguan penglihatan ringan.

#### **Colorblind Simulation**
Hasil simulasi menunjukkan bahwa informasi pada website tidak bergantung pada warna semata. Menu navigasi, tombol, dan konten utama tetap dapat dikenali karena didukung oleh teks, ikon, dan struktur visual yang jelas. Penggunaan ikon Font Awesome juga membantu memperjelas fungsi suatu elemen. 
Website masih dapat digunakan dengan baik oleh pengguna buta warna karena informasi disampaikan melalui teks dan ikon, bukan hanya perbedaan warna.

### **4. Keyboard Navigation Test**
Pengujian navigasi menggunakan keyboard dilakukan untuk memastikan website dapat diakses tanpa menggunakan mouse. Pengujian dilakukan dengan menggunakan tombol Tab, Shift + Tab, Enter, Arrow dan semua Key angka dan huruf.

Hasil pengujian menunjukkan bahwa website SMA PANCASILA bisa di page up dan page down menggunakan tombol arrow pada dikeyboard. Serta pada Menu Pendaftaran di bagian Formulir Pendaftaran dapat di akses menggunakanTab, Shift + Tab, Enter, Arrow dan semua Key angka dan huruf bisa mengakses untuk pengisian formulir. 

### **5. Screen Reader Compatibility**
Pengujian kompatibilitas screen reader dilakukan dengan mengevaluasi struktur HTML dan hasil audit aksesibilitas menggunakan Lighthouse. Website menggunakan struktur HTML semantik seperti <nav>, <main>, <section>, dan <footer>, serta heading yang tersusun secara hierarkis (h1, h2, h3).

Teks pada tombol dan link bersifat deskriptif sehingga dapat dibaca dengan jelas oleh screen reader. Ikon yang digunakan bersifat dekoratif dan tidak mengganggu pembacaan konten utama.
Sebagai pengembangan lebih lanjut, beberapa ikon dapat ditambahkan atribut aria-label agar informasi yang disampaikan menjadi lebih optimal bagi pengguna screen reader.

Kesimpulan:
Website SMA Pancasila telah memiliki struktur yang cukup baik untuk mendukung penggunaan screen reader dan dapat diakses oleh pengguna dengan kebutuhan khusus.
<img width="1101" height="747" alt="image" src="https://github.com/user-attachments/assets/5249e6c5-66c3-4e7a-9d17-dadf3003b74a" />

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
