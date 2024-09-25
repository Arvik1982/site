import { ReactNode, useRef } from "react";
import styles from "./scrollX.module.css";
import NextIcon from "../Icons/NextIcon";
import PrevIcon from "../Icons/PrevIcon";

type TProps = {
  children: ReactNode;
};

export default function ScrollX({ children }: TProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <article className={styles.scrollX__container}>
      <button className={styles.container__button_left} onClick={scrollLeft}>
        <PrevIcon/>
      </button>
      <div className={styles.scrollX__container_scroll} ref={sliderRef}>
        <div className={styles.scroll__line_container}>{children}</div>
      </div>
      <button className={styles.container__button_right} onClick={scrollRight}>
        <NextIcon/>
      </button>
    </article>
  );
}
