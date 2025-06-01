"use client";

import { Size } from "@/constants/variable";
import clsx from "clsx";
import React, { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { width, ref } = useResizeDetector({
    onResize: () => {
      // Perform actions on resize
    },
    handleWidth: true,
    refreshMode: "debounce",
    refreshRate: 100,
  });

  const [isOpen, setIsopen] = useState(false);
  return (
    <div className={clsx("flex", "flex-col", "min-h-svh")} ref={ref}>
      <Header setIsOpen={setIsopen} />
      <div>
        {width! > Size.MOBILE_SIZE_MAX && <SideBar />}
        {isOpen && <SideBar />}
        <div className="flex w-full items-center justify-center">
          <main
            className={clsx(
              "px-2 py-5 w-full flex items-center lg:px-10 lg:py-10 max-w-[768px]"
            )}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
