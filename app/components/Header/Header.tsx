'use client'

import Image from 'next/image'
import styles from'./header.module.css'
import { useState } from 'react';
import LogoTop from '../Logo/Logo';

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return(
        <header className={styles.header__container}>
            <div className={styles.header__container_logo}>
                <LogoTop/>
            </div>
            <div className={styles.header__container_contacts}>
               <span> mail</span>
               <span> tg</span>
            </div>
            <nav className={styles.header__container_nav}>
                <button onClick={toggleMenu} className={styles.burgerButton}>
                    {/* Иконка бургер-меню */}
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    
                </button>
                
            </nav>
            {isMenuOpen && (
                    <ul className={`${styles.navList} ${styles.slideIn}`}>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/contact">Контакты</a></li>
                    </ul>
                )}
        </header>
    )
}