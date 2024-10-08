import Image from 'next/image';
import img from '../../../public/dev_img.jpg'
import styles from'./bg.module.css'

export default function BackGroundSvgAbilities() {
  return (
    <picture className={styles.picture}>
    <Image className={styles.picture__img} src={img} alt='image'/>
    </picture>
  );
}
