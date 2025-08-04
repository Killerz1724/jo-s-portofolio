"use client";
import Icon from "@mdi/react";

export default function CopyClipboard({
  leftIcon,
  displayText,
  textCopy,
}: {
  leftIcon?: string;
  displayText: string | null;
  textCopy: string;
}) {
  return (
    <span
      className="hover:cursor-pointer "
      onClick={() => navigator.clipboard.writeText(textCopy)}
    >
      {leftIcon && <Icon path={leftIcon} size={2} color={"#2563eb"} />}
      {displayText}
    </span>
  );
}
