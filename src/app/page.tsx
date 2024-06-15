import { Accordion } from "@/components/accordion";
import { ButtonAlert } from "@/components/button-alert";
import { Contact } from "@/components/contact";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>

      {/* Hero Section Start */}
      <section className="relative z-[10] px-8 lg:px-24 md:px-16 pt-24 lg:pt-32 pb-16 max-w-7xl mx-auto" id="beranda">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Image src={'/mockup-zenspire.png'} alt="mockup-zenspire" loading="eager" className="" width={500} height={800} quality={95} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6">
            <h1 className="text-center md:text-left text-3xl md:text-heading md:leading-tight font-bold text-[#12719C] mx-auto">Terapis Anda yang Terpersonalisasi untuk Dukungan Gangguan Kecemasan Sosial</h1>
            <p className="text-center lg:text-justify max-w-sm lg:max-w-none mx-auto text-[#12719C] text-base lg:text-lg">Zenspire memberikan perawatan Cognitive Behavioral Therapy yang terpersonalisasi dan dukungan personal. Zenspire menyediakan ruang terapi mandiri secara komprehensif. Dapat diakses kapanpun dan dimanapun tanpa biaya.</p>
            <ButtonAlert className='mx-auto lg:mx-0 px-4 py-2 bg-gradient-to-r from-[#2B9EA1] to-[#12719C] hover:from-[#12719C] hover:to-[#2B9EA1] text-sm md:text-base transition-colors duration-300 rounded-full text-white w-fit' value="Unduh Aplikasi"/>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Feature Section Start */}
      <section className="relative lg:-mt-8" id="fitur">
        <div className="relative z-[10] px-8 lg:px-24 md:px-16 pt-12 pb-32 lg:pb-64 max-w-7xl mx-auto" >
          <div>
            <h4 className="text-center text-xl md:text-2xl font-bold text-[#079b7dd2] mb-4 pt-12">Fitur</h4>
            <h1 className="text-center text-2xl md:text-3xl font-bold text-[#12719C] mb-4">Apa yang dapat Zenspire tawarkan?</h1>
            <p className="text-center text-[#12719C] text-sm md:text-lg lg:text-base">Cari tau apa yang akan Anda dapatkan dengan Zenspire</p>
          </div>
          <div className="mt-8 lg:mt-12 flex flex-wrap justify-between">
            <div className="order-2 md:order-1 w-1/2 md:w-1/3 flex flex-col md:justify-evenly gap-8 md:gap-0 justify-between px-2 md:px-5">
              <div className="p-2 bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-default hover:shadow-xl">
                <p className="text-sm md:text-base text-[#12719C]">Mulai sesi terapi percakapan secara terpersonalisasi dengan</p>
                <h6 className="text-lg md:text-xl text-[#12719C] font-semibold">Chatbot Zenia</h6>
              </div>
              <div className="p-2 bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-default hover:shadow-xl">
                <p className="text-sm md:text-base text-[#12719C]">Latih dirimu menyampaikan pendapat dan berbagi pengalaman dalam</p>
                <h6 className="text-lg md:text-xl text-[#12719C] font-semibold">Komunitas</h6>
              </div>
              <div className="p-2 bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-default hover:shadow-xl">
                <p className="text-sm md:text-base text-[#12719C]">Tanya dan konsultasi lanjutan di </p>
                <h6 className="text-lg md:text-xl text-[#12719C] font-semibold">Chat Psikolog</h6>
              </div>
            </div>
            <Image className="mb-8 md:mb-0 order-1 drop-shadow-xl hover:drop-shadow-2xl md:order-2 w-full md:w-1/3 hover:scale-105 transition-all duration-300 ease-in-out" src={'/features.png'} alt="features" loading="eager" width={300} height={800} quality={80}/>
            <div className="order-3 w-1/2 md:w-1/3 flex flex-col md:justify-evenly px-2 md:px-5 gap-8 md:gap-0 justify-between">
              <div className="p-2 bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-default hover:shadow-xl">
                <p className="text-sm md:text-base text-[#12719C]">Catat progres kecemasanmu setiap hari dan dapatkan rekomendasi di</p>
                <h6 className="text-lg md:text-xl text-[#12719C] font-semibold">Jurnal</h6>
              </div>
              <div className="p-2 bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-default hover:shadow-xl">
                <p className="text-sm md:text-base text-[#12719C]">Cari dan temukan terapis melalui</p>
                <h6 className="text-lg md:text-xl text-[#12719C] font-semibold">Klinik Terdekat</h6>
              </div>
              <div className="p-2 bg-white rounded-lg shadow-md hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-default hover:shadow-xl">
                <p className="text-sm md:text-base text-[#12719C]">Dapatkan informasi tervalidasi dari psikolog dengan akses</p>
                <h6 className="text-lg md:text-xl text-[#12719C] font-semibold">Blog</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 md:bottom-0 max-w-xs z-0">
          <Image src={'/vue-left.png'} loading="lazy" alt="vue left" width={300} height={300} quality={10}/>
        </div>
        <div className="absolute right-0 max-w-xs z-0 top-1/2 md:-top-1/4">
          <Image src={'/vue-right.png'} loading="lazy" alt="vue right" width={300} height={300} quality={10}/>
        </div>
        <div className="slanted-bg absolute inset-0"></div>
      </section>
      {/* Feature Section End */}

      {/* FAQ Section Start */}
      <section className="relative -mt-64">
        <div className="px-8 lg:px-24 md:px-16 pt-80 pb-24 md:pb-32 max-w-7xl mx-auto" id="faq">
          <div className="mb-8 lg:mb-16">
            <h4 className="text-center text-xl lg:text-2xl font-bold text-[#079b7dd2] mb-4">FAQ</h4>
            <h1 className="text-center text-2xl lg:text-3xl font-bold text-[#12719C] mb-4">Frequently Asked Questions</h1>
            <p className="text-center text-[#12719C] text-sm md:text-base lg:text-base">Lihat untuk pertanyaan dan bantuan yang sering ditanyakan</p>
          </div>
          <div className="flex flex-col gap-6 mx-auto max-w-2xl">
            <Accordion title="Apa itu Zenspire?" answer="Zenspire adalah aplikasi yang dirancang untuk membantu pengguna dalam mengatasi Social Anxiety Disorder (SAD) menggunakan pendekatan Cognitive Behavioral Therapy (CBT). Aplikasi ini menawarkan berbagai fitur seperti chatbot, jurnal, komunitas, klinik terdekat, chat dengan psikolog, dan artikel blog."/>
            <Accordion title="Bagaimana cara kerja Zenspire dalam membantu Social Anxiety Disorder?" answer="Zenspire menggunakan teknik Cognitive Behavioral Therapy (CBT) yang terbukti efektif dalam mengatasi gangguan kecemasan sosial. Melalui fitur-fitur seperti chatbot dan jurnal, pengguna dapat mengidentifikasi dan mengubah pola pikir serta perilaku negatif yang memicu kecemasan sosial."/>
            <Accordion title="Apakah ada komunitas pengguna Zenspire yang bisa saya ikuti?" answer="Ya, Zenspire memiliki fitur komunitas di mana pengguna dapat bergabung dan berbagi pengalaman serta dukungan dengan sesama pengguna yang juga mengalami Social Anxiety Disorder. Ini adalah tempat yang aman untuk berbagi cerita dan mendapatkan dukungan dari komunitas."/>
            <Accordion title="Bagaimana cara mengakses artikel blog di Zenspire?" answer="Anda dapat mengakses artikel blog di Zenspire melalui menu utama aplikasi. Artikel-artikel ini berisi informasi dan tips tentang kesehatan mental, teknik CBT, serta saran dari psikolog untuk mengatasi Social Anxiety Disorder."/>
          </div>
        </div>
        <div className="normal-bg absolute inset-0"></div>
      </section>
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      <Contact/>
      {/* Contact Section End */}
    </main>
  );
}
