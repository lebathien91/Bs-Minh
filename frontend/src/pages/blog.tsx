import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../template/layout";
import Sidebar from "../template/layout/Sidebar";

const listPosts = [
  {
    id: 1,
    title: "Working in emergency on...",
    thumbnail: "/assets/img/project1.jpg",
    author: "Admin",
    date: "August 07, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the standard.",
  },
  {
    id: 2,
    title: "Individual treatment & as...",
    thumbnail: "/assets/img/project2.jpg",
    author: "Admin",
    date: "August 07, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the standard.",
  },
  {
    id: 3,
    title: "Child’s first hospital...",
    thumbnail: "/assets/img/project3.jpg",
    author: "Admin",
    date: "August 07, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the standard.",
  },
  {
    id: 4,
    title: "Working in emergency on...",
    thumbnail: "/assets/img/project4.jpg",
    author: "Admin",
    date: "August 07, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the standard.",
  },
  {
    id: 5,
    title: "Individual treatment & as...",
    thumbnail: "/assets/img/project5.jpg",
    author: "Admin",
    date: "August 07, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the standard.",
  },
  {
    id: 6,
    title: "Child’s first hospital...",
    thumbnail: "/assets/img/project6.jpg",
    author: "Admin",
    date: "August 07, 2020",
    description:
      "Lorem Ipsum is simply dummy text of the print ing and typesetting industry. lorem Ipsum the standard.",
  },
];

export default function CategoryPage() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    setPosts(listPosts);
  }, []);
  return (
    <>
      <section className="relative bg-[#f9fafc] overflow-hidden bg-fixed bg-cover bg-[url('/assets/img/hero-bg6.jpg')]">
        <div className="h-[450px] pt-32 flex justify-center items-center relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:bg-black/60">
          <div className="container text-center text-white z-10">
            <h1 className="text-5xl mb-2">Our Latest News</h1>
            <h5 className="text-xl text-white/70">Gate all update news here</h5>
          </div>
        </div>
      </section>
      <section className="my-32">
        <div className="container flex flex-col lg:flex-row">
          <div className="lg:w-2/3 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div key={post.id} className="mb-4 group">
                  <a
                    href="/single"
                    className="block relative overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/30 after:opacity-0 after:group-hover:opacity-100 after:transition-all after:duration-300"
                  >
                    <figure className="max-h-72 overflow-hidden transition-all duration-300 group-hover:scale-110">
                      <img src={post.thumbnail} alt={post.title} />
                    </figure>
                  </a>
                  <div className="my-4">
                    <h2 className="text-2xl my-2 text-black hover:text-primary transition-all duration-300">
                      <a href="/single">{post.title}</a>
                    </h2>
                    <span className="flex items-center text-[#b5b5b5]">
                      <span className="pr-4 border-r">{post.author}</span>
                      <span className="ml-4">{post.date}</span>
                    </span>
                    <p className="mt-4">{post.description}</p>
                  </div>
                  <a
                    href="/single"
                    className="inline-block rounded-md py-2 px-4 hover:bg-primary border border-primary text-primary hover:text-white font-bold"
                  >
                    Reade More
                  </a>
                </div>
              ))}
            </div>

            <ul className="mt-10 flex justify-center">
              <li>
                <button className="px-4 py-2 border border-gray-200 rounded-tl-md rounded-bl-md">
                  Prev
                </button>
              </li>
              <li>
                <button className="px-4 py-2 border border-gray-200">1</button>
              </li>
              <li>
                <button className="px-4 py-2 border border-primary bg-primary text-white">
                  2
                </button>
              </li>
              <li>
                <button className="px-4 py-2 border border-gray-200">3</button>
              </li>
              <li>
                <button className="px-4 py-2 border border-gray-200 rounded-tr-md rounded-br-md">
                  Next
                </button>
              </li>
            </ul>
          </div>

          <Sidebar />
        </div>
      </section>
    </>
  );
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
