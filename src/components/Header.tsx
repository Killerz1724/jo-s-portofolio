"use client";

import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import SideBar from "./SideBar";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  return (
    <header
      className={clsx(
        "fixed z-50 lg:relative w-full flex justify-center px-4 py-4 lg:px-10 bg-blue-500/95 dark:bg-slate-900/95 dark:border-b dark:border-slate-800 text-white backdrop-blur-md transition-colors duration-300 shadow-sm"
      )}
    >
      <div className="flex w-full max-w-[1200px] justify-between items-center relative z-20">
        {/* Left: Hamburger menu toggle on mobile + Brand logo on both mobile and desktop */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
          >
            <Icon path={mdiMenu} size={1.4} />
          </button>

          <Link
            href="/#headline"
            className="font-extrabold text-xl tracking-tight text-white hover:text-blue-100 transition-colors"
          >
            Tejo<span className="text-blue-200">folio</span>
          </Link>
        </div>

        {/* Right: Always anchored ThemeToggle button */}
        <div className="flex items-center gap-2 ml-auto">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Drawer SideBar with backdrop */}
      {isOpen && (
        <div className="block lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade animate-duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <SideBar onClose={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
