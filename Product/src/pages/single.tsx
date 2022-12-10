import React, { ReactElement } from "react";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Layout from "../template/layout";
import Sidebar from "../template/layout/Sidebar";

export default function SinglePage() {
  return (
    <>
      <section className="relative bg-[#f9fafc] overflow-hidden bg-fixed bg-cover bg-[url('/assets/img/hero-bg2.jpg')]">
        <div className="h-[650px] pt-32 flex justify-center items-center relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:bg-black/60">
          <div className="container text-center text-white z-10">
            <h1 className="text-5xl mb-2">
              This disease occurs when nerve cells <br /> or neurons in a
              certain.
            </h1>
            <span className="text-xl text-white/70">
              <span className="pr-4 border-r border-white/10">
                By <a href="#">Jhon Doe</a>
              </span>
              <span className="ml-4">Jan 02, 2020</span>
            </span>
          </div>
        </div>
      </section>
      <section className="my-32">
        <div className="container flex flex-col lg:flex-row">
          <div className="lg:w-2/3 px-4">
            <div className="text-xl font-thin single">
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps.
              </p>
              <img
                src="https://nischinto-html.netlify.app/nischinto/assets/img/hero-bg3.jpg"
                alt="img"
              />
              <h2>Collaboratively administrate empowered.</h2>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail.
              </p>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail.
              </p>
              <h2>Blog video post can also added.</h2>
              <div>
                <iframe
                  width="816"
                  height="459"
                  src="https://www.youtube.com/embed/vGOL7ZvuGMc"
                ></iframe>
              </div>
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate
                resource-leveling customer service for state of the art customer
                service.
              </p>
              <blockquote>
                Integer accumsan arcu ligula, eget dictum augue egestas sed.
                Curabitur bibendum, lorem ac dapibus pellentesque, justo lectus
                bibendum enim.
                <small>
                  by: <span>Mark Parker</span>
                </small>
              </blockquote>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use passage of Lorem Ipsum.
              </p>
              <h2>Phosfluorescently engage worldwide?</h2>
              <p>
                Proactively envisioned multimedia based expertise and
                cross-media growth strategies. Seamlessly visualize quality
                intellectual capital without superior collaboration and
                idea-sharing. Holistically pontificate installed base portals
                after maintainable products.
              </p>
              <img
                src="https://nischinto-html.netlify.app/nischinto/assets/img/hero-bg4.jpg"
                alt="img"
              />
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
            <div className="mt-12 border-y py-6 flex justify-between">
              <div className="flex">
                <h4 className="mr-4 font-semibold text-black">Tags:</h4>
                <ul className="flex">
                  <li className="mr-2 hover:underline hover:text-black">
                    <a href="#">App</a>
                  </li>
                  <li className="mr-2 hover:underline hover:text-black">
                    <a href="#">php</a>
                  </li>
                  <li className="mr-2 hover:underline hover:text-black">
                    <a href="#">web</a>
                  </li>
                  <li className="mr-2 hover:underline hover:text-black">
                    <a href="#">business</a>
                  </li>
                  <li className="mr-2 hover:underline hover:text-black">
                    <a href="#">agency</a>
                  </li>
                  <li className="mr-2 hover:underline hover:text-black">
                    <a href="#">development</a>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <h4 className="mr-4 font-semibold text-black">Share:</h4>
                <ul className="flex items-center">
                  <li className="mr-4 hover:text-black">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="mr-4 hover:text-black">
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="mr-4 hover:text-black">
                    <a href="#">
                      <FaBehance />
                    </a>
                  </li>
                  <li className="mr-4 hover:text-black">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="mr-4 hover:text-black">
                    <a href="#">
                      <FaPinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>
    </>
  );
}

SinglePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
