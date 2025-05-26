"use client";

import { Size } from "@/constants/variable";
import clsx from "clsx";
import React from "react";
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

    return (
        <div
            className={clsx(
                "flex",
                "flex-col",
                'min-h-svh'
            )}
            ref={ref}
        >
            <Header />
            <div>
                {width! > Size.MOBILE_SIZE_MAX && <SideBar />}
                {children}
            </div>
        </div>
    );
};

export default Layout;
