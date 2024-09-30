import NextIcon from "../../Icons/NextIcon";
import styles from "./RoundedButton.module.css";


export default function RoundedButton(){
    return(
        <button className={styles.button__rounded}>
        <NextIcon/>
      </button>
    )
}