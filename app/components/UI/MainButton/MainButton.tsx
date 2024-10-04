import styles from "./mainButton.module.css";

type TProps={
    text:string
    
}& React.ButtonHTMLAttributes<HTMLButtonElement>; 

export default function MainButton({text, ...props}:TProps){
    return(
        <button {...props} className={styles.about__info_button}>{text}</button>
    )
}