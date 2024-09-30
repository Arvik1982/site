import AtomSvgIcon from "../../Icons/AtomSvgIcon";
import ResearchSvgIcon from "../../Icons/ResearchIcon";
import SequencingSvgIcon from "../../Icons/SequencingSvgIcon";
import styles from "./advantage.module.css"

type TProps={
    index:number,
    advantage:string
}

export default function AdvantageBox({index, advantage}:TProps){
    return(
        <article className={styles.illustration__box}>
        <div className={styles.illustration__box_picture}>
          {index === 0 && <AtomSvgIcon />}
          {index === 1 && <ResearchSvgIcon />}
          {index === 2 && <SequencingSvgIcon />}
        </div>
        <p className={styles.illustration__box_text}>
          <span>{advantage}</span>
        </p>
      </article>
    )
}