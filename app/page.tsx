"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import topBGround from "./public/dev_img_2.jpg";
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
import Map from "./components/Map/Map";
import AdvantagesContainer from "./components/Advantages/AdvantagesContainer/AdvantagesContainer";
import AbilitiesContainer from "./components/Abilities/AbilitiesContainer/AbilitiesContainer";
import { useAppSelector } from "./store/hooks/hooks";
import Image from "next/image";

export default function Home() {
  const DESCRIPTIONS = home_data.description;

  const certArr = [
    { id: 1, imgCert: imgCert3 },
    { id: 2, imgCert: imgCert3 },
    { id: 3, imgCert: imgDoggy },
  ];

  const scrollToStartId = useAppSelector(
    (state) => state.pageStatesSlice.scrollToUpId
  );
  const refTop = useRef<HTMLHeadingElement>(null);
  const refContacts = useRef<HTMLHeadingElement>(null);
  const refAbout = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (scrollToStartId === "focus_start" && refTop.current) {
      refTop.current.scrollIntoView({ behavior: "smooth", block: "start" }); // Плавная прокрутка
      // Устанавливаем фокус с небольшой задержкой
      setTimeout(() => {
        refTop.current?.focus();
      }, 300);
    }

    if (scrollToStartId === "focus_contacts" && refContacts.current) {
      refContacts.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }); // Плавная прокрутка
      // Устанавливаем фокус с небольшой задержкой
      setTimeout(() => {
        refContacts.current?.focus();
      }, 300);
    }

    if (scrollToStartId === "focus_about" && refAbout.current) {
      refAbout.current.scrollIntoView({ behavior: "smooth", block: "start" }); // Плавная прокрутка
      // Устанавливаем фокус с небольшой задержкой
      setTimeout(() => {
        refAbout.current?.focus();
      }, 300);
    }
  }, [scrollToStartId]);

  const handleContactsFocus = (): void => {
    refContacts.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [topIsLoaded, setTopIsLoaded] = useState(true);

  return (
    <>
      {topIsLoaded && (
        <section className={styles.top__section_wrapper}>
          <picture
            onLoadStart={() => setTopIsLoaded(false)}
            onLoad={() => setTopIsLoaded(true)}
            onError={() => setTopIsLoaded(true)}
            className={styles.title__background_pic}
          >
            <Image
              loading="lazy"
              className={styles.background__pic_img}
              src={topBGround}
              alt="background"
            />
          </picture>
          <BackGroundSvg color="#504186" />
          <div className={styles.info__title_container}>
            <h1 ref={refTop} tabIndex={0} className={styles.info__text_title}>
              Ваш веб-разработчик{" "}
            </h1>
          </div>
          <RoundedImage />
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
          <MainButton onClick={handleContactsFocus} text={"Связаться"} />
        </section>
      )}
            <HomeSectionWrapper>
            
        {" "}
        <h2 ref={refAbout} tabIndex={0} className={styles.info__text}>
          Об авторе:
        </h2>
        <BackGroundSquareSvg />
        <AboutCompany />
      </HomeSectionWrapper>

      <HomeSectionWrapper>
      <BackGroundSvg rotation="180" color="#504186" />
        <h2 className={styles.info__text_advantages}>Мои преимущества:</h2>
        <AdvantagesContainer />
      </HomeSectionWrapper>

      <HomeSectionWrapper>
        <h2 className={styles.info__text}>Портфолио:</h2>
        <BackGroundSquareSvg />
        <ScrollX>
          <AbilitiesContainer />
        </ScrollX>
      </HomeSectionWrapper>
      <HomeSectionWrapper>
        <h2 className={styles.info__text}>Диплом:</h2>
        <BackGroundSquareSvg />
        {certArr && <Certificates certificatesArr={certArr} />}
      </HomeSectionWrapper>

      <HomeSectionWrapper>
        <h2 className={styles.info__text}>Контакты:</h2>
        <BackGroundSquareSvg />
        <Contacts ref={refContacts} />
        <Map />
      </HomeSectionWrapper>
    </>
  );
}
