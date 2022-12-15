import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaCheck, FaTimes } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import SlideSwiper from "@/components/SlideSwiper";

import { prices as listPrices, faqs as listFaq } from "../../../../data/prices";

const Price = () => {
  const [prices, setPrices] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [activeFaq, setActiveFaq] = useState<number>(0);

  useEffect(() => {
    setPrices(listPrices);
    setFaqs(listFaq);
  }, []);
  return (
    <>
      <section id="pricing" className="container mt-24">
        <div className="text-center">
          <h2 className="text-black text-4xl">Bảng giá dịch vụ</h2>
          <div className="w-[130px] mx-auto my-3 flex justify-center items-center">
            <div className="w-[42px] h-[2px] bg-primary"></div>
            <div className="mx-4 animate-rotateAnimation">
              <img src="/assets/img/4.png" alt="img" />
            </div>
            <div className="w-[42px] h-[2px] bg-primary"></div>
          </div>
          <p className="text-center">
            Danh sách bảng giá dịch vụ của chúng tôi.
            <br /> Được xây dựng dựa trên tham khảo chi phí phù hợp nhất.
          </p>
        </div>

        <div className="mt-12 overflow-hidden">
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
            {prices.map((price) => (
              <SwiperSlide key={price.id}>
                <div className="m-6 rounded-md overflow-hidden shadow-3xl transition-all duration-300 hover:scale-110">
                  <div className="bg-no-repeat bg-cover bg-bottom bg-[url(/assets/img/price-shape.svg)] h-[160px]">
                    <h2 className="text-3xl text-center pt-8 text-white font-semibold">
                      {price.price}
                    </h2>
                  </div>
                  <div className="text-center my-4 px-8">
                    <h2>{price.name}</h2>
                    <ul className="mt-5">
                      {price.list.map((item: any) => (
                        <li
                          className="my-1 flex items-center justify-center"
                          key={item.id}
                        >
                          <span className="mr-2">
                            {item.todo ? (
                              <FaCheck className="text-[#37af47]" />
                            ) : (
                              <FaTimes className="text-[#e6492d]" />
                            )}
                          </span>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    <button className="my-6 py-2 px-5 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-white">
                      Liên hệ ngay
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SlideSwiper>
        </div>
      </section>

      <section className="mt-24 py-24 bg-[#f9fafc]">
        <div className="container flex items-center flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 px-6">
            <figure>
              <img src="/assets/img/faq-img.png" alt="img" />
            </figure>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <h1 className="text-black mb-8">Câu hỏi thường gặp</h1>

            {faqs.map((faq, index) => (
              <div
                className="mt-4 rounded-md overflow-hidden border border-gray-200"
                key={faq.id}
                onClick={() => setActiveFaq(index)}
              >
                <div
                  className={`py-3 px-5 cursor-pointer flex justify-between items-center ${
                    activeFaq === index ? "bg-primary text-white" : ""
                  }`}
                >
                  <h3>{faq.questions}</h3>
                  {activeFaq === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div
                  className={`p-5 ${activeFaq === index ? "block" : "hidden"}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
