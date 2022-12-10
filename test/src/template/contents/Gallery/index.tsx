import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import BeforeAfterSlider from "../../../components/BeforeAfterSlider";
import SlideSwiper from "../../../components/SlideSwiper";

import { images, listPatients, listData } from "../../../../data/galleries";

const Gallery = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [datas, setDatas] = useState<any[]>([]);
  useEffect(() => {
    setPatients(listPatients);
    setDatas(listData);
  }, []);
  return (
    <>
      <section id="gallery" className="container mt-32">
        <div className="text-center">
          <h2 className="text-black text-4xl">View our gallery</h2>
          <div className="w-[130px] mx-auto my-3 flex justify-center items-center">
            <div className="w-[42px] h-[2px] bg-primary"></div>
            <div className="mx-4 animate-rotateAnimation">
              <img src="/assets/img/4.png" alt="img" />
            </div>
            <div className="w-[42px] h-[2px] bg-primary"></div>
          </div>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum the industry&apos;s standard dummy text.
          </p>
        </div>
        <div className="mt-12">
          <div className="gap-6 columns-md">
            {images.map((img) => (
              <div
                key={img.id}
                className="w-full mb-6 overflow-hidden relative group"
              >
                <img
                  className="transition-all duration-300 group-hover:scale-125"
                  src={img.url}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-20 bg-repeat-x bg-[url('/assets/img/before-after-bg.jpg')]">
        <section className="container pt-16">
          <div className="text-center">
            <h2 className="text-black text-4xl">Before and after procedures</h2>
            <div className="w-[130px] mx-auto my-3 flex justify-center items-center">
              <div className="w-[42px] h-[2px] bg-primary"></div>
              <div className="mx-4 animate-rotateAnimation">
                <img src="/assets/img/4.png" alt="img" />
              </div>
              <div className="w-[42px] h-[2px] bg-primary"></div>
            </div>
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum the industry&apos;s standard dummy text.
            </p>
          </div>
          <div className="mt-28">
            <div className="max-w-[760px] w-full h-[450px] mx-auto shadow-lg border-[10px] border-white rounded-md">
              <BeforeAfterSlider
                imgBefor="/assets/img/before.jpg"
                imgAfter="/assets/img/after.jpg"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="container mt-24">
        <div className="text-center">
          <h2 className="text-black text-4xl">Khách hàng nói gì?</h2>
          <div className="w-[130px] mx-auto my-3 flex justify-center items-center">
            <div className="w-[42px] h-[2px] bg-primary"></div>
            <div className="mx-4 animate-rotateAnimation">
              <img src="/assets/img/4.png" alt="img" />
            </div>
            <div className="w-[42px] h-[2px] bg-primary"></div>
          </div>
          <p className="text-center">
            Hãy xem khách hàng đã trải nghiệm dịch vụ nói gì về chúng tôi
          </p>
        </div>
        <div className="overflow-hidden my-10">
          <SlideSwiper
            timeDelay={3000}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {patients.map((patient) => (
              <SwiperSlide key={patient.id}>
                <div className="m-4 p-6 border border-gray-200 hover:border-transparent hover:shadow-[0px_1px_30px_0px_rgb(112,112,112,0.3)] rounded-md text-center relative group">
                  <figure className="w-24 h-24 mx-auto">
                    <img className="w-full" src={patient.url} alt="img" />
                  </figure>
                  <h4 className="mt-2 text-xl font-bold text-black group-hover:text-primary">
                    {patient.name}
                  </h4>
                  <h5>{patient.job}</h5>
                  <p className="my-2">{patient.messenger}</p>
                  <div className="absolute bottom-0 right-0 h-12 w-12 text-[#f5f5f5] group-hover:text-primary">
                    <FaQuoteRight size={48} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SlideSwiper>
        </div>
      </section>
      <section className="bg-[#f9fafc]">
        <div className="container grid grid-cols-1 xl:grid-cols-2 gap-6 py-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {datas.map((data) => (
              <div
                key={data.id}
                className="border border-gray-300 rounded-md p-4 text-center hover:border-transparent hover:shadow-[0px_1px_30px_0px_rgb(112,112,112,15%)]"
              >
                <div className="w-[70px] h-[70px] mx-auto rounded-full flex justify-center items-center bg-[#6758f3]/10 fill-[#6758f3]">
                  <span className="w-[40px] h-[40px]">
                    <img src={data.icon} alt="img" />
                  </span>
                </div>
                <h2 className="text-4xl text-black font-bold mt-5">
                  {data.count}
                </h2>
                <h3 className="mt-2 text-2xl">{data.title}</h3>
              </div>
            ))}
          </div>
          <div className="xl:px-6">
            <div className="mx-auto w-full xl:max-w-[540px] h-[475px] overflow-hidden rounded-md xl:rounded-[50%] xl:rounded-r-[7px] xl:rounded-b-[50%] relative group">
              <div className="w-full h-full bg-cover bg-center bg-[url('/assets/img/video-block-img.jpg')] transition-all duration-500 ease-in-out group-hover:scale-110 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-10 before:group-hover:opacity-30">
                <div className="w-full h-full flex justify-center items-center">
                  <a
                    className="w-[80px] h-[80px] flex fill-white text-white"
                    href="#"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 336 336"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M286.8,49.2C256.4,18.8,214.4,0,168,0C121.6,0,79.6,18.8,49.2,49.2C18.8,79.6,0,121.6,0,168c0,46.4,18.8,88.4,49.2,118.8
                      C79.6,317.2,121.6,336,168,336c46.4,0,88.4-18.8,118.8-49.2C317.2,256.4,336,214.4,336,168C336,121.6,317.2,79.6,286.8,49.2z
                       M272.4,272.4c-26.8,26.8-63.6,43.2-104.4,43.2s-77.6-16.4-104.4-43.2C37.2,245.6,20.4,208.8,20.4,168S36.8,90.4,63.6,63.6
                      C90.4,36.8,127.2,20.4,168,20.4s77.6,16.4,104.4,43.2c26.8,26.8,43.2,63.6,43.2,104.4S298.8,245.6,272.4,272.4z"
                        ></path>
                      </g>
                      <g>
                        <path
                          d="M261.2,156c-0.8-0.8-2-2.4-3.2-4c-0.4-0.4-0.4-0.4-0.8-0.8c-1.2-1.2-2.4-2-4-2.8l-59.2-34c0,0-0.4,0-0.4-0.4L134,79.6
                      c-5.2-3.2-11.2-3.6-16.8-2.4c-5.6,1.6-10.4,5.2-13.6,10.4c-1.2,1.6-1.6,3.6-2.4,5.2c-0.4,1.2-0.4,2.8-0.8,4.4c0,0.4,0,1.2,0,1.6
                      V168v68.8c0,6,2.4,11.6,6.4,15.6s9.6,6.4,15.6,6.4c2,0,4.4-0.4,6.4-1.2s4-1.6,5.6-2.8l58.8-34l0.8-0.4l59.2-34
                      c0.4,0,0.4-0.4,0.8-0.4c4.8-3.2,8.4-8,9.6-13.2C265.2,167.2,264.4,161.2,261.2,156z M244,168.4c0,0.4-0.4,0.8-0.8,0.8h-0.4
                      L184,203.6l-0.4,0.4l-58.8,34c-0.4,0-0.4,0.4-0.8,0.4c0,0-0.4,0-0.4,0.4h-0.4c-0.4,0-0.8-0.4-1.2-0.4c-0.4-0.4-0.4-0.8-0.4-1.2
                      V168V99.2v-0.4v-0.4c0.4-0.4,0.8-0.8,1.2-0.8c0.4,0,0.8,0,1.2,0l59.2,34l0.4,0.4l59.6,34.4l0.4,0.4l0.4,0.4
                      C244,167.6,244,168,244,168.4z"
                        ></path>
                      </g>
                    </svg>
                    <div className="absolute top-0 left-0 bottom-0 right-0 w-[72px] h-[71px] m-auto">
                      <span className="absolute top-0 left-0 bottom-0 right-0 w-[72px] h-[71px] rounded-full shadow-[0_0_0_5px_rgba(999,999,999,1)] animate-videoAnimaion">
                        <span className="absolute top-0 left-0 bottom-0 right-0 w-[72px] h-[71px] rounded-full shadow-[0_0_0_5px_rgba(999,999,999,1)] animate-videoAnimaion"></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
