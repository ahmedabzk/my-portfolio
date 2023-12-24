"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ThemeToggle from "./ThemeToggle";

const menuItemsData = [
  {
    title: " Home",
    url: "/",
  },
  {
    title: " About",
    url: "#about",
  },
  {
    title: "Teck Stack<",
    url: "#teck-stack",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathName = usePathname();
  return (
    <nav className="flex z-10 dark:bg-[#121212] ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <div>
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-800 text-slate-800 hover:text-black hover:border-black dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {menuItemsData.map((menuItem, index) => (
              <li key={index}>
                <Link
                  href={menuItem.url}
                  className="block py-2 pl-3 pr-4  text-slate-600 hover:text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 dark:hover:text-white"
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ThemeToggle />
      </div>
      {navbarOpen ? <MenuOverlay links={menuItemsData} /> : null}
    </nav>
  );
}

export default NavBar;

const MenuOverlay = ({ links }) => {
  return (
    <ul
      className="flex flex-col py-4 items-center justify-center "
      role="menu"
      data-popover="menu"
      data-popover-placement="bottom"
    >
      {links.map((link, index) => (
        <li key={index} role="menuitem">
          <Link
            href={link.url}
            className="block py-2 pl-3 pr-4 text-slate-600 hover:text-slate-950 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 dark:hover:text-white"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
