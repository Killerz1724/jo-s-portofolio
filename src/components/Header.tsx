import clsx from "clsx";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Size } from "@/constants/variable";

const Header = () => {
    return (
        <header className={clsx("w-full  px-5 py-5 bg-blue-400 text-white")}>
            <div
                style={{ maxWidth: Size.MOBILE_SIZE_MAX }}
                className={clsx("flex justify-between items-center")}
            >
                <Icon path={mdiMenu} size={2} className="lg:hidden block" />
                <div className="font-bold text-xl">Header</div>
            </div>
        </header>
    );
};

export default Header;
