"use client";
import Icon from "@mdi/react";
import Notify from "./CustomToast";

export default function CopyClipboard({
  leftIcon,
  displayText,
  textCopy,
}: {
  leftIcon?: string;
  displayText: string | null;
  textCopy: string;
}) {
  async function handleClick() {
    try {
      await navigator.clipboard.writeText(textCopy);
    } catch (error: unknown) {
      Notify({ message: error as string });
    } finally {
      Notify({ message: "Copied to clipboard" });
    }
  }
  return (
    <span className="hover:cursor-pointer " onClick={handleClick}>
      {leftIcon && <Icon path={leftIcon} size={2} color={"#2563eb"} />}
      {displayText}
    </span>
  );
}
