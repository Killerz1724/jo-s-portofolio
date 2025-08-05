import { mdiBriefcase, mdiForum, mdiHammerScrewdriver, mdiHome } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <div
        className={clsx(
          "fixed z-50 left-0 flex flex-col h-screen justify-center items-center  ml-1 lg:ml-5 text-white"
        )}
      >
        <div
          className={clsx(
            "flex flex-col min-h-[16rem] rounded-3xl items-center gap-[2rem] px-5 py-6 bg-blue-400  ml-5 text-white"
          )}
        >
          <span>
            <Link href="/#headline">
              <Icon
                path={mdiHome}
                className="size-[2rem] lg:size-[2rem]"
                color={"white"}
              />
            </Link>
          </span>
          <span>
            <Link href="/#skills">
              <Icon
                path={mdiHammerScrewdriver}
                className="size-[2rem] lg:size-[2rem]"
                color={"white"}
              />
            </Link>
          </span>
          <span>
            <Link href="/#career">
              <Icon
                path={mdiBriefcase}
                className="size-[2rem] lg:size-[2rem]"
                color={"white"}
              />
            </Link>
          </span>
          <span>
            <Link href="/#contact">
              <Icon
                path={mdiForum}
                className="size-[2rem] lg:size-[2rem]"
                color={"white"}
              />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
