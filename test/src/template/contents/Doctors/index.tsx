import React, { useEffect, useState } from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import SlideSwiper from "../../../components/SlideSwiper";

import { doctors as listDoctors } from "../../../../data/doctors";

const Doctors = () => {
  const [doctors, setDoctors] = useState<any[]>([]);

  useEffect(() => {
    setDoctors(listDoctors);
  }, []);
  return (
    <section id="doctors" className="container mt-24">
      <div className="text-center">
        <h2 className="text-black text-4xl">Gặp gỡ bác sĩ chúng tôi</h2>
        <div className="w-[130px] mx-auto my-3 flex justify-center items-center">
          <div className="w-[42px] h-[2px] bg-primary"></div>
          <div className="mx-4 animate-rotateAnimation">
            <img src="/assets/img/4.png" alt="img" />
          </div>
          <div className="w-[42px] h-[2px] bg-primary"></div>
        </div>
        <p className="text-center">
          Danh sách những bác sĩ của chúng tôi.
          <br /> Với đội ngũ bác sĩ có tay nghề cao sẵn sàng phục vụ người bệnh.
        </p>
      </div>

      <div className="my-10 overflow-hidden">
        <SlideSwiper
          timeDelay={3000}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className="mx-4 border border-gray-200 rounded-md group">
                <div className="relative overflow-hidden">
                  <figure>
                    <img
                      className="transition-all duration-500 group-hover:scale-110"
                      src={doctor.avatar}
                      alt={doctor.name}
                    />
                  </figure>
                  <div className="w-full absolute bottom-0 left-0 hidden group-hover:block">
                    <img src="/assets/img/member-shape.svg" alt="bg" />
                    <ul className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center text-white">
                      <li className="w-8 mr-2">
                        <a href="#">
                          <FaFacebookSquare size={25} />
                        </a>
                      </li>
                      <li className="w-8 mr-2">
                        <a href="#">
                          <FaLinkedin size={25} />
                        </a>
                      </li>
                      <li className="w-8 mr-2">
                        <a href="#">
                          <FaPinterestSquare size={25} />
                        </a>
                      </li>
                      <li className="w-8 mr-2">
                        <a href="#">
                          <FaTwitterSquare size={25} />
                        </a>
                      </li>
                      <li className="w-8 mr-2">
                        <a href="#">
                          <FaDribbbleSquare size={25} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-6 flex flex-col items-center justify-center">
                  <h3 className="text-black">{doctor.name}</h3>
                  <span>{doctor.department}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SlideSwiper>
      </div>
    </section>
  );
};

export default Doctors;
