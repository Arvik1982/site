import { StaticImageData } from "next/image";
import ImageOpener from "../ImageOpener/ImageOpener";
import styles from "./certificate.module.css";

type TProps = {
  certificatesArr: Array<{ id: number; imgCert: StaticImageData }>;
};

export default function Certificates({ certificatesArr }: TProps) {
  return (
    <article className={styles.certificates__container}>
      {certificatesArr.map((cert) => {
        return (
          <div className={styles.certificates__container_element}>
            <ImageOpener src={cert.imgCert} />
          </div>
        );
      })}
    </article>
  );
}
