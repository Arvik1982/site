import { forwardRef, LegacyRef } from "react";
import LocationIcon from "../Icons/LocationIcon";
import ContactContainer from "./_components/ContactContainer";
import Mail from "./_components/Mail";
import Phone from "./_components/Phone";
import Telegram from "./_components/Telegram";
import styles from "./contacts.module.css";

const Contacts = forwardRef<HTMLElement, { ref?: LegacyRef<HTMLElement> }>((props, ref)=> {
  return (
    <article tabIndex={0} ref={ref} className={styles.contacts__container}>
      <ContactContainer>
        <LocationIcon />{" "}
        <p  style={{ width: "90%" }}>
          Юр. адрес: 190013, г. Санкт-Петербург дом № 7, литер A, оф.4000 Вход:
          г. Санкт-Петербург, канал д.90, БЦ Ной, оф.4
        </p>
      </ContactContainer>
      <ContactContainer>
        <Mail />
      </ContactContainer>
      <ContactContainer>
        {" "}
       <Phone/>
      </ContactContainer>
      <ContactContainer>
        <Telegram/>
      </ContactContainer>
    </article>
  );
})
Contacts.displayName = "Contacts";
export default Contacts