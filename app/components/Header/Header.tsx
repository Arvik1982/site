"use client";
import styles from "./header.module.css";
import { useState } from "react";
import LogoTop from "../Logo/Logo";
import Mail from "../Contacts/_components/Mail";
import Telegram from "../Contacts/_components/Telegram";
import { useMotionValueEvent, useScroll } from 'framer-motion';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);
  

  useMotionValueEvent(scrollY, "change", (latest) => { 
    if(latest===0)  {setIsAtTop(true)}
    if(latest!==0)  {setIsAtTop(false)}    
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header  style={isAtTop?{height:'100px'}:{}} className={`${styles.header__container}`}>      
      <div style={isAtTop?{width:'100px'}:{}} className={styles.header__container_logo}>
        <LogoTop />
      </div>
      <section className={styles.header__container_right}>
        <div className={styles.header__container_contacts}>
          <Mail size={"s"} />
          <Telegram size={"s"} />
        </div>
        <nav className={styles.header__container_nav}>
          <button onClick={toggleMenu} className={styles.burger__button}>
            {/* Иконка бургер-меню */}
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
          </button>
        </nav>
      </section>
      {isMenuOpen && (
        <ul className={`${styles.navList} ${styles.slideIn}`}>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/contact">Контакты</a>
          </li>
        </ul>
      )}
    </header>
  );
}
