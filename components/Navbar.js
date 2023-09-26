import React, { useState } from 'react';
import locofy from "../public/Images/jk-logo.png"
import Image from 'next/image';
import Link from "next/link";
import MENU from '../utility/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Home");
  const [active, setActive] = useState(0);

  const handleClick = (val, index) => {
    setValue(val)
    setActive(index)
  }

  return (
    <div className='className="w-full h-20 font-titleFont sticky top-0 bg-[#f5f5f5] z-50 px-4"'>
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
      <Link href="/">
          <Image src={locofy} className="w-[167px] h-[70px] mr-2" width={100} height={10} alt="Logo" />
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
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
        <div>
          <ul className="hidden lg:inline-flex gap-32 text-base font-normal">
            {
              !!MENU && MENU.map((data, index) => {
                const {id, link, menu, Icon} = data
                return (
                  <li key={id}><Link href={`/${link}`} className={`flex`} onClick={() => handleClick(menu, index)}>
                    <Icon className={`m-[4px] text-lg`} /><span className={`text-${index == active ? "amber-500" : "to-black"}`}>{menu}</span>
                    </Link></li>
                )
              })
            }
          </ul>
        </div>
        <div>
            <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
              Click Me
            </button>
          </div>
      </div>




{/* 
      <nav className="flex items-center justify-between flex-wrap p-6 w-full max-h-20 bg-[#f5f5f5]">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <Image src={locofy} className="w-[167px] h-[70px] mr-2" width={100} height={10} alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
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
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm lg:flex-grow">
            <Link href="/" className="block  lg:inline-block lg:mt-0 text-white-200 mr-4">
              Home
            </Link>
            <Link href="/" className="block  lg:inline-block lg:mt-0 text-white-200 mr-4">
              About
            </Link>
            <Link href="/" className="block  lg:inline-block lg:mt-0 text-white-200 mr-4">
              Service
            </Link>
            <Link href="/" className="block  lg:inline-block lg:mt-0 text-white-200 mr-4">
              Contact
            </Link>
          </div>
          <div>
            <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
              Click Me
            </button>
          </div>
        </div>
      </nav> */}
    </div>
  )
}

export default Navbar

{/* <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={80} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
            {
              !!MENU && MENU.map((data, index) => {
                return (
                  <li key={data.id}><Link href={`/${data.link}`} className={`text-${index == active ? "secondaryColor" : "to-black"}`} onClick={() => handleClick(data.menu, index)}>{data.menu}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src={
                session
                  ? session?.token?.picture!
                  : "../images/user.png"
              }
              alt="logo"
            />
            <p className="text-sm font-medium">
              {session ? session?.token?.name! : "Hello Stranger"}
            </p>
          </div>

          {session ? (
            <button
              onClick={() => signOut()}
              className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div> */}