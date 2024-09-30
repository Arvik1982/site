import RoundedButton from "../UI/RoundedButton/RoundedButton";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer__container}`}>
      <RoundedButton />
    </footer>
  );
}
