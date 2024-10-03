'use client'

import styles from "./burgerNavUlList.module.css";
import CloseIcon from "../Icons/CloseIcon";
import RoundedButton from "../UI/RoundedButton/RoundedButton";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { useAppDispatch } from "@/app/store/hooks/hooks";
import { setScrollToUpId } from "@/app/store/slices/pageStatesSlice";

type TProps = {
  isMenuOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLElement>;
};




export default function BurgerNavUlList({ isMenuOpen, toggleMenu }: TProps) {

    const dispatch = useAppDispatch();


const handleScrollTo=(target:string):void=>{
dispatch(setScrollToUpId(target));


}

const handleLinkClick = (event: React.MouseEvent<HTMLElement>, target: string) => {
    event.preventDefault(); // Prevent default link behavior
    toggleMenu(event); // Pass the event to toggleMenu
    handleScrollTo(target); // Then call handleScrollTo
  };

  return (
    <>
      {isMenuOpen && (
        <ul className={`${styles.nav__list} ${styles.slide__in}`}>
          <li style={{ position: "absolute", top: "0", right: "10px" }}>
            <RoundedButton onClick={toggleMenu}>
              <CloseIcon />
            </RoundedButton>
          </li>
          <li>
            <Link onClick={(event)=>handleLinkClick(event,'focus_start')} href="/">Главная</Link>
          </li>
          <li>
            <Link onClick={(event)=>handleLinkClick(event,'focus_about')} href="/">О нас</Link>
          </li>
          <li>
            <Link onClick={(event)=>handleLinkClick(event,'focus_contacts')} href="/">Контакты</Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/common/login">
              Войти
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
