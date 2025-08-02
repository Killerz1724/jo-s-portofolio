import clsx from "clsx";
import Headline from "./Headline";
import Skills from "./Skills";
import Career from "./Career";
import AnimateOnScroll from "@/lib/AnimateOnScroll";

const Dashboard = () => {
  return (
    <div className={clsx("w-full flex flex-col items-center gap-[10rem]")}>
      <AnimateOnScroll>
        <Headline />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Skills />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Career />
      </AnimateOnScroll>
    </div>
  );
};

export default Dashboard;
