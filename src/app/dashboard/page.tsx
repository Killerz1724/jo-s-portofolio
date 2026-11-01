import clsx from "clsx";
import Headline from "./Headline";
import Skills from "./Skills";
import Career from "./Career";
import AnimateOnScroll from "@/lib/AnimateOnScroll";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <div className={clsx("w-full flex flex-col items-center gap-24 lg:gap-36")}>
      <AnimateOnScroll className="w-full">
        <Headline />
      </AnimateOnScroll>
      <AnimateOnScroll className="w-full">
        <Skills />
      </AnimateOnScroll>
      <AnimateOnScroll className="w-full">
        <Career />
      </AnimateOnScroll>
      <AnimateOnScroll className="w-full">
        <Projects />
      </AnimateOnScroll>
    </div>
  );
};

export default Dashboard;
