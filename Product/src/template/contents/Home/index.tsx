import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import SlideSwiper from "@/components/SlideSwiper";
import { heros } from "../../../../data/home";

const Home = () => {
  return (
    <section id="home">
      <div className="relative bg-[#f9fafc] overflow-hidden bg-fixed bg-[url('/assets/img/hero-bg.jpg')]">
        <div className="w-[580px] h-auto overflow-hidden absolute -bottom-5 right-[100px]">
          <SlideSwiper timeDelay={4000} slidesPerView={1}>
            <SwiperSlide>
              <div>
                <img src="/assets/img/hero-img.png " alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/assets/img/hero-img1.png " alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/assets/img/hero-img2.png " alt="img" />
              </div>
            </SwiperSlide>
          </SlideSwiper>
        </div>
        <div className="h-[820px] flex items-center justify-center flex-wrap overflow-hidden relative z-20">
          <div className="container">
            <h1 className="text-black text-7xl font-semibold">
              Dịch vụ khám chữa bệnh <br /> tại nhà tốt nhất
            </h1>
            <p className="py-8 text-lg">
              Chúng tôi cung cấp dịch vụ khám chữa bệnh tại nhà ở Hà nội.
              <br />
              Khám, tư vấn và hỗ trợ theo dõi y tế tại nhà cho người dân chu
              đáo.
            </p>
            <button className="px-6 py-2 bg-primary rounded-md text-white text-lg font-bold">
              Đặt lịch ngay
            </button>
          </div>
          <div className="container absolute bottom-12 w-full">
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
        </div>
        <div className="absolute left-0 bottom-0 w-full h-[590px] z-10">
          <img
            className="h-full w-full"
            src="/assets/img/hero-shape.png"
            alt="img"
          />
        </div>
      </div>
      <section className="container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heros.map((hero) => (
            <div
              key={hero.id}
              className="border hover:shadow-3xl hover:border-transparent rounded-md p-7 flex flex-col justify-center items-center"
            >
              <div
                className={`w-[90px] h-[90px] rounded-full flex justify-center items-center mb-6 ${hero.color}`}
              >
                <span className="w-[52px] h-[52px]">
                  <img src={hero.icon} alt={hero.title} />
                </span>
              </div>
              <h2 className="text-black text-2xl md:text-xl lg:text-2xl">
                {hero.title}
              </h2>
              <p className="text-center py-2">{hero.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
