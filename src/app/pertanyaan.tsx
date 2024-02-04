import React, { useState } from "react";
import { pertanyaan } from "./data";

export default function Pertanyaan() {
  const [jawaban, setJawaban] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [jenjangKarir, setJenjangKarir] = useState("");

  const handleJawaban = (pertanyaanId: number, jawabanValue: string) => {
    setJawaban((prevJawaban) => ({
      ...prevJawaban,
      [pertanyaanId]: jawabanValue,
    }));

    // Move to the next question or set completed to true
    setCurrentQuestion((prevQuestion) => (prevQuestion + 1 < pertanyaan.length ? prevQuestion + 1 : prevQuestion));
    setCompleted(currentQuestion + 1 === pertanyaan.length);
  };

  const dekripsiJenjangKarir = (jenjangKarir: string) => {
    const data = [
      {
        id: 1,
        nama: 'Programmer',
        deskripsi: 'Orang yang membuat program komputer dengan menggunakan bahasa pemrograman tertentu, seperti Java, Python, C++, atau lainnya',
        gaji: 11500000,
        kualifikasi: 'Memiliki kemampuan logika, analisis, dan pemecahan masalah yang baik, menguasai bahasa pemrograman, algoritma, dan struktur data, serta mampu bekerja secara tim',
        jenjang: 'programmer'
      },
      {
        id: 2,
        nama: 'Software Engineer',
        deskripsi: 'Orang yang menerapkan prinsip-prinsip rekayasa perangkat lunak untuk mengembangkan, memelihara, dan meningkatkan kualitas perangkat lunak',
        gaji: 5000000,
        kualifikasi: 'Memiliki pengetahuan dan pengalaman dalam siklus hidup pengembangan perangkat lunak, menguasai bahasa pemrograman, framework, dan tool yang relevan, serta mampu beradaptasi dengan perubahan teknologi dan kebutuhan',
        jenjang: 'software_engineer'
      },
      {
        id: 3,
        nama: 'Web Developer',
        deskripsi: 'Orang yang membuat dan mengembangkan situs web atau aplikasi web dengan menggunakan teknologi web, seperti HTML, CSS, JavaScript, PHP, Ruby, atau lainnya',
        gaji: 6000000,
        kualifikasi: 'Memiliki keterampilan dalam desain web, user interface, user experience, dan responsivitas, menguasai teknologi web front-end, back-end, atau full-stack, serta mampu berkomunikasi dengan klien dan pengguna',
        jenjang: 'web_developer'
      },
      {
        id: 4,
        nama: 'Mobile Developer',
        deskripsi: 'Orang yang membuat dan mengembangkan aplikasi mobile untuk perangkat bergerak, seperti smartphone atau tablet',
        gaji: 7500000,
        kualifikasi: 'Memiliki keterampilan dalam desain aplikasi, user interface, user experience, dan performa, menguasai platform native, seperti Android atau iOS, atau platform cross-platform, seperti React Native atau Flutter, serta mampu mengikuti standar dan guideline yang berlaku',
        jenjang: 'mobile_developer'
      },
      {
        id: 5,
        nama: 'Data Scientist',
        deskripsi: 'Orang yang menggunakan ilmu data, statistik, matematika, dan pemrograman untuk mengumpulkan, menganalisis, dan mengekstrak wawasan dari data',
        gaji: 15000000,
        kualifikasi: 'Memiliki kemampuan matematika, statistik, dan analisis data yang kuat, menguasai bahasa pemrograman, seperti Python atau R, dan tool analisis data, seperti SQL, Excel, atau Tableau, serta mampu menyajikan hasil analisis dengan jelas dan menarik',
        jenjang: 'data_scientist'
      },
      {
        id: 6,
        nama: 'Cybersecurity Analyst',
        deskripsi: 'Orang yang melindungi sistem, jaringan, dan data dari ancaman siber, seperti hacker, virus, malware, atau serangan lainnya',
        gaji: 9000000,
        kualifikasi: 'Memiliki pengetahuan dan pengalaman dalam bidang keamanan siber, menguasai konsep-konsep seperti enkripsi, firewall, antivirus, autentikasi, dan forensik digital, serta mampu mencegah, mendeteksi, dan menangani insiden keamanan siber',
        jenjang: 'cybersecurity_analyst'
      },
      {
        id: 7,
        nama: 'Game Developer',
        deskripsi: 'Orang yang membuat dan mengembangkan game untuk berbagai platform, seperti PC, console, mobile, atau online',
        gaji: 6000000,
        kualifikasi: 'Memiliki kreativitas, imajinasi, dan passion dalam membuat game, menguasai bahasa pemrograman, desain grafis, animasi, audio, fisika, dan matematika, serta mampu bekerja dalam tim multidisiplin',
        jenjang: 'game_developer'
      },
      {
        id: 8,
        nama: 'System Analyst',
        deskripsi: 'Orang yang menganalisis, merancang, dan mengimplementasikan sistem informasi untuk memenuhi kebutuhan pengguna atau klien',
        gaji: 7000000,
        kualifikasi: 'Memiliki kemampuan analisis, komunikasi, dan negosiasi yang baik, menguasai konsep-konsep sistem informasi, basis data, dan rekayasa perangkat lunak, serta mampu bekerja sama dengan programmer, software engineer, atau profesional IT lainnya',
        jenjang: 'system_analyst'
      },
      {
        id: 9,
        nama: 'Konsultan IT',
        deskripsi: 'Orang yang memberikan saran, bantuan, atau solusi mengenai masalah atau proyek IT kepada klien',
        gaji: 11000000,
        kualifikasi: 'Memiliki pengetahuan dan pengalaman yang luas di bidang IT, menguasai berbagai teknologi, metodologi, dan best practice yang relevan, serta mampu beradaptasi dengan berbagai sektor, industri, dan lingkungan kerja',
        jenjang: 'konsultan_it'
      }
    ]

    const jenjangKarirData = data.find((item) => item.jenjang === jenjangKarir);

    return jenjangKarirData;
  }

  const hitungJenjangKarir = () => {
    const jenjangKarirCount = {
      programmer: 0,
      software_engineer: 0,
      web_developer: 0,
      mobile_developer: 0,
      data_scientist: 0,
      cybersecurity_analyst: 0,
      game_developer: 0,
      system_analyst: 0,
      konsultan_it: 0,
    };

    pertanyaan.forEach((item) => {
      const jawabanValue = jawaban[item.id as keyof typeof jawaban];
      if (jawabanValue === "Iya") {
        Object.keys(jenjangKarirCount).forEach((karir) => {
          if (item[karir as keyof typeof item]) {
            jenjangKarirCount[karir as keyof typeof jenjangKarirCount]++;
          }
        });
      }
    });

    let maxKey = "";
    let maxCount = 0;

    Object.entries(jenjangKarirCount).forEach(([key, count]) => {
      if (count > maxCount) {
        maxKey = key;
        maxCount = count;
      }
    });

    setJenjangKarir(maxKey);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto mb-10 lg:mb-14 text-center">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Tes Jenjang Karir
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Jawablah pertanyaan berikut untuk mengetahui jenjang karir yang sesuai denganmu.
        </p>
        {completed && (
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Kamu telah menjawab semua pertanyaan!
          </p>
        )}
        {!completed && (
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Pertanyaan ke-{currentQuestion + 1} dari {pertanyaan.length}
          </p>
        )}
      </div>
      <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-8 first:pt-0 last:pb-0">
          {currentQuestion < pertanyaan.length && (
            <div key={pertanyaan[currentQuestion].id} className="flex flex-col items-center my-4">
              <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                {pertanyaan[currentQuestion].pertanyaan}
              </h3>
              <div className="mx-auto flex justify-center gap-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => handleJawaban(pertanyaan[currentQuestion].id, "Iya")}
                  className="py-3 px-4 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Iya
                </button>
                <button
                  type="button"
                  onClick={() => handleJawaban(pertanyaan[currentQuestion].id, "Tidak")}
                  className="py-3 px-4 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Tidak
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {completed && (
        <div className="mx-auto flex flex-col items-center mb-12 pt-10">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
            Jenjang Karir yang Sesuai:
          </p>
          <div className="bg-green-100 dark:bg-green-700 py-2 px-4 rounded-md text-green-800 dark:text-green-300">
            {jenjangKarir}
          </div>
          <div className="mt-4 text-gray-600 dark:text-gray-300">
            {dekripsiJenjangKarir(jenjangKarir)?.deskripsi}
          </div>
          <div className="mt-4 text-gray-600 dark:text-gray-300">
            Gaji Awal: Rp {dekripsiJenjangKarir(jenjangKarir)?.gaji?.toLocaleString()}
          </div>
          <div className="mt-4 text-gray-600 dark:text-gray-300">
            Kualifikasi: {dekripsiJenjangKarir(jenjangKarir)?.kualifikasi}
          </div>
          <div className="mt-6 text-gray-600 dark:text-gray-300">
            <a
              href={`https://www.google.com/search?q=${jenjangKarir}`}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Cari Lebih Lanjut
            </a>
          </div>
          <button
            type="button"
            onClick={hitungJenjangKarir}
            className="mt-6 py-3 px-4 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Hitung Jenjang Karir
          </button>
        </div>
      )}
    </div>
  );
}
