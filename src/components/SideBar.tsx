import clsx from "clsx";
import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiBriefcase, mdiHome, mdiHammerScrewdriver, mdiForum } from "@mdi/js";

const SideBar = () => {
  return (
    <>
      <div
        className={clsx(
          "fixed flex flex-col h-screen justify-center items-center  ml-1 lg:ml-5 text-white"
        )}
      >
        <div
          className={clsx(
            "flex flex-col min-h-[16rem] rounded-3xl items-center gap-[2rem] px-5 py-6 bg-blue-400  ml-5 text-white"
          )}
        >
          <span>
            <Icon
              path={mdiHome}
              className="size-[2rem] lg:size-[3rem]"
              color={"white"}
            />
          </span>
          <span>
            <Icon
              path={mdiHammerScrewdriver}
              className="size-[2rem] lg:size-[3rem]"
              color={"white"}
            />
          </span>
          <span>
            <Icon
              path={mdiBriefcase}
              className="size-[2rem] lg:size-[3rem]"
              color={"white"}
            />
          </span>
          <span>
            <Icon
              path={mdiForum}
              className="size-[2rem] lg:size-[3rem]"
              color={"white"}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
