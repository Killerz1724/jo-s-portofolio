import clsx from "clsx";
import React from "react";
import Icon from "@mdi/react";
import { mdiBriefcase, mdiHome, mdiHammerScrewdriver, mdiForum } from "@mdi/js";

const SideBar = () => {

    return (
        <>
            <div
                className={clsx(
                    "fixed flex flex-col h-screen justify-center items-center  ml-5 text-white"
                )}
            >
                <div
                    className={clsx(
                        "flex flex-col min-h-[16rem] rounded-3xl items-center gap-[2rem] px-5 py-6 bg-blue-400  ml-5 text-white"
                    )}
                >
                    <span>
                        <Icon path={mdiHome} size={2} color={"white"} />
                    </span>
                    <span>
                        <Icon path={mdiBriefcase} size={2} color={"white"} />
                    </span>
                    <span>
                        <Icon path={mdiHammerScrewdriver} size={2} color={"white"} />
                    </span>
                    <span>
                        <Icon path={mdiForum} size={2} color={"white"} />
                    </span>
                </div>
            </div>
        </>
    );
};

export default SideBar;
