"use client";

import { useAppPathName } from "@/app/store/hooks/hooks";
import { ReactNode } from "react";

export default function DisplayComponent({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useAppPathName();
  return (
    <div
      style={
        currentPath !== "/common"
          ? { width: "100%", height: "100%" }
          : { display: "none" }
      }
    >
      {children}
    </div>
  );
}
