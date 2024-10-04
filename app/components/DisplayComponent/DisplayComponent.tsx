"use client";

import { useAppPathName } from "@/app/store/hooks/hooks";
import { ReactNode } from "react";

export default function DisplayComponent({
  children, reference
}: {
  children: ReactNode;
  reference:string
}) {
  const currentPath = useAppPathName();
  console.log(currentPath, reference)

  return (
    <div
      style={
        currentPath !== `${reference}`
          ? { width: "100%", height: "100%" }
          : { display: "none" }
      }
    >
      {children}
    </div>
  );
}
