"use client";
import styles from "./header.module.css";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import BurgerNavUlList from "../Navigation/BurgerNavUlList";
import MainButton from "../UI/MainButton/MainButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setIsAtTop(true);
    }
    if (latest !== 0) {
      setIsAtTop(false);
    }
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={isAtTop ? { height: "100px" } : {}}
      className={`${styles.header__container}`}
    >
      <div
        // style={isAtTop ? { width: "100px" } : {}}
        className={styles.header__container_logo}
      >
        <div
          style={
           !isAtTop
              ? { position: "absolute", transform: 'translateX(-110%)',   
                transition: 'transform 0.3s ease' }
              : { position: "absolute", transform: 'translateX(0%)' ,  
                transition: 'transform 0.3s ease' }
          }
        >
         <MainButton text="Оставить заявку" />
        </div>
      </div>
      <section className={styles.header__container_right}>
        {/* <div className={styles.header__container_contacts}>
          <Mail color="red" size={"s"} />
          <Telegram size={"s"} />
        </div> */}
        <nav className={styles.header__container_nav}>
          <button onClick={toggleMenu} className={styles.burger__button}>
            {/* Иконка бургер-меню */}
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
          </button>
        </nav>
      </section>
      <BurgerNavUlList isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
