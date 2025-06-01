import clsx from "clsx";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Size } from "@/constants/variable";
import { Dispatch, SetStateAction, useState } from "react";

const Header = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header
      className={clsx(
        "w-full flex justify-center px-2 py-5 lg:px-10 bg-blue-400 text-white"
      )}
    >
      <div
        style={{ maxWidth: Size.MOBILE_SIZE_MAX }}
        className={clsx(
          "flex w-full max-w-[768px] justify-between items-center"
        )}
      >
        <span
          onClick={() =>
            setIsOpen((prev) => {
              return !prev;
            })
          }
        >
          <Icon path={mdiMenu} size={2} className="lg:hidden block" />
        </span>
        <div className="font-bold text-xl">Header</div>
      </div>
    </header>
  );
};

export default Header;
