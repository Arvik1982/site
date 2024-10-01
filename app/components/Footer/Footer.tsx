'use client'

import { useAppDispatch } from "@/app/store/hooks/hooks";
import RoundedButton from "../UI/RoundedButton/RoundedButton";
import styles from "./footer.module.css";
import { setScrollToUpId } from "@/app/store/slices/pageStatesSlice";

export default function Footer() {

  
  const dispatch = useAppDispatch()
  

  return (
    <footer className={`${styles.footer__container}`}>
    <RoundedButton onClick={()=>{dispatch(setScrollToUpId('focus_start'))}} />
    </footer>
  );
}
