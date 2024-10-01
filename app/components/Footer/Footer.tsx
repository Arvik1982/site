"use client";

import { useAppDispatch } from "@/app/store/hooks/hooks";
import RoundedButton from "../UI/RoundedButton/RoundedButton";
import styles from "./footer.module.css";
import { setScrollToUpId } from "@/app/store/slices/pageStatesSlice";
import NextIcon from "../Icons/NextIcon";

export default function Footer() {
  const dispatch = useAppDispatch();

  return (
    <footer className={`${styles.footer__container}`}>
      <div
        style={{
          zIndex: "1002",
          position: "fixed",
          bottom: "5px",
          right: "10px",
        }}
      >
        <RoundedButton
          onClick={() => {
            dispatch(setScrollToUpId("focus_start"));
          }}
          
        > <NextIcon/></RoundedButton>
      </div>
    </footer>
  );
}
