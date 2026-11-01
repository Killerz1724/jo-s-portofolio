import clsxm from "@riverfl0w/clsxm";
import Link from "next/link";
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
  return (
    <div className="flex w-full justify-start">
      <Link
        href={href}
        className={clsxm(
          "inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-white rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          className
        )}
      >
        {children}
      </Link>
    </div>
  );
}
