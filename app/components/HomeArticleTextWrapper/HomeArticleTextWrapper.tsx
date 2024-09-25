import { ReactNode } from "react"
import styles from "./homeArticleTextWrapper.module.css";

type TProps={
    children:ReactNode
}

export default function HomeArticleTextWrapper({children}:TProps){
    return(
        <article className={styles.article__text_container}>
            {children}
        </article>
    )
}