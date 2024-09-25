"use client";
import { useState } from "react";
import styles from "./page.module.css";
import img from "./public/standart_img.png";
import home_data from "./mock/home_data.json";
import HomeSectionWrapper from "./components/HomeSectionWrapper/HomeSectionWrapper";
import BackGroundSvg from "./components/BackGroundSvg/BackGroundSvg/BackGroundSvg";
import MainButton from "./components/UI/MainButton/MainButton";
import RoundedImage from "./components/RoundedImage/RoundedImage";
import AdvantageBox from "./components/AdvantageBox/AdvantageBox";
import BackGroundSquareSvg from "./components/BackGroundSvg/BackGroundSquareSvg/BackGroundSquareSvg";
import AbilitiesBox from "./components/AbilitiesBox/AbilitiesBox";
import ScrollX from "./components/ScrollX/ScrollX";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import ImageOpener from "./components/ImageOpener/ImadeOpener";

export default function Home() {
  const [avatarSrc, setAvatarSrc] = useState(img);
  const DESCRIPTIONS = home_data.description;
  const ADVANTAGES = home_data.advantages;
  const ABILITIES = home_data.abilities;

  return (
    <main className={styles.home__container}>
      <HomeSectionWrapper>
        <BackGroundSvg />
        <h1 className={styles.info__text_title}>Центр по важной работе </h1>
        <RoundedImage img={avatarSrc} />
        
        <div className={styles.info__text_container}>
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
        </div>
        <MainButton text={"Связаться с нами"} />
      </HomeSectionWrapper>

      <HomeSectionWrapper>
        <BackGroundSvg rotation="180" color="#504186" />
        <h2 className={styles.info__text}>Наши преимущества</h2>
        <div className={styles.advantages__container}>
          {ADVANTAGES &&
            ADVANTAGES.map((advantage, index) => {
              return (
                <AdvantageBox
                  key={index}
                  index={index}
                  advantage={advantage.advantage}
                />
              );
            })}
        </div>
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
        <AboutCompany/>
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
          {ABILITIES &&
            ABILITIES.map((ability, index) => {
              return (
                <AbilitiesBox
                  key={index}
                  index={index}
                  ability={ability.ability}
                />
              );
            })}
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
        <div>
        <ImageOpener src={img}/>
        </div>
      </HomeSectionWrapper>

      <HomeSectionWrapper>
        <BackGroundSquareSvg />
        contacts
      </HomeSectionWrapper>
    </main>
  );
}
