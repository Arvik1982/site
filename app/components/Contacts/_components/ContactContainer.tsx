import { ReactNode } from "react";
import styles from "./contactContainer.module.css";

export default function ContactContainer({children}:{ children: ReactNode }){
    return(
        <p className={styles.contacts__container_item}>
 {children}
      </p>  
    )
}