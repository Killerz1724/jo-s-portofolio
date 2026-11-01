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
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      {leftIcon && <Icon path={leftIcon} size={1} />}
      {children}
    </a>
  );
}
