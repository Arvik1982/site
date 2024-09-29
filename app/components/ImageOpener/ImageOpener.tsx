import Image, { StaticImageData } from "next/image";
import empty from "@/app/public/no-foto.png";
import Link from "next/link";
import styles from './ImageOpener.module.css'

type TProps = {
  src: StaticImageData;
};
export default function ImageOpener({ src }: TProps) {
  return (
    <Link
      style={{
        zIndex: "100",
        width: "100%",
        height: "100%",
        display: "block",
     
      }}
   
      href={src.src}
      target="blank"
      rel="noopener noreferrer"
    >


      {src&&<Image
        src={src}
        alt="image"
        style={{
          maxWidth: "100%",
          height: "100%",
          cursor: "pointer",
          objectFit: "cover",
         
        }}
      />}
    </Link>
  );
}
