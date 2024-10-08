import Image, { StaticImageData } from "next/image";

import styles from "./roundedImage.module.css";

type TProps={
   img?: StaticImageData
}

export default function RoundedImage({img}:TProps){

    return(
        <div className={styles.container__picture}>
        <picture className={styles.about__info_avatar}>
          {img && (
            <Image
              className={styles.info__avatar_img}
              src={img}
              alt="avatar"
            />
          )}
          {!img && <span></span>}
        </picture>
      </div>
    )
}