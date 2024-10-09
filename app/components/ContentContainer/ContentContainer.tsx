'use client'

import { useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useState } from "react";
import { setScrollToUpId } from "../../store/slices/pageStatesSlice";
import { useAppDispatch } from "@/app/store/hooks/hooks";
import styles from "./contentContainer.module.css";

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  const dispatch = useAppDispatch();
  const [isAtTop, setIsAtTop] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setIsAtTop(true);
    }
    if (latest !== 0) {
      setIsAtTop(false);
      dispatch(setScrollToUpId(""));
    }
  });

  return (
    <main
      style={isAtTop ? { marginTop: "100px" } : {}}
      className={styles.home__container}
    >
      {children}
    </main>
  );
}
