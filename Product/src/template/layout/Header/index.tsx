import React, { useEffect, useState } from "react";
import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";

import Nav from "./Nav";

const Header = ({ homePage }: { homePage?: Boolean }) => {
  const [sticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.pageYOffset > 48);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 ${
        sticky ? "bg-white shadow-md shadow-gray-200/90" : "bg-white/90"
      }`}
    >
      <div
        className={`border-b border-primary/30 ${sticky ? "hidden" : "block"}`}
      >
        <div className="container flex justify-between items-center h-12">
          <div className="flex">
            <span className="flex items-center mr-6">
              <MdOutlineEmail size={22} className="mr-2 text-text/70" />
              <a href="#">info@email.com</a>
            </span>
            <span className="flex items-center">
              <MdPhoneInTalk size={22} className="mr-2 text-text/70" />
              <a href="#">+84.988.888.888</a>
            </span>
          </div>

          <button className="text-primary font-bold hover:text-black">
            Đặt lịch ngay
          </button>
        </div>
      </div>

      <Nav homePage={homePage} />
    </header>
  );
};

export default Header;
