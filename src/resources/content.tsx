import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad",
  lastName: "Hafidzh",
  name: "Muhammad Hafidzh Pribadi",
  role: "UI/UX Designer & Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "mhmhafidzz@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Indonesian", "English", "Arabic"],
  locale: "id",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Cerita seputar UI/UX, Creative Multimedia, dan pengembangan software & IoT.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/apoodverse",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mhafidzhpribadi",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/6282276537750",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  label: "Home",
  title: `${person.name} – Portofolio`,
  description: "Portofolio profesional Muhammad Hafidzh Pribadi",
  headline: <>Crafting Intuitive UI/UX, Creative Multimedia, and Scalable Tech Solutions</>,
  subline: (
    <>
      Fresh Graduate S1 Teknik Komputer Universitas Syiah Kuala dengan fokus pada UI/UX Design,
      Creative Multimedia (Blender & Unity AR), serta Software & IoT Development.
    </>
  ),
  image: {
    src: "/images/avatar.jpg",
    alt: `${person.name}`,
    width: 1200,
    height: 630,
  },
};

const about: About = {
  label: "About",
  title: "About me",
  description: `Profil dan latar belakang profesional ${person.name}`,
  tableOfContents: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
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
      </>
    ),
  },
  work: {
    display: true,
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
        images: [],
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
        images: [],
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
        images: [],
      },
    ],
  },
  studies: {
    display: true,
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
        name: "SMA",
        description: (
          <>
            <p>
              MIPA (Matematika dan Ilmu Pengetahuan Alam).
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
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "UI/UX & Creative Multimedia",
        description: (
          <>
            Merancang antarmuka produk digital di Figma, membuat model 3D dengan Blender, serta
            mengembangkan aplikasi interaktif dan Augmented Reality (AR) menggunakan Unity Engine.
          </>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Blender", icon: "cube" },
          { name: "Unity Engine", icon: "code" },
          { name: "Augmented Reality", icon: "grid" },
        ],
      },
      {
        title: "Programming & Web",
        description: (
          <>
            Mengimplementasikan logika program melalui proyek berbasis Python dan C#, serta
            membangun antarmuka web yang terstruktur dan responsif.
          </>
        ),
        tags: [
          { name: "Python", icon: "code" },
          { name: "C#", icon: "code" },
          { name: "HTML5", icon: "globe" },
          { name: "CSS3", icon: "globe" },
          { name: "JavaScript", icon: "code" },
        ],
      },
      {
        title: "IoT & Hardware Integration",
        description: (
          <>
            Membangun sistem tertanam dan otomasi perangkat keras berbasis mikrokontroler untuk
            solusi monitoring dan kendali cerdas.
          </>
        ),
        tags: [
          { name: "ESP32", icon: "cpu" },
          { name: "Arduino", icon: "code" },
          { name: "Sensors Integration", icon: "refresh" },
          { name: "IoT Automation", icon: "globe" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
