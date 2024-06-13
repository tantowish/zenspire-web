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
            <Link className='mx-auto lg:mx-0 px-4 py-2 bg-gradient-to-r from-[#2B9EA1] to-[#12719C] hover:from-[#12719C] hover:to-[#2B9EA1] text-sm transition-colors duration-300 rounded-full text-white w-fit' key={'unduh'} href={'#unduh'}>
                Unduh Aplikasi
            </Link>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Feature Section Start */}
      <section className="relative lg:-mt-8">
        <div className="slanted-bg absolute inset-0"></div>
        <div className="px-8 lg:px-24 md:px-16 pt-16 pb-32 lg:pb-64 max-w-7xl mx-auto" id="fitur">
          <div>
            <h4 className="text-center text-lg lg:text-xl font-bold text-[#1AAD90] mb-4">Fitur</h4>
            <h1 className="text-center text-xl lg:text-2xl font-bold text-[#12719C] mb-4">Apa yang dapat Zenspire tawarkan?</h1>
            <p className="text-center text-[#12719C] text-sm lg:text-md">Cari tau apa yang akan Anda dapatkan dengan Zenspire</p>
          </div>
        </div>
      </section>
      {/* Feature Section End */}

      {/* FAQ Section Start */}
      <section>
        <div className="px-8 lg:px-24 md:px-16 py-16 max-w-7xl mx-auto" id="faq">
          <h4 className="text-center text-lg lg:text-xl font-bold text-[#1AAD90] mb-4">FAQ</h4>
          <h1 className="text-center text-xl lg:text-2xl font-bold text-[#12719C] mb-4">Frequently Asked Questions</h1>
          <p className="text-center text-[#12719C] text-sm lg:text-md">Lihat untuk pertanyaan dan bantuan yang sering ditanyakan</p>
        </div>
      </section>
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      {/* Contact Section End */}
    </main>
  );
}
