"use client";

import { Size } from "@/constants/variable";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import { MouseEvent, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width, ref } = useResizeDetector({
    onResize: () => {
      // Perform actions on resize
    },
    handleWidth: true,
    refreshMode: "throttle",
    refreshRate: 20,
  });

  function handleClick(e: MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <header
      className={clsx(
        "relative w-full flex justify-center px-2 py-5 lg:px-10 bg-blue-400 text-white"
      )}
      ref={ref}
    >
      <div
        style={{ maxWidth: Size.MOBILE_SIZE_MAX }}
        className={clsx(
          "flex w-full max-w-[768px] justify-between items-center"
        )}
      >
        <span className="lg:hidden block relative z-10" onClick={handleClick}>
          <Icon path={mdiMenu} size={2} />
        </span>
      </div>
      <div className="relative z-0">
        {width! > 1024 && <SideBar />}

        {isOpen && <SideBar />}
      </div>
    </header>
  );
};

export default Header;
