"use client";
import { useState } from "react";
import styles from "./page.module.css";
import img from "./public/standart_img.png";
import imgDoggy from "./public/1710836151743.jpg";
import imgCert3 from "./public/cert_3.jpg";
import home_data from "./mock/home_data.json";
import HomeSectionWrapper from "./components/HomeSectionWrapper/HomeSectionWrapper";
import BackGroundSvg from "./components/BackGroundSvg/BackGroundSvg/BackGroundSvg";
import MainButton from "./components/UI/MainButton/MainButton";
import RoundedImage from "./components/RoundedImage/RoundedImage";
import BackGroundSquareSvg from "./components/BackGroundSvg/BackGroundSquareSvg/BackGroundSquareSvg";
import ScrollX from "./components/ScrollX/ScrollX";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Certificates from "./components/Certificates/Certificates";
import Contacts from "./components/Contacts/Contacts";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Map from "./components/Map/Map";
import AdvantagesContainer from "./components/Advantages/AdvantagesContainer/AdvantagesContainer";
import AbilitiesContainer from "./components/Abilities/AbilitiesContainer/AbilitiesContainer";

export default function Home() {
  const [avatarSrc] = useState(img);
  const DESCRIPTIONS = home_data.description;
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);
  const certArr = [
    { id: 1, imgCert: imgCert3 },
    { id: 2, imgCert: imgCert3 },
    { id: 3, imgCert: imgDoggy },
  ];
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest === 0 ? setIsAtTop(true) : setIsAtTop(false);
  });

  return (
    <main
      style={isAtTop ? { marginTop: "100px" } : {}}
      className={styles.home__container}
    >
      <HomeSectionWrapper>
        <BackGroundSvg />
        <h1 className={styles.info__text_title}>Центр по важной работе </h1>
        <RoundedImage img={avatarSrc} />
        <article className={styles.info__text_container}>
          <ul className={styles.text__container_description}>
            {DESCRIPTIONS &&
              DESCRIPTIONS.map((description, index) => {
                return (
                  <li key={index}>
                    {" "}
                    <span>{description.description}</span>
                  </li>
                );
              })}
          </ul>
        </article>
        <MainButton text={"Связаться с нами"} />
      </HomeSectionWrapper>
      <HomeSectionWrapper>
        <BackGroundSvg rotation="180" color="#504186" />
        <h2 className={styles.info__text}>Наши преимущества</h2>
        <AdvantagesContainer />
      </HomeSectionWrapper>
      <HomeSectionWrapper>
        {" "}
        <h2
          style={{ color: "var(--main-text-color)" }}
          className={styles.info__text}
        >
          О компании:
        </h2>
        <BackGroundSquareSvg rotation={"180"} />
        <AboutCompany />
      </HomeSectionWrapper>
      <HomeSectionWrapper>
        <h2
          style={{ color: "var(--main-text-color)" }}
          className={styles.info__text}
        >
          Наши возможности
        </h2>
        <BackGroundSquareSvg />
        <ScrollX>
          <AbilitiesContainer />
        </ScrollX>
      </HomeSectionWrapper>
      <HomeSectionWrapper>
        <h2
          style={{ color: "var(--main-text-color)" }}
          className={styles.info__text}
        >
          Мои сертификаты
        </h2>
        <BackGroundSquareSvg />
        <Certificates certificatesArr={certArr} />
      </HomeSectionWrapper>

      <HomeSectionWrapper>
        <h2
          style={{ color: "var(--main-text-color)" }}
          className={styles.info__text}
        >
          Контакты
        </h2>
        <BackGroundSquareSvg rotation={"180"} />
        <Contacts />
        <Map />
      </HomeSectionWrapper>
    </main>
  );
}
