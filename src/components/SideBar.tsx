"use client";

import {
  mdiBriefcase,
  mdiClose,
  mdiFileDocumentMultiple,
  mdiForum,
  mdiHammerScrewdriver,
  mdiHome,
} from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Tooltip from "./Tooltip";

interface SideBarProps {
  onClose?: () => void;
}

const navItems = [
  { id: "headline", label: "Dashboard", icon: mdiHome, href: "/#headline" },
  {
    id: "skills",
    label: "My Skills",
    icon: mdiHammerScrewdriver,
    href: "/#skills",
  },
  { id: "career", label: "My Careers", icon: mdiBriefcase, href: "/#career" },
  {
    id: "projects",
    label: "My Projects",
    icon: mdiFileDocumentMultiple,
    href: "/#projects",
  },
  { id: "contact", label: "Contact Me", icon: mdiForum, href: "/#contact" },
];

const SideBar: React.FC<SideBarProps> = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState<string>("headline");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className="fixed z-40 left-0 top-0 flex flex-col h-screen justify-center items-center ml-2 lg:ml-6 text-white pointer-events-none"
      aria-label="Sidebar Navigation"
    >
      <nav className="flex flex-col min-h-[16rem] rounded-3xl items-center gap-3 lg:gap-4 p-3.5 lg:p-4 bg-blue-500/95 dark:bg-slate-900/95 dark:border dark:border-slate-800 shadow-2xl backdrop-blur-md text-white transition-colors duration-300 pointer-events-auto">
        {/* Mobile close button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-full hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white mb-1"
            aria-label="Close navigation menu"
          >
            <Icon path={mdiClose} size={0.9} color="currentColor" />
          </button>
        )}

        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <span key={item.id}>
              <Tooltip text={item.label} position="right">
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-label={item.label}
                  className={clsx(
                    "p-2.5 rounded-2xl flex items-center justify-center transition-all duration-200",
                    isActive
                      ? "bg-white/25 text-white dark:bg-blue-600/30 dark:text-blue-400 shadow-sm ring-2 ring-white/50 dark:ring-blue-500/50 scale-110"
                      : "text-white/80 hover:text-white hover:bg-white/10 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60 hover:scale-105"
                  )}
                >
                  <Icon
                    path={item.icon}
                    className="size-[1.6rem] lg:size-[1.8rem]"
                    color="currentColor"
                  />
                </Link>
              </Tooltip>
            </span>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
