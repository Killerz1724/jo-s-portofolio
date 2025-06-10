import clsx from "clsx";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={clsx("flex", "flex-col", "min-h-svh")} >
      <Header />
      <div className="flex w-full items-center justify-center">
        <main
          className={clsx(
            "px-2 py-5 w-full flex items-center lg:px-10 lg:py-10 max-w-[768px] lg:max-w-[1400px]"
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
