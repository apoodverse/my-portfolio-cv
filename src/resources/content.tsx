import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad",
  lastName: "Hafidzh",
  name: `Muhammad Hafidzh Pribadi`,
  role: "UI/UX Designer & Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "mhmhafidzz@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Indonesian", "English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
  locale: "id", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Cerita seputar UI/UX, Creative Multimedia, dan pengembangan software & IoT</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/apoodverse",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-hafidzh-pribadi",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/6282276033160",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/mhmhafidzz",
    essential: false,
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://tiktok.com/@poddskie",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting Intuitive UI/UX, Creative Multimedia, and Scalable Tech Solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Innovillage 2025</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Top 180 Innovation
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Fresh Graduate S1 Teknik Komputer Universitas Syiah Kuala dengan fokus pada{" "}
      <Text as="span" size="xl" weight="strong">UI/UX Design</Text>, Creative Multimedia
      (Blender & Unity AR), serta <br /> Software & IoT Development.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/6282276033160",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Lulusan S1 Teknik Komputer dari Universitas Syiah Kuala yang memiliki semangat tinggi
        untuk mengembangkan karier di dunia kerja, dengan fokus dan minat pada UI/UX Design,
        Internet of Things (IoT), Creative Multimedia, serta Software Development. Berpengalaman
        merancang antarmuka produk digital di Figma, membuat model 3D dengan Blender, serta
        mengembangkan aplikasi interaktif dan Augmented Reality (AR) menggunakan Unity Engine.
        Terbiasa mengimplementasikan logika program melalui proyek berbasis Python dan C#.
        <br />
        <br />
        Selain keahlian teknis, berbagai pengalaman selama masa studi membekali saya dengan
        kemampuan analitis, pemecahan masalah (problem solving), serta komunikasi interpersonal
        yang kuat. Pengalaman kepemimpinan dan manajemen tim terasah melalui peran sebagai Ketua
        Panitia PBMT 2024 (KKN Tematik untuk implementasi ilmu teknik langsung ke masyarakat desa
        binaan), Kepala Divisi Humas Himpunan, serta Kepala Divisi Sponsorship & Partnership.
        Pengalaman akademik saya diperkuat melalui partisipasi dalam program MBKM Kampus Merdeka
        2024 dan Dicoding Academy, kepemilikan Sertifikasi Kompetensi BNSP IoT Device Engineering,
        serta pencapaian Top 180 Innovillage 2025. Cepat beradaptasi dengan teknologi baru,
        bertanggung jawab, dan berkomitmen memberikan kontribusi positif dalam menghadirkan
        solusi digital yang inovatif, fungsional, dan bernilai guna, serta memiliki keinginan
        kuat untuk terus belajar.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work & Organizational Experience",
    experiences: [
      {
        company: "Pekan Bakti Mahasiswa Teknik (PBMT) 2024",
        timeframe: "2024",
        role: "[PBMT 2024] Project Leader (Ketua Panitia)",
        achievements: [
          <>
            Memimpin dan mengoordinasikan program KKN Tematik pengabdian masyarakat tahunan
            Fakultas Teknik USK di desa binaan, berkolaborasi dengan puluhan dosen pengabdi dan
            mahasiswa lintas jurusan.
          </>,
          <>
            Menyusun dan mengeksekusi timeline kegiatan dari perencanaan hingga pelaksanaan,
            memastikan seluruh program kerja divisi berjalan sesuai target waktu.
          </>,
          <>
            Mengelola perizinan lintas instansi daerah (kecamatan, desa, dan pemangku kepentingan
            setempat) serta mengoordinasikan logistik untuk seluruh rangkaian kegiatan.
          </>,
          <>
            Memimpin rapat koordinasi rutin antardivisi dan menjadi jembatan komunikasi utama
            antara panitia, dosen pembimbing, dan aparat desa binaan.
          </>,
          <>
            <p style={{ margin: 0 }}>Dokumentasi kegiatan lapangan:</p>
            <img
              src="/images/experience/pbmt-2024-1.jpg"
              alt="Dokumentasi kegiatan PBMT 2024 di desa binaan"
              style={{ width: "100%", maxWidth: 480, borderRadius: 8, marginTop: 8 }}
            />
          </>,
        ],
        images: [
          {
            src: "/images/experience/pbmt-2024-1.jpg",
            alt: "Koordinasi panitia PBMT 2024 di lapangan",
            width: 16,
            height: 9,
          },
          {
            src: "/images/experience/pbmt-2024-2.jpg",
            alt: "Kegiatan implementasi program PBMT 2024 di desa binaan",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Himpunan Mahasiswa Teknik Komputer",
        timeframe: "2023 - 2024",
        role: "[HMTK] Head of Public Relations (Ketua Divisi Humas)",
        achievements: [
          <>
            Merancang dan menjalankan strategi komunikasi internal-eksternal himpunan, termasuk
            publikasi kegiatan dan pengelolaan media sosial organisasi.
          </>,
          <>
            Membangun dan menjaga branding organisasi agar konsisten di seluruh materi publikasi
            dan kanal komunikasi resmi himpunan.
          </>,
          <>
            Menjalin dan merawat relasi kelembagaan dengan pihak kampus, himpunan mahasiswa lain,
            serta mitra eksternal untuk mendukung kegiatan organisasi.
          </>,
          <>
            <p style={{ margin: 0 }}>Dokumentasi kegiatan divisi:</p>
            <img
              src="/images/experience/hmtk-humas-1.jpg"
              alt="Dokumentasi kegiatan Divisi Humas HMTK"
              style={{ width: "100%", maxWidth: 480, borderRadius: 8, marginTop: 8 }}
            />
          </>,
        ],
        images: [
          {
            src: "/images/experience/hmtk-humas-1.jpg",
            alt: "Kegiatan publikasi dan branding Divisi Humas HMTK",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Annual Event Himpunan",
        timeframe: "2022 - 2023",
        role: "[Annual Event] Head of Sponsorship & Partnership",
        achievements: [
          <>
            Memimpin tim untuk mengidentifikasi, menghubungi, dan bernegosiasi dengan calon mitra
            instansi dan perusahaan eksternal guna mendukung pendanaan acara tahunan.
          </>,
          <>
            Menyusun proposal kerja sama dan paket sponsorship yang disesuaikan dengan kebutuhan
            masing-masing mitra.
          </>,
          <>
            Mengelola hubungan pasca-kerja sama dengan sponsor, termasuk pemenuhan kewajiban
            eksposur brand sesuai kesepakatan.
          </>,
          <>
            <p style={{ margin: 0 }}>Dokumentasi kegiatan sponsorship:</p>
            <img
              src="/images/experience/annual-event-sponsorship-1.jpg"
              alt="Dokumentasi kegiatan Sponsorship & Partnership Annual Event"
              style={{ width: "100%", maxWidth: 480, borderRadius: 8, marginTop: 8 }}
            />
          </>,
        ],
        images: [
          {
            src: "/images/experience/annual-event-sponsorship-1.jpg",
            alt: "Negosiasi dan kerja sama sponsorship Annual Event Himpunan",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universitas Syiah Kuala",
        description: (
          <>
            <p>
              S1 Teknik Komputer, IPK 3,34. Fokus pada UI/UX Design, Internet of Things (IoT),
              Creative Multimedia, dan Software Development.
            </p>
            <img
              src="/images/kampus-usk.jpg"
              alt="Universitas Syiah Kuala"
              style={{ width: "100%", maxWidth: 480, borderRadius: 8, marginTop: 8 }}
            />
          </>
        ),
      },
      {
        name: "Nama SMA/SMK Kamu",
        description: (
          <>
            <p>
              Jurusan (mis. IPA/IPS/RPL), tahun masuk – tahun lulus. Tambahkan ringkasan singkat
              minat atau prestasi selama masa sekolah di sini.
            </p>
            <img
              src="/images/sma.jpg"
              alt="Sekolah Menengah Atas"
              style={{ width: "100%", maxWidth: 480, borderRadius: 8, marginTop: 8 }}
            />
          </>
        ),
      },
      {
        name: "MBKM Kampus Merdeka",
        description: <p>Program Pembelajaran Mandiri & Implementasi Lapangan, 2024.</p>,
      },
      {
        name: "Dicoding Academy",
        description: <p>Pelatihan Pengembangan Teknologi & Perangkat Lunak.</p>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "UI/UX & Creative Multimedia",
        description: (
          <>
            Merancang antarmuka produk digital di Figma, membuat model 3D dengan Blender, serta
            mengembangkan aplikasi interaktif dan Augmented Reality (AR) menggunakan Unity Engine
            dan Vuforia.
          </>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Blender", icon: "blender" },
          { name: "Unity Engine", icon: "unity" },
          { name: "Augmented Reality (AR/Vuforia)", icon: "vuforia" },
          { name: "Wireframing", icon: "grid" },
          { name: "Prototyping", icon: "layout" },
        ],
        images: [],
      },
      {
        title: "Programming & Web",
        description: (
          <>
            Mengimplementasikan logika program melalui proyek berbasis Python dan C#, serta dasar
            pengembangan web dengan HTML.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "C#", icon: "csharp" },
          { name: "HTML", icon: "html5" },
        ],
        images: [],
      },
      {
        title: "IoT & Embedded Systems",
        description: (
          <>
            Mengembangkan sistem monitoring berbasis mikrokontroler dan cloud database, dengan
            Sertifikasi Kompetensi BNSP IoT Device Engineering.
          </>
        ),
        tags: [
          { name: "ESP32", icon: "cpu" },
          { name: "Arduino", icon: "arduino" },
          { name: "Firebase", icon: "firebase" },
          { name: "BNSP Certified IoT Device Engineering", icon: "certificate" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  display: false, // hidden from navigation for now — enable when posts are ready
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
  //
  // Proyek unggulan yang perlu dibuatkan sebagai file .mdx di app/work/projects:
  // 1. Interactive AR Learning Application – Aplikasi edukasi berbasis Augmented Reality
  //    menggunakan Unity Engine dan Vuforia dengan objek 3D interaktif untuk siswa SMK.
  // 2. IoT Real-Time Monitoring System – Sistem monitoring perangkat pintar berbasis
  //    mikrokontroler ESP32 dan database Firebase.
  // 3. Innovillage Top 180 Innovation Project – Pengembangan solusi inovasi teknologi
  //    terapan untuk menjawab kebutuhan masyarakat desa.
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  display: false, // hidden from navigation until real photos are added
  // Replace with your own gallery images once available
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
