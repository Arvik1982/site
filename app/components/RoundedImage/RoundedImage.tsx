"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./roundedImage.module.css";
import RedPhoneIcon from "../Icons/RedPhoneIcon";
import RedTelegramIcon from "../Icons/RedTelegramIcon";
import RedEnvelopeIcon from "../Icons/RedEnvelopeIcon";
import { useEffect, useState } from "react";
// import { useScrollPositionTop } from "@/app/store/hooks/hooks";

type TProps = {
  img?: StaticImageData;
};

export default function RoundedImage({ img }: TProps) {
  const [loaded, setLoaded] = useState(true);
// const{isAtTop}=useScrollPositionTop()

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 1000);
  }, []);




  return (
    <div
    style={
      loaded
        ? {
            
            transform: "translateX(300%)",
            transition: "transform 0.3s ease",
          }
        : {
            
            transform: "translateX(0%)",
            transition: "transform 0.3s ease",
          }
    }
      className={
        loaded
          ? `${styles.container__picture}`
          : `${styles.container__picture_load}`
      }
    >
      <picture className={styles.about__info_avatar}>
        {img && (
          <Image
            quality={80}
            className={styles.info__avatar_img}
            src={img}
            alt="avatar"
          />
        )}
        {!img && <span></span>}
      </picture>

      <a
        href="tel:89217553973"
        style={{ top: "18px", left: "-3px" }}
        className={
          loaded
            ? `${styles.container__picture_button}`
            : `${styles.picture__button_load}`
        }
      >
        <RedPhoneIcon />
      </a>
      <a
        href="tg://resolve?domain=kulikovarseniy"
        style={{ top: "72px", left: "-33px" }}
        className={
          loaded
            ? `${styles.container__picture_button}`
            : `${styles.picture__button_load}`
        }
      >
        <RedTelegramIcon />
      </a>
      <a
        href="mailto:mail@mail.com"
        style={{ top: "133px", left: "-20px" }}
        className={
          loaded
            ? `${styles.container__picture_button}`
            : `${styles.picture__button_load}`
        }
      >
        <RedEnvelopeIcon />
      </a>
    </div>
  );
}
