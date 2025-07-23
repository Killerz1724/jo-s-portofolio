import clsx from "clsx";
import Headline from "./Headline";
import Skills from "./Skills";
import Career from "./Career";


const Dashboard = () => {
    return (
        <div className={clsx("w-full flex flex-col items-center gap-[10rem]")}>
            <Headline />
            <Skills />
            <Career />
        </div>
    );
};

export default Dashboard;
