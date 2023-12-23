"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <div>
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
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
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={menuItemsData} /> : null}
    </nav>
  );
}

export default NavBar;

const MenuOverlay = ({ links }) => {
  return (
    <ul
      className="flex flex-col py-4 items-center "
      role="menu"
      data-popover="menu"
      data-popover-placement="bottom"
    >
      {links.map((link, index) => (
        <li key={index} role="menuitem">
          <Link
            href={link.url}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
