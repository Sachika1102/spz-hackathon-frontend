"use client";

import { exportElementToPNG } from "@/lib/exportPNG";
import { useCallback } from "react";

export default function ExportPNGButton({
  targetRef,
  filename,
  className = "",
  label = "PNGで保存",
}: {
  targetRef: React.RefObject<HTMLElement>;
  filename: string;
  className?: string;
  label?: string;
}) {
  const onClick = useCallback(async () => {
    const node = targetRef.current;
    if (!node) return;
    await exportElementToPNG(node, filename);
  }, [targetRef, filename]);

  return (
    <button
      type="button"
      data-export-ignore="true"
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 ${className}`}
    >
      {label}
    </button>
  );
}
