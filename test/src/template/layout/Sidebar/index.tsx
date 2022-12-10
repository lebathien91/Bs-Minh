import React from "react";
import SidebarWidget from "../../block/SidebarWidget";

const Sidebar = () => {
  return (
    <aside className="mt-10 lg:w-1/3 lg:mt-0 px-4">
      <SidebarWidget title="Categories">
        <ul>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">Audio</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">Video</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">Gallery</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">Doctors</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">Patients</a>
          </li>
        </ul>
      </SidebarWidget>
      <SidebarWidget title="Arachives">
        <ul>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">March 2020</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">May 2020</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">June 2020</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">August 2020</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">September 2020</a>
          </li>
          <li className="py-3 border-b last:border-none hover:text-primary">
            <a href="#">October 2020</a>
          </li>
        </ul>
      </SidebarWidget>
      <SidebarWidget title="Recent Post">
        <ul>
          <li className="py-3 border-b last:border-none">
            <div className="flex items-center">
              <div className="overflow-hidden">
                <figure className="min-w-16 w-20 max-h-16">
                  <img src="/assets/img/project1.jpg" alt="img" />
                </figure>
              </div>
              <div className="ml-4">
                <h4 className="text-[17px] text-black hover:text-red-500">
                  <a href="#">Top Medical Tourism Destination...</a>
                </h4>
                <span>Jan 22, 2020</span>
              </div>
            </div>
          </li>
          <li className="py-3 border-b last:border-none">
            <div className="flex items-center">
              <div className="overflow-hidden">
                <figure className="min-w-16 w-20 max-h-16">
                  <img src="/assets/img/project2.jpg" alt="img" />
                </figure>
              </div>
              <div className="ml-4">
                <h4 className="text-[17px] text-black hover:text-red-500">
                  <a href="#">Overview Malaysia as a medical tourism...</a>
                </h4>
                <span>Jan 22, 2020</span>
              </div>
            </div>
          </li>
          <li className="py-3 border-b last:border-none">
            <div className="flex items-center">
              <div className="overflow-hidden">
                <figure className="min-w-16 w-20 max-h-16">
                  <img src="/assets/img/project3.jpg" alt="img" />
                </figure>
              </div>
              <div className="ml-4">
                <h4 className="text-[17px] text-black hover:text-red-500">
                  <a href="#">World Parkinson’s Day 2020 comes...</a>
                </h4>
                <span>Jan 22, 2020</span>
              </div>
            </div>
          </li>
        </ul>
      </SidebarWidget>
      <SidebarWidget title="Popular Tags">
        <ul className="flex flex-wrap">
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Gallery</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Quote</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Video</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Quote</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Audio</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Doctors</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Link</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Ipsum</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Enviroment</a>
          </li>
          <li className="py-1 px-2 mr-2 mt-2 rounded-md border inline-block hover:bg-primary hover:text-white">
            <a href="#">Corporate</a>
          </li>
        </ul>
      </SidebarWidget>
    </aside>
  );
};

export default Sidebar;
