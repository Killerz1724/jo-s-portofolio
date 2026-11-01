import clsx from "clsx";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "flex flex-col min-h-svh bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative"
      )}
    >
      <Header />

      {/* Desktop Persistent SideBar strictly fixed to the viewport */}
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="flex w-full items-center justify-center flex-1">
        <main
          className={clsx(
            "px-4 pb-10 pt-24 w-full flex items-center lg:px-28 lg:py-10 max-w-[768px] lg:max-w-[1200px]"
          )}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
