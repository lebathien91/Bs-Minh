import React from "react";
import { MdPhoneInTalk } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="container mt-32">
      <div className="text-center mb-12">
        <h2 className="text-black text-4xl">Who We Are</h2>
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
          <br /> Lorem Ipsum the industry's standard dummy text.
        </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 px-4">
          <div>
            <h2 className="text-black text-4xl">
              A hospital is a health care institution providing patient
              treatment with specialized medical
            </h2>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut
              aliquip. Commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut
              aliquip. Commodo consequat. Sed do eiusmod tempor incidid unt
              labore et dolore magna aliqua.
            </p>
            <div className="flex items-center my-8">
              <div className="mr-8">
                <img src="/assets/img/avatar1.png" alt="img" />
              </div>
              <div>
                <h4 className="text-primary text-2xl font-semibold">
                  David Ambrose
                </h4>
                <span>Founder & Director</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 px-4">
          <div className="lg:ml-8 p-6 bg-[#f9fafc]">
            <div className="border border-primary py-7 px-5">
              <h2 className="text-primary text-3xl mb-3">Weekly Timetable</h2>
              <ul>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Monday</span>
                  <span>8:00am–7:00pm</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Tuesday</span>
                  <span>9:00am–6:00pm</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Wednesday</span>
                  <span>9:00am–6:00pm</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Thursday</span>
                  <span>8:00am–7:00pm</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Friday</span>
                  <span>8:00am–7:00pm</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Saturday</span>
                  <span>9:00am–5:00pm</span>
                </li>
                <li className="flex justify-between py-2 border-b border-dashed border-[#b5b5b5]">
                  <span>Sunday</span>
                  <span>9:00am–3:00pm</span>
                </li>
              </ul>
              <div className="mt-12 flex">
                <MdPhoneInTalk size={50} />
                <div className="ml-6">
                  <div>Call Now</div>
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
