"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";

const Header = () => {
  const pathname = usePathname();
  const [getMenu, setMenu] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Deals", path: "/deals" },
    { title: "What's New", path: "/what-new" },
  ];

  return (
    <div className="w-full h-20 font-Inter bg-gray-300 shadow-md">
      <div className="h-full flex items-center justify-between container mx-auto px-4">
        {/* Left Section: Toggle Icon and Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Toggle Icon */}
          <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
            {getMenu ? (
            <RiCloseLine className="text-2xl "/>
            ) : (
              <CgMenuLeft className="text-2xl "/>
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Image src="/images/header/logo.png" alt="logo" height={40} width={120} />
          </div>
        </div>

        {/* Navigation Links - Centered */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`px-4 py-1 rounded-md ${
                    pathname === item.path ? "font-extrabold text-primary" : ""
                  }`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Right Section: Login Button */}
        <div className="flex items-center justify-end lg:justify-start">
          <Link href="/login">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {getMenu && (
        <div className="lg:hidden bg-gray-300 p-4 absolute top-20 left-0 w-full shadow-md">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`px-4 py-2 rounded-md ${
                    pathname === item.path ? "font-extrabold text-primary" : ""
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
  );
};

export default Header;
