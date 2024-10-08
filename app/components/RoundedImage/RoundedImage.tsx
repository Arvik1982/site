import Image, { StaticImageData } from "next/image";
import styles from "./roundedImage.module.css";
import RedPhoneIcon from "../Icons/RedPhoneIcon";
import RedTelegramIcon from "../Icons/RedTelegramIcon";
import RedEnvelopeIcon from "../Icons/RedEnvelopeIcon";

type TProps = {
  img?: StaticImageData;
};

export default function RoundedImage({ img }: TProps) {
  return (
    <div className={styles.container__picture}>
      <picture 
      
      className={styles.about__info_avatar}>
        {img && (
          <Image quality={80} className={styles.info__avatar_img} src={img} alt="avatar" />
        )}
        {!img && <span></span>}
      </picture>

      <a
        href="tel:89217553973"
        style={{ top: "18px", left: "-3px" }}
        className={styles.container__picture_button}
      >
        <RedPhoneIcon />
      </a>
      <a
        href="tg://resolve?domain=kulikovarseniy"
        style={{ top: "72px", left: "-33px" }}
        className={styles.container__picture_button}
      >
        <RedTelegramIcon />
      </a>
      <a
        href="mailto:mail@mail.com"
        style={{ top: "133px", left: "-20px" }}
        className={styles.container__picture_button}
      >
        <RedEnvelopeIcon />
      </a>
    </div>
  );
}
