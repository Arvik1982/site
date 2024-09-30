import home_data from "../../../mock/home_data.json";
import AdvantageBox from "../AdvantageBox/AdvantageBox";
import styles from "./advantageContainer.module.css"

export default function AdvantagesContainer(){
    const ADVANTAGES = home_data.advantages;
    return(
        <div className={styles.advantages__container}>
        {ADVANTAGES &&
          ADVANTAGES.map((advantage, index) => {
            return (
              <AdvantageBox
                key={index}
                index={index}
                advantage={advantage.advantage}
              />
            );
          })}
      </div>
    )
}