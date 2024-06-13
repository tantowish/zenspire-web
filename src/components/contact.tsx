
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
  
  export function Contact() {
    return (
      <Footer container>
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Link
                  key="beranda"
                  href="#beranda"
                  className='flex flex-wrap gap-4'
                  >
                    <Image
                    className='w-6 lg:w-8'
                    src="/zenspire-logo.png"
                    alt='zenspire-logo'
                    width={288}
                    height={162}
                    />
                    <p className='text-[#12719C] font-bold text-xl lg:text-2xl'>Zenspire</p>
                </Link> 
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                  <FooterLink href="#">GenZen</FooterLink>
                  <FooterLink href="#beranda">Zenspire</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                  <FooterLink href="https://github.com/tantowish" target="_blank">Tantowi</FooterLink>
                  <FooterLink href="https://github.com/1langit">Langit</FooterLink>
                  <FooterLink href="https://github.com/annisaurohmah">Annisa</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="GenZen" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }
  