import { Accordion } from "@/components/accordion";
import { ButtonAlert } from "@/components/button-alert";
import { Contact } from "@/components/contact";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar/>

      {/* Hero Section Start */}
      <section className="px-8 lg:px-24 md:px-16 pt-24 lg:pt-32 pb-16 max-w-7xl mx-auto" id="beranda">

        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Image src={'/mockup-zenspire.png'} alt="mockup-zenspire" loading="eager" className=" px-8" width={2000} height={500}></Image>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
            <h1 className="text-center lg:text-left text-xl lg:text-3xl font-bold text-[#12719C] leading-7 lg:leading-10 mx-auto">Terapis Anda yang Terpersonalisasi untuk Dukungan Gangguan Kecemasan Sosial</h1>
            <p className="text-center lg:text-justify max-w-sm lg:max-w-none mx-auto text-[#12719C] text-sm lg:text-md">Zenspire memberikan perawatan Cognitive Behavioral Therapy yang terpersonalisasi dan dukungan personal. Zenspire menyediakan ruang terapi mandiri secara komprehensif. Dapat diakses kapanpun dan dimanapun tanpa biaya.</p>
            <ButtonAlert className='mx-auto lg:mx-0 px-4 py-2 bg-gradient-to-r from-[#2B9EA1] to-[#12719C] hover:from-[#12719C] hover:to-[#2B9EA1] text-sm transition-colors duration-300 rounded-full text-white w-fit' value="Unduh Aplikasi"/>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Feature Section Start */}
      <section className="relative lg:-mt-8">
        <div className="px-8 lg:px-24 md:px-16 pt-16 pb-32 lg:pb-64 max-w-7xl mx-auto" id="fitur">
          <div>
            <h4 className="text-center text-lg lg:text-xl font-bold text-[#1AAD90] mb-4">Fitur</h4>
            <h1 className="text-center text-xl lg:text-2xl font-bold text-[#12719C] mb-4">Apa yang dapat Zenspire tawarkan?</h1>
            <p className="text-center text-[#12719C] text-sm lg:text-md">Cari tau apa yang akan Anda dapatkan dengan Zenspire</p>
          </div>
        </div>
        <div className="slanted-bg absolute inset-0"></div>
      </section>
      {/* Feature Section End */}

      {/* FAQ Section Start */}
      <section className="relative -mt-48">
        <div className="px-8 lg:px-24 md:px-16 pt-64 pb-16 max-w-7xl mx-auto" id="faq">
          <div className="mb-8 lg:mb-16">
            <h4 className="text-center text-lg lg:text-xl font-bold text-[#1AAD90] mb-4">FAQ</h4>
            <h1 className="text-center text-xl lg:text-2xl font-bold text-[#12719C] mb-4">Frequently Asked Questions</h1>
            <p className="text-center text-[#12719C] text-sm lg:text-md">Lihat untuk pertanyaan dan bantuan yang sering ditanyakan</p>
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
