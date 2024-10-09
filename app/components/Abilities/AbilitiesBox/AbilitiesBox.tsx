import { useRouter } from "next/navigation";
import NextIcon from "../../Icons/NextIcon";
import styles from "./abilitiesBox.module.css";

type TProps = {
  index: number;
  ability: string;
  ability_en: string;
};

export default function AbilitiesBox({ index, ability, ability_en }: TProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`inform/${ability_en}`);
      }}
      key={index}
      className={styles.illustration__box}
    >
      <p className={styles.illustration__box_text}>
        <span>{ability}</span>
      </p>
      <div className={styles.illustration__box_button}>
        <NextIcon />
      </div>
    </button>
  );
}
