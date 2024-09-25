import { ReactNode } from "react";
import styles from "./homeSection.module.css";

type TProps={
    children:ReactNode
}

export default function HomeSectionWrapper({children}:TProps){
    return(
        <section className={styles.container__info}>{children}</section>
    )
}