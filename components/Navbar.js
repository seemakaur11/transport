import React, { useState } from 'react';
import locofy from "../public/Images/logo.png"
import Image from 'next/image';
import Link from "next/link";
import MENU from '../utility/data';
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();
  const route = pathname.substring(1);

  return (
    <div className="w-full h-20 font-titleFont sticky top-0 bg-[#f5f5f5] z-50 px-4">
      <div className="w-full h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={locofy}
            className="w-[167px] h-[70px] mr-2"
            width={100}
            height={40}
            alt="Logo"
          />
        </Link>
        <div className="lg:hidden absolute flex" style={{ right: "0"}}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "bloc"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? "block bg-white absolute right-0 top-14 px-2" : "hidden"} lg:inline-flex`}>
          <ul className="lg:inline-flex gap-32 text-base font-normal">
            {!!MENU &&
              MENU.map((data) => {
                const { id, link, menu, Icon } = data;
                return (
                  <li key={id} className="py-2">
                    <Link
                      href={`/${link}`}
                      className={`flex`}
                      onClick={() => setIsOpen(false)} // Close menu on link click
                    >
                      <Icon className={`m-[4px] text-lg`} />
                      <span
                        className={`text-${
                          route === link ? "amber-500" : "to-black"
                        }`}
                      >
                        {menu}
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div>
          <button className="items-center bg-amber-500 border-0 py-2 px-4 text-white hidden lg:inline-flex">
            Click Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
