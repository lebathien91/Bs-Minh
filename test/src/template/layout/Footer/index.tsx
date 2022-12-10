import React from "react";
import {
  FaAngleUp,
  FaChevronRight,
  FaFacebookF,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { animateScroll } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#f9fafc] bg-[url(/assets/img/footer-bg.png)] w-full overflow-hidden"
    >
      <div className="container pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-8 lg:mb-0 px-4">
            <figure className="w-[145px] h-[45px]">
              <img src="/assets/img/logo.png" alt="img" />
            </figure>
            <div className="my-8">
              Lorem ipsum dolor sit consectet adipisicing sed do eiusmod temp
              incididunt ut labore. Lorem Ipsum is simply dummy.
            </div>
            <ul className="flex flex-wrap text-white">
              <li className="mr-4 bg-primary rounded-sm w-6 h-6 flex items-center justify-center">
                <a href="#">
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </li>
              <li className="mr-4 bg-primary rounded-sm w-6 h-6 flex items-center justify-center">
                <a href="#">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
              </li>
              <li className="mr-4 bg-primary rounded-sm w-6 h-6 flex items-center justify-center">
                <a href="#">
                  <FaPinterestP className="w-4 h-4" />
                </a>
              </li>
              <li className="mr-4 bg-primary rounded-sm w-6 h-6 flex items-center justify-center">
                <a href="#">
                  <FaTwitter className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0 px-4">
            <h3 className="pb-4 mb-7 text-primary relative after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-[1px] after:w-full after:max-w-[170px] after:bg-[#eaeaea]">
              Liên kết
            </h3>
            <ul>
              <li className="mb-2 hover:ml-2 transition-all duration-200 ease-linear hover:text-primary">
                <a href="#" className="flex items-center">
                  <FaChevronRight className="mr-2" />
                  FAQs
                </a>
              </li>
              <li className="mb-2 hover:ml-2 transition-all duration-200 ease-linear hover:text-primary">
                <a href="#" className="flex items-center">
                  <FaChevronRight className="mr-2" />
                  Blog
                </a>
              </li>
              <li className="mb-2 hover:ml-2 transition-all duration-200 ease-linear hover:text-primary">
                <a href="#" className="flex items-center">
                  <FaChevronRight className="mr-2" />
                  Weekly timetable
                </a>
              </li>
              <li className="mb-2 hover:ml-2 transition-all duration-200 ease-linear hover:text-primary">
                <a href="#" className="flex items-center">
                  <FaChevronRight className="mr-2" />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0 px-4">
            <h3 className="pb-4 mb-7 text-primary relative after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-[1px] after:w-full after:max-w-[170px] after:bg-[#eaeaea]">
              Chuyên khoa
            </h3>
            <ul>
              <li className="mb-2 hover:ml-2 transition-all duration-200 ease-linear hover:text-primary">
                <a href="#" className="flex items-center">
                  <FaChevronRight className="mr-2" />
                  Rehabilitation
                </a>
              </li>
              <li className="mb-2 hover:ml-2 transition-all duration-200 ease-linear hover:text-primary">
                <a href="#" className="flex items-center">
                  <FaChevronRight className="mr-2" />
                  Laboratory Analysis
                </a>
              </li>
              <li className="mb-2 hover:ml-2 transition-all duration-200 ease-linear hover:text-primary">
                <a href="#" className="flex items-center">
                  <FaChevronRight className="mr-2" />
                  Face Lift Surgery
                </a>
              </li>
              <li className="mb-2 hover:ml-2 transition-all duration-200 ease-linear hover:text-primary">
                <a href="#" className="flex items-center">
                  <FaChevronRight className="mr-2" />
                  Liposuction
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0 px-4">
            <h3 className="pb-4 mb-7 text-primary relative after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-[1px] after:w-full after:max-w-[170px] after:bg-[#eaeaea]">
              Liên hệ
            </h3>
            <ul>
              <li className="mb-2 flex">
                <span className="mr-2 font-semibold max-w-[70px]">
                  Address:
                </span>
                1223 Fulton Street San Diego CA 941-23 USA
              </li>
              <li className="mb-2 flex">
                <span className="mr-2 font-semibold max-w-[70px]">Email:</span>
                info@email.com
              </li>
              <li className="mb-2 flex">
                <span className="mr-2 font-semibold max-w-[70px]">Phone:</span>
                (+84) - 999 999 999 <br /> (+84) - 888 888 888
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#9ea0a51a]/10">
        <div className="container py-4 flex justify-between items-center">
          <div className="mb-8 lg:mb-0 px-4">
            Copyright 2021. Design by Laralink
          </div>
          <button
            className="h-10 w-10 bg-primary rounded-full text-white flex justify-center items-center"
            onClick={() => animateScroll.scrollTo(0)}
          >
            <FaAngleUp />
          </button>
        </div>
      </div>
      <div className="fixed z-50 bottom-0 left-0 md:left-auto right-0 md:bottom-1/3">
        <ul className="flex md:flex-col justify-between">
          <li className="w-full md:w-14 flex justify-center p-3 overflow-hidden text-white bg-[#4267B2] md:rounded-tl-lg">
            <a
              target="_blank"
              href="https://fb.com/lebathien91"
              rel="noreferrer"
            >
              <FaFacebookMessenger size={22} />
            </a>
          </li>
          <li className="w-full md:w-14 flex justify-center p-3 overflow-hidden bg-[#0068FF] text-white font-bold">
            <a
              target="_blank"
              href="https://zalo.me/098888888"
              rel="noreferrer"
            >
              <span className="block">Zalo</span>
            </a>
          </li>
          <li className="w-full md:w-14 flex justify-center p-3 overflow-hidden bg-[#26d37c] text-white md:rounded-bl-lg">
            <a href="tel:0988.888.888" rel="noreferrer">
              <FaPhoneAlt size={22} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
