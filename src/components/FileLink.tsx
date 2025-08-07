"use client";
import Icon from "@mdi/react";
import React from "react";

export default function FileLink({
  link,
  leftIcon,
  children,
}: {
  link: string;
  leftIcon?: string;
  children: React.ReactNode;
}) {
  function handleClick() {
    window.open(link);
  }
  return (
    <button
      className="bg-blue-400 flex gap-2 items-center text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
      onClick={handleClick}
    >
      {leftIcon && <Icon path={leftIcon} size={1.5} />}
      {children}
    </button>
  );
}
