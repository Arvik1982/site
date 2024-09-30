'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks/hooks";
import RoundedButton from "../UI/RoundedButton/RoundedButton";
import styles from "./footer.module.css";
import { setScrollToUp } from "@/app/store/slices/pageStatesSlice";

export default function Footer() {

  
  const dispatch =useAppDispatch()
  

  return (
    <footer className={`${styles.footer__container}`}>
    <RoundedButton onClick={()=>{dispatch(setScrollToUp(true))}} />
    </footer>
  );
}
