import styles from "./mainButton.module.css";

type TProps={
    text:string
}
export default function MainButton({text}:TProps){
    return(
        <button className={styles.about__info_button}>{text}</button>
    )
}