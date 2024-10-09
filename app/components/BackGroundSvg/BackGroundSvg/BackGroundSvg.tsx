import styles from "./backGroundSvg.module.css";
type TProps={
  color?:string
  rotation?:string
}
export default function BackGroundSvg({color="rgba(75, 164, 208, 1)",rotation}:TProps){
    return(
        <svg
        
               style={rotation?{transform: `rotate(${rotation}deg)`}:{opacity:'0.5', zIndex:'110'}}
        className={styles.triangle}
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
       
      >
        <path
          d="M 10,200 L 190,200 Q 200,100 10,0 Q 0,100 10,200 Z"
          fill={color}
        />
      </svg>
    )
}