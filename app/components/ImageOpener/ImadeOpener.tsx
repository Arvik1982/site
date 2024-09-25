import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type TProps = {
  src: StaticImageData;
};

export default function ImageOpener({ src }:TProps) {
  return (
    <Link style={{zIndex:'100'}} href={src.src} target="blank" rel="noopener noreferrer">
      <Image src={src} alt="image" style={{ cursor: "pointer" }} />
    </Link>
  );
}
