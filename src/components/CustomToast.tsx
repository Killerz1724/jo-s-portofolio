import React, { HTMLAttributes } from "react";
import { toast, ToastContentProps } from "react-toastify";

const Notify = ({ message }: { message: string }) => {
  toast(WithCustomProgressBar, {
    position: "top-right",
    autoClose: 5000,
    closeButton: false,
    customProgressBar: true,
    data: { message },
  });
};

function WithCustomProgressBar({
  closeToast,
  isPaused,
  toastProps,
  data,
}: ToastContentProps<{ message: string }>) {
  const strokeDash = 565.48;
  const attributes: HTMLAttributes<SVGCircleElement> = {};

  // handle controlled progress bar
  // controlled progress bar uses a transition
  if (typeof toastProps.progress === "number") {
    attributes.style = {
      transition: "all .1s linear",
      strokeDashoffset: `${strokeDash - strokeDash * toastProps.progress}px`,
    };

    if (toastProps.progress >= 1) {
      attributes.onTransitionEnd = () => {
        closeToast();
      };
    }
  } else {
    // normal autoclose uses an animation
    // animation inside index.css
    attributes.className = "animate";
    attributes.style = {
      animationDuration: `${toastProps.autoClose}ms`,
      animationPlayState: isPaused ? "paused" : "running",
    };

    attributes.onAnimationEnd = () => {
      closeToast();
    };
  }
  return (
    <div className="flex justify-between  items-center w-full">
      <p>{data.message}</p>
      <svg
        width="40"
        height="40"
        viewBox="-25 -25 250 250"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-90"
      >
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth="6"
          strokeDasharray={`${strokeDash}px`}
          strokeDashoffset="0"
        />
        <circle
          r="90"
          cx="100"
          cy="100"
          stroke="#2563eb"
          strokeWidth="16px"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={`${strokeDash}px`}
          {...attributes}
        />
      </svg>
    </div>
  );
}

export default Notify;
