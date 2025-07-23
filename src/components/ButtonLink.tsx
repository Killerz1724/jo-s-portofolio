"use client";

import clsxm from "@riverfl0w/clsxm";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <div className="flex w-full justify-start">
      <button
        onClick={() => router.push(href)}
        className={clsxm(
          `px-2 py-1 text-white text-sm font-semibold rounded-md bg-blue-400 hover:cursor-pointer hover:bg-blue-200 active:bg-blue-600`,
          className
        )}
      >
        {children}
      </button>
    </div>
  );
}
