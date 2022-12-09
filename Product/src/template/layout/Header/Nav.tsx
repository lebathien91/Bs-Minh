import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

import { navs } from "../../../../data/nav";

const Nav = ({ homePage }: { homePage?: Boolean }) => {
  const [navbars, setNavbars] = useState<any[]>([]);

  useEffect(() => {
    setNavbars(navs);
  }, []);
  return (
    <nav className="container flex justify-between items-center h-20 ">
      <Link href="/" className="w-[145px] h-[45px]">
        <img src="/assets/img/logo.png" alt="img" />
      </Link>

      <ul className="flex items-center font-semibold">
        {homePage
          ? navbars.map((nav) => (
              <li className="ml-8 group relative" key={nav.id}>
                <Scroll
                  className="py-3 hover:text-primary relative flex justify-center cursor-pointer after:content-[''] after:transition-all after:duration-200 after:ease-linear after:absolute after:bottom-1 after:h-[2px] after:hover:w-full after:w-0 after:bg-primary"
                  activeClass="after:w-full text-primary"
                  to={nav.slug}
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {nav.name}
                </Scroll>
                {nav.subNavs.length > 0 && (
                  <ul className="absolute -left-6 top-full bg-white rounded-sm overflow-hidden shadow-3xl py-2 hidden group-hover:block">
                    {nav.subNavs.map((subNav: any) => (
                      <li className="hover:bg-gray-100" key={subNav.id}>
                        <a
                          className="block w-max text-black py-2 px-4"
                          href={subNav.slug}
                        >
                          {subNav.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          : navbars.map((nav) => (
              <li className="ml-8 group relative" key={nav.id}>
                <Link
                  href={`/#${nav.slug}`}
                  className="py-3 hover:text-primary relative flex justify-center cursor-pointer after:content-[''] after:transition-all after:duration-200 after:ease-linear after:absolute after:bottom-1 after:h-[2px] after:w-0 after:hover:w-full after:bg-primary"
                >
                  {nav.name}
                </Link>
                {nav.subNavs.length > 0 && (
                  <ul className="absolute -left-6 top-full bg-white rounded-sm overflow-hidden shadow-3xl py-2 hidden group-hover:block">
                    {nav.subNavs.map((subNav: any) => (
                      <li className="hover:bg-gray-100" key={subNav.id}>
                        <a
                          className="block w-max text-black py-2 px-4"
                          href={subNav.slug}
                        >
                          {subNav.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default Nav;
