import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import SlideSwiper from "@/components/SlideSwiper";

const listPosts = [
  {
    id: 1,
    title: "Working in emergency medicine",
    thumbnail: "/assets/img/blog1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry&apos;s standard dummy text.",
    author: "James Lewis",
    date: "Aug 21, 2020",
  },
  {
    id: 2,
    title: "Individual treatment & assistance",
    thumbnail: "/assets/img/blog2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry&apos;s standard dummy text.",
    author: "William Juarez",
    date: "Aug 21, 2021",
  },
  {
    id: 3,
    title: "Child’s first hospital visit",
    thumbnail: "/assets/img/blog3.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the industry&apos;s standard dummy text.",
    author: "Albert Brian",
    date: "Aug 21, 2022",
  },
];

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    setPosts(listPosts);
  }, []);
  return (
    <section id="blog" className="container my-32">
      <div className="text-center mb-12">
        <h2 className="text-black text-4xl">Bài viết nổi bật</h2>
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
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="px-5">
                <div className="mb-6 overflow-hidden group relative">
                  <Link href="/single">
                    <figure className="after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-0 after:group-hover:opacity-30">
                      <img
                        className="transition-all duration-300 group-hover:scale-125"
                        src={post.thumbnail}
                        alt="img"
                      />
                    </figure>
                    <span className="absolute bg-primary transition-all duration-300 ease-linear flex justify-center rounded-t-none rounded-b-full items-end z-10 -top-32 group-hover:top-0 right-5 w-12 h-32">
                      <span className="w-10 h-10 mb-1 rounded-full bg-white text-primary flex justify-center items-center">
                        <FaLink />
                      </span>
                    </span>
                  </Link>
                </div>
                <div>
                  <h2 className="text-black hover:text-primary">
                    <Link href="/single">{post.title}</Link>
                  </h2>
                  <div className="text-[#b5b5b5] flex items-center py-2">
                    <span className="mr-4 pr-4 border-r border-gray-300">
                      {post.date}
                    </span>
                    <span>Post by: {post.author}</span>
                  </div>
                </div>
                <p className="my-3">{post.description}</p>
                <button className="my-6 py-2 px-5 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-white">
                  <Link href="/single">Read More</Link>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </SlideSwiper>
      </div>
    </section>
  );
};

export default Blog;
