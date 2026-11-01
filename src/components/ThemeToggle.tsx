"use client";

import React, { useSyncExternalStore } from "react";
import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js";

const emptySubscribe = () => () => {};

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export default function ThemeToggle({ className }: { className?: string }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark");
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Render a placeholder with identical geometry to prevent layout shift during hydration
  if (!mounted) {
    return <div className={`w-9 h-9 rounded-xl ${className || ""}`} aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative z-20 cursor-pointer p-2 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
        isDark
          ? "bg-slate-800 text-amber-400 hover:bg-slate-700 hover:text-amber-300 shadow-inner"
          : "bg-blue-600/30 text-white hover:bg-blue-600/50 shadow-sm"
      } ${className || ""}`}
    >
      <Icon
        path={isDark ? mdiWhiteBalanceSunny : mdiWeatherNight}
        size={0.9}
        className="transition-transform duration-300 hover:rotate-12"
      />
    </button>
  );
}
