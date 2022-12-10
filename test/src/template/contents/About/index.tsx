import React from "react";
import { MdPhoneInTalk } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="container mt-32">
      <div className="text-center mb-12">
        <h2 className="text-black text-4xl">Chúng tôi là ai</h2>
        <div className="w-[130px] mx-auto my-3 flex justify-center items-center">
          <div className="w-[42px] h-[2px] bg-primary"></div>
          <div className="mx-4 animate-rotateAnimation">
            <img src="/assets/img/4.png" alt="img" />
          </div>
          <div className="w-[42px] h-[2px] bg-primary"></div>
        </div>
        <p className="text-center">
          Chúng tôi là những bác sĩ chuyên nghiệp, tâm huyết, tận tâm với nghề.
          <br /> Chăm sóc sức khỏe nhân dân là sứ mệnh được chúng tôi đặt ra.
        </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 px-4">
          <div>
            <h2 className="text-black text-4xl">
              Dịch vụ khám chữa bệnh tại nhà hàng đầu. Chăm sóc chu đáo, quản lý
              sức khoẻ từng thành viên trong gia đình.
            </h2>
            <p className="py-6">
              Với dịch vụ này thì các bác sĩ sẽ thăm khám bệnh nhận tại nhà theo
              yêu cầu. Một điều đáng quan tâm là với việc khám bệnh tại nhà,
              nhiều người cảm thấy dễ dàng hơn trong khi nhiều phòng khám, bệnh
              viện khác đang trong tình trạng quá tải. Hơn nữa, việc được các
              bác sĩ thăm khám tại nhà cũng sẽ có nhiều thời gian hơn để nắm rõ
              tình trạng của bệnh nhân một cách chi tiết nhất
            </p>
            <p>
              Dịch vụ khám nội tại nhà giúp chẩn đoán và điều trị các bệnh lý
              tim mạch, nội tiết, cơ xương khớp, thần kinh, tiêu hóa, hô hấp…
              khi bệnh nhân có triệu chứng khó chịu và không rõ nguyên nhân. Các
              bác sĩ không chỉ tập trung điều trị cho một cơ quan trong cơ thể
              mà còn có thể thăm khám và điều trị nhiều bệnh khác nhau hoặc ảnh
              hưởng cùng lúc đến nhiều cơ quan khác.
            </p>
            <div className="flex items-center my-8">
              <div className="mr-8">
                <img src="/assets/img/avatar1.png" alt="img" />
              </div>
              <div>
                <h4 className="text-primary text-2xl font-semibold">
                  Nguyễn Văn A
                </h4>
                <span>Người sáng lập</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 px-4">
          <div className="lg:ml-8 p-6 bg-[#f9fafc]">
            <div className="border border-primary py-7 px-5">
              <h2 className="text-primary text-3xl mb-3">Thời gian làm việc</h2>
              <ul>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Thứ hai</span>
                  <span>9:00 - 17:00</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Thứ ba</span>
                  <span>9:00 - 17:00</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Thứ tư</span>
                  <span>9:00 - 17:00</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Thứ năm</span>
                  <span>9:00 - 17:00</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Thứ sáu</span>
                  <span>9:00 - 17:00</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Thứ bảy</span>
                  <span>8:00 - 17:00</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Chủ nhật</span>
                  <span>8:00 - 17:00</span>
                </li>
              </ul>
              <div className="mt-12 flex">
                <MdPhoneInTalk size={50} />
                <div className="ml-6">
                  <div>Gọi ngay</div>
                  <div className="text-primary text-xl font-bold">
                    (+84).988.888.888
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
