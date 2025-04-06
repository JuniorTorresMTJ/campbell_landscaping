"use client";

import Link from "next/link";

// components
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const links = [
  {
    name: "What we do",
    path: "/what",
  },
  {
    name: "Projects",
    path: "/project",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="bg-white py-24 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto relative flex items-center justify-end">
        {/* Logo clicável que leva à home */}
        <div className="absolute left-1/2 transform -translate-x-1/2">

            <Logo className="w-23 h-auto cursor-pointer" />

        </div>

        {/* Nav desktop */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul className="flex">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-primary text-sm uppercase font-primary font-medium tracking-[1.2px] after:mx-4 last:after:content-none after:text-accent"
              >
                <Link
                  href={link.path}
                  className="cursor-pointer hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Socials
            containerStyles="flex items-center ml-2"
            iconStyles="text-primary text-xl hover:text-accent transition-colors"
          />
        </nav>

        {/* Nav mobile */}
        <div className="xl:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
