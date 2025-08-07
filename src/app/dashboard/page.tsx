import clsx from "clsx";
import Headline from "./Headline";
import Skills from "./Skills";
import Career from "./Career";
import AnimateOnScroll from "@/lib/AnimateOnScroll";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <div className={clsx("w-full flex flex-col items-center gap-[15rem]")}>
      <AnimateOnScroll>
        <Headline />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Skills />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Career />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Projects />
      </AnimateOnScroll>
    </div>
  );
};

export default Dashboard;
