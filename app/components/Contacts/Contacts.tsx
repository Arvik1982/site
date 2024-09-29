import EnvelopeIcon from "../Icons/EnvelopIcon";
import LocationIcon from "../Icons/LocationIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import styles from "./contacts.module.css";

export default function Contacts (){
    return(
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
    )
}