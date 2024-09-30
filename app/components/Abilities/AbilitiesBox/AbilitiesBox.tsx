import BackGroundSvgAbilities from "../../BackGroundSvg/BackgroundSvgAbilities/BackgroundSvgAbilities";
import NextIcon from "../../Icons/NextIcon";
import styles from "./abilitiesBox.module.css";

type TProps = {
  index: number;
  ability: string;
};

export default function AbilitiesBox({ index, ability }: TProps) {
  return (
    <article key={index} className={styles.illustration__box}>
      <BackGroundSvgAbilities/>
      <p className={styles.illustration__box_text}>
        <span>{ability}</span>
        </p>
        <button className={styles.illustration__box_button}>
          <NextIcon/>
        </button>
    </article>
  );
}
