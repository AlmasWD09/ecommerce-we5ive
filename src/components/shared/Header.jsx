"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";



const Header = () => {
  const pathname = usePathname();
  const [getMenu, setMenu] = useState(false);
  const router = useRouter();


  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Deals", path: "/deals" },
    { title: "What's New", path: "/what-new" },
  ];

  const handleClick = () => {
    router.push('/')
  }
  return (
    <nav>
      <div className="w-full h-20 font-Inter bg-white shadow-md">
      <div className="h-full flex items-center justify-between container mx-auto px-4">
        {/* Left Section: Toggle Icon and Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Toggle Icon */}
          <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
            {getMenu ? (
              <RiCloseLine className="text-2xl " />
            ) : (
              <CgMenuLeft className="text-2xl " />
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Image onClick={() => handleClick()} src="/images/header/logo.png" alt="logo" height={40} width={120} />
          </div>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`px-4 py-1 rounded-md font-Manrope text-[16px] ${pathname === item.path ? "font-extrabold text-primary" : ""
                    }`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Right Section: Login Button */}

        <div className="flex items-center justify-end lg:justify-start gap-3">
          {/* search bar */}
          <div className="relative mt-4 md:mt-0 pr-6 md:pr-0">
            <span className="absolute inset-y-0 left-0 flex items-center md:pl-3 -top-3 md:-top-0">
              <svg
                className="w-8 h-8 md:w-5 md:h-5 text-gray-900 md:text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="hidden md:block w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full outline-none"
              placeholder="Search"
            />
          </div>

          <span><HiOutlineShoppingBag className="text-2xl" /></span>
          <span><FaUser className="text-xl" /></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {getMenu && (
        <div className="lg:hidden bg-gray-300 p-4 absolute top-20  z-50 left-0 w-full shadow-md">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`px-4 py-2 rounded-md ${pathname === item.path ? "font-extrabold text-primary" : ""
                    }`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
    </nav>
  );
};

export default Header;
