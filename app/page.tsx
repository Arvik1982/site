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
import AdvantageBox from "./components/AdvantageBox/AdvantageBox";
import BackGroundSquareSvg from "./components/BackGroundSvg/BackGroundSquareSvg/BackGroundSquareSvg";
import AbilitiesBox from "./components/AbilitiesBox/AbilitiesBox";
import ScrollX from "./components/ScrollX/ScrollX";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import ImageOpener from "./components/ImageOpener/ImageOpener";
import EnvelopeIcon from "./components/Icons/EnvelopIcon";
import PhoneIcon from "./components/Icons/PhoneIcon";
import TelegramIcon from "./components/Icons/TelegramIcon";
import LocationIcon from "./components/Icons/LocationIcon";

export default function Home() {
  const [avatarSrc] = useState(img);
  const DESCRIPTIONS = home_data.description;
  const ADVANTAGES = home_data.advantages;
  const ABILITIES = home_data.abilities;

  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <main className={styles.home__container}>
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
        <article className={styles.certificates__container}>
          <div className={styles.certificates__container_element}>
            <ImageOpener src={imgCert3} />
          </div>
          <div className={styles.certificates__container_element}>
            <ImageOpener src={imgDoggy} />
          </div>
          <div className={styles.certificates__container_element}>
            <ImageOpener src={imgDoggy} />
          </div>
          <div className={styles.certificates__container_element}>
            <ImageOpener src={imgDoggy} />
          </div>
          <div className={styles.certificates__container_element}>
            <ImageOpener src={img} />
          </div>
        </article>
      </HomeSectionWrapper>

      <HomeSectionWrapper>
        <h2
          style={{ color: "var(--main-text-color)" }}
          className={styles.info__text}
        >
          Контакты
        </h2>
        <BackGroundSquareSvg rotation={"180"} />
        <article className={styles.contacts__container}>
          <p className={styles.contacts__container_item}>
            <LocationIcon />{" "}
            <span>
              Юр. адрес: 190013, г. Санкт-Петербург дом № 7, литер A, оф.4000
              Вход: г. Санкт-Петербург, канал д.90, БЦ Ной, оф.4
            </span>
          </p>

          <p className={styles.contacts__container_item}>
            <EnvelopeIcon /> <a href="mailto:mail@mail.com">mail@mail.com</a>
          </p>
          <p className={styles.contacts__container_item}>
            <PhoneIcon /> <a href="tel:89217553973">89217553973</a>
          </p>
          <p className={styles.contacts__container_item}>
            <TelegramIcon />
            <a
              href="tg://resolve?domain=kulikovarseniy"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Telegram
            </a>
          </p>
        </article>

        <article className={styles.contacts__container_map}>
          <div className={styles.container__map_map}>
            {!mapLoaded && (
              <div style={{ zIndex: "1000", border: "none" }}>Loading...</div>
            )}
            {
              <iframe
                onLoad={() => setMapLoaded(true)}
                style={{
                  zIndex: "1000",
                  border: "none",
                  display: mapLoaded ? "block" : "none",
                }}
                src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3Ac5a1c37a827694896a0656bef767fdca51f779075988af24becdd32414a7115c"
                width="100%"
                height="100%"
                allowFullScreen={true}
              />
            }
          </div>
        </article>
      </HomeSectionWrapper>
    </main>
  );
}
