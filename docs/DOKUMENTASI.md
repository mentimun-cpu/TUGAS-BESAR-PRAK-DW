# **LAPORAN PROYEK WEBSITE PROFESIONAL**
**Tugas Besar Prak. Desain Web - Universitas Pancasila**

---

## **1. IDENTITAS KELOMPOK**


| No | Nama Lengkap | NIM | Peran | Kontribusi |
|----|-------------|-----|-------|------------|
| 1 | Farhan Ridwan Badawi | [4524210037] | Project Manager | Koordinasi tim, dokumentasi, deployment |
| 2 | Ketut Sumantre | [4524210048] | UI/UX Designer | Wireframe, Fitur Beranda |
| 3 | Fais Base Febrian | [4524210033] | Frontend Developer 1 | Struktur folder, framework implementation |
| 4 | Jevrene Samny Pratama | [4524210046] | Frontend Developer 2 | A11y implementation, HTML semantik |
| 5 | Bunga Putri Nuriman | [4524210021] | Frontend Developer 3 | Responsivitas, testing cross-device |
| 6 | Elsa Setia Marcsa | [4524210030] | Tester & Dokumen |Fitur Halaman Program |

---
## **2. LATAR BELAKANG**

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

## **3. PENJELASAN FITUR - FITUR APLIKASI **

### **1. Beranda**
Fitur ini adalah halaman utama yang memberikan gambaran umum tentang sekolah, program, dan kegiatan kepada pengunjung. Berfungsi sebagai pintu masuk utama untuk mengenalkan sekolah secara visual dan informatif.

Isi Fitur:
1. Slider Gambar (Carousel) – Menampilkan foto-foto sekolah, kegiatan belajar, ekstrakurikuler, dan prestasi.
2. Profil Sekolah Singkat – Pengenalan singkat tentang sekolah, sejarah, dan visi misi.
3. Program Peminatan – Preview tiga jurusan: IPA, IPS, dan Bahasa dengan tautan ke halaman program.
4. Program Unggulan – Menampilkan program khusus seperti Kelas Olimpiade, Bahasa Internasional, Digital Literacy, dan Leadership.
5. Footer dengan Kontak & Media Sosial – Informasi kontak, alamat, dan tautan pendaftaran.
  
   Letak dalam Kode (index.html):
- Slider
  <img width="2296" height="2040" alt="slider index" src="https://github.com/user-attachments/assets/b63ebb3f-e441-467a-b79f-e8a58ff3544b" />
- Profil Sekolah
  <img width="2172" height="1394" alt="Proil index" src="https://github.com/user-attachments/assets/94df298d-2c33-4855-8ac6-150fce2cdc78" />
- Program Peminatan
  <img width="2156" height="2002" alt="Peminatan index" src="https://github.com/user-attachments/assets/e3d007ab-8f87-4bff-891b-3a08c1ed958e" />
- Program Unggulan
  <img width="2604" height="2306" alt="Unggulan index" src="https://github.com/user-attachments/assets/a949e62f-e5a9-487c-b6ce-5ed14800e5c3" />
- Footer
  <img width="2002" height="2154" alt="Footer index" src="https://github.com/user-attachments/assets/f271bd91-ef94-4ee9-b0f1-e5094f268c05" />

### **2. Profil**
Fitur ini memberikan informasi lengkap dan mendetail tentang sejarah, visi misi, fasilitas, dan prestasi sekolah. Bertujuan untuk memberikan kepercayaan dan wawasan yang mendalam kepada calon siswa dan orang tua.

Isi Fitur:
1. Sejarah Sekolah – Cerita singkat tentang pendirian dan perkembangan sekolah.
2. Visi & Misi – Dijelaskan dalam bentuk kartu yang terstruktur.
3. Fasilitas Sekolah – Daftar fasilitas lengkap dengan ikon dan deskripsi.
4. Prestasi Sekolah – Dikelompokkan menjadi prestasi akademik dan non-akademik.
5. Gambar Pendukung – Visualisasi sejarah dan fasilitas.

Letak dalam Kode (profil.html):
- Hero Header
  <img width="1972" height="786" alt="hero profil" src="https://github.com/user-attachments/assets/36d58f08-4fbf-469c-a4c8-b41a02a8288a" />
- Sejarah
  <img width="1988" height="1166" alt="sejarah profil" src="https://github.com/user-attachments/assets/d8aaa5c7-54f6-4d0e-9c18-d11a905f1d64" />
- Visi Misi
  <img width="2064" height="2002" alt="fasilitas profil" src="https://github.com/user-attachments/assets/0e9974ec-3cd4-466b-a57e-2060e2bef18c" />
- Fasilitas
  <img width="2080" height="3370" alt="Fasilitas yang bener profil" src="https://github.com/user-attachments/assets/0b3c90c7-fb3b-4f4a-b945-46c777f1cff7" />
- Prestasi
  <img width="1972" height="1850" alt="Prestasi profil" src="https://github.com/user-attachments/assets/dcc6ef4c-5061-4e9d-a35c-86d36dc20603" />
- Footer
  <img width="2018" height="1774" alt="Footer profil" src="https://github.com/user-attachments/assets/86acd559-184a-41ce-acb5-b0853a8ec339" />
### **3. Program**

Fitur ini menjelaskan secara rinci program peminatan (IPA, IPS, Bahasa) dan program unggulan yang ditawarkan sekolah. Dilengkapi dengan informasi mata pelajaran, fasilitas, dan prospek karir.

Isi Fitur:

1. Program Peminatan – IPA, IPS, dan Bahasa dengan detail lengkap.
2. Program Unggulan – Kelas Olimpiade, Bahasa Internasional, Digital Literacy, dan Leadership.
3. Ekstrakurikuler – Daftar kegiatan olahraga, seni, sains, dan sosial.
4. Desain Kartu Interaktif – Setiap program ditampilkan dalam kartu yang informatif dan menarik.

Letak dalam Kode (program.html):
- Hero Section
  <img width="2018" height="786" alt="Hero Program" src="https://github.com/user-attachments/assets/7f69e609-8190-4ea1-b9ba-a14992befce0" />
- Program Peminatan
  <img width="2110" height="4928" alt="Peminatan Program" src="https://github.com/user-attachments/assets/a8b151e7-5ae9-4fee-a7e9-34e5d66ecfe2" />
- Program Unggulan
  <img width="2016" height="4852" alt="Unggulan Program" src="https://github.com/user-attachments/assets/ddc9d9da-9570-49ca-a8f1-bde6a407c74e" />
- Ekstrakurikuler
  <img width="2972" height="2192" alt="ekskul Program" src="https://github.com/user-attachments/assets/b8e8bb49-05ce-42d4-a1b4-8ddef52a12c5" />
- Footer
  <img width="2002" height="1660" alt="Footer Program" src="https://github.com/user-attachments/assets/f70aeab8-7e41-4f5f-8631-a7aff505eb77" />

### **4. Pendaftaran**

### **5. Kontak**
Fitur Kontak pada website SMA Pancasila berfungsi sebagai sarana komunikasi antara pihak sekolah dengan masyarakat, calon siswa, orang tua, maupun mitra. Fitur ini dirancang lengkap agar pengguna dapat memperoleh informasi dan menghubungi sekolah dengan mudah, cepat, dan jelas.

1. Hero Section “Hubungi Kami”

Bagian awal halaman kontak menampilkan judul “Hubungi Kami” beserta deskripsi singkat.
Tujuannya adalah:

Memberi penegasan bahwa halaman ini khusus untuk komunikasi.

Menarik perhatian pengguna dengan ikon headset sebagai simbol layanan bantuan.

2. Informasi Kontak Sekolah

Pada bagian Informasi Kontak, website menampilkan data kontak resmi sekolah dalam bentuk kartu (card), meliputi:

Alamat lengkap sekolah (nama sekolah, jalan, kecamatan, kota, dan kode pos)

Nomor telepon dan fax

Alamat email untuk keperluan umum, pendaftaran, dan humas

Nomor WhatsApp khusus informasi dan pendaftaran

Fitur ini memudahkan pengunjung untuk memilih media komunikasi sesuai kebutuhan mereka.

3. Jam Operasional

Bagian Jam Operasional memberikan informasi waktu layanan sekolah, yang dibagi menjadi:

Jam operasional sekretariat

Jam kegiatan belajar mengajar

Jam layanan perpustakaan

Dengan adanya fitur ini, pengunjung dapat mengetahui kapan waktu yang tepat untuk menghubungi atau datang langsung ke sekolah.

4. Media Sosial

Fitur Media Sosial menyediakan tombol menuju berbagai platform sosial sekolah seperti:

Instagram

Facebook

YouTube

Twitter

TikTok

LinkedIn

Tujuan fitur ini adalah:

Memperluas jangkauan informasi sekolah

Memudahkan masyarakat mengikuti kegiatan dan pengumuman terbaru

Meningkatkan citra dan kehadiran digital sekolah

5. Peta Lokasi dan Akses Transportasi

Bagian Lokasi Sekolah menampilkan:

Peta Google Maps yang terintegrasi langsung, sehingga pengguna dapat melihat lokasi sekolah secara visual.

Informasi akses transportasi, baik kendaraan pribadi maupun transportasi umum.

Informasi area parkir sekolah.

Fitur ini membantu pengunjung menemukan lokasi sekolah dengan lebih mudah dan akurat.

6. Form Kontak WhatsApp

Fitur Form Kontak WhatsApp memungkinkan pengguna mengirim pesan langsung ke sekolah melalui WhatsApp dengan cara yang praktis.
Form ini terdiri dari:

Nama lengkap

Email

Subjek pesan

Isi pesan

Opsi berlangganan newsletter

Setelah form dikirim, pengguna akan diarahkan ke WhatsApp untuk melanjutkan pengiriman pesan.
Fitur validasi memastikan data yang diinput lengkap dan benar sebelum dikirim.

7. FAQ (Frequently Asked Questions)

Bagian FAQ berisi pertanyaan yang sering diajukan, seperti:

Jadwal pendaftaran siswa baru

Biaya masuk sekolah

Program beasiswa

Sistem pembelajaran

Fasilitas asrama

Fitur ini membantu pengguna mendapatkan jawaban cepat tanpa harus menghubungi sekolah secara langsung.

8. Footer Kontak

Pada bagian footer, ditampilkan kembali informasi penting seperti:

Alamat sekolah

Kontak darurat (telepon, UGD, keamanan)

Tautan layanan cepat (pendaftaran, program, profil)

Footer berfungsi sebagai ringkasan kontak yang selalu terlihat di bagian bawah halaman. 
<img width="952" height="798" alt="image" src="https://github.com/user-attachments/assets/057770d6-6580-4a8b-b8eb-6fd258be6519" />
<img width="880" height="775" alt="image" src="https://github.com/user-attachments/assets/dfe1d9c3-394c-4a8a-ac64-b80ae82a434f" />
<img width="705" height="784" alt="image" src="https://github.com/user-attachments/assets/42571aa2-6a3f-4c44-91f6-8d723d444691" />
<img width="974" height="759" alt="image" src="https://github.com/user-attachments/assets/f2273e8d-4998-4490-88a5-e8c59d318ca6" />
<img width="972" height="687" alt="image" src="https://github.com/user-attachments/assets/119978eb-c41f-401a-a95d-dc18538ee869" />
<img width="726" height="872" alt="image" src="https://github.com/user-attachments/assets/fc7a6655-1f67-47c1-ba80-694ca3a1d5d1" />
<img width="1164" height="829" alt="image" src="https://github.com/user-attachments/assets/d67e294a-1f90-4f9b-829e-2071824c2893" />
<img width="1301" height="413" alt="image" src="https://github.com/user-attachments/assets/f169edb2-3377-4b4f-bb24-0ca8ab9426ab" />
<img width="774" height="677" alt="image" src="https://github.com/user-attachments/assets/0954f715-2e74-4dc1-b992-73deb20c5518" />

---



## 4. WIREFRAME
🔗 Wireframe Figma:
https://www.figma.com/design/rWYH4rAVBBmzttoAgVHnUa/Untitled?node-id=4-960&t=R1Q8bCnUJeuwsIf5-0

---

## **5. TANGKAP LAYAR HASIL WEBSITE**

### **Halaman Utama (Homepage)**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/f8c9769d-d165-4d93-b480-5240f2b59c53" width="900" alt="Homepage Desktop View" />

---

### **Halaman Profil Sekolah**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/5bb40585-a1dc-4239-b5c0-52d494e428d7" width="900" alt="Profil Sekolah Desktop View" />

---

### **Halaman Program Sekolah**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/bcd1aa9a-9226-4a3f-a4f5-6b260eceb613" width="900" alt="Program Sekolah Desktop View" />

---

### **Halaman Pendaftaran**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/b8b1d233-4f0b-4172-b2bf-f275fac6f56f" width="900" alt="Pendaftaran Desktop View" />

---

### **Halaman Hubungi Kami**

#### **Desktop View (≥1024px)**
<img src="https://github.com/user-attachments/assets/0990c635-cb21-4f75-9ff4-67397d54cfbb" width="900" alt="Hubungi Kami Desktop View" />

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

## **7. Struktur Halaman (Sitemap Website)**

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


## **8. LINK GITHUB & WEBSITE**

### **GitHub Repository**
https://github.com/mentimun-cpu/TUGAS-BESAR-PRAK-DW.git

### **Live Website**
https://mentimun-cpu.github.io/TUGAS-BESAR-PRAK-DW/


---
**Mata Kuliah Prak. Desain Web - Universitas Pancasila**
**Semester Ganjil 2025/2026**
