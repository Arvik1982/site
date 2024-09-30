import { ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import NextIcon from "../../Icons/NextIcon";
import styles from "./RoundedButton.module.css";

type CustomButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function RoundedButton ({...props}:CustomButtonProps){
    return(
        <button {...props} className={styles.button__rounded}>
        <NextIcon/>
      </button>
    )
}