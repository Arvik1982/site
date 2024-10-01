import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from "./RoundedButton.module.css";

type TCustomButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
interface RoundedButtonProps extends TCustomButtonProps {
    children: ReactNode;
}

export default function RoundedButton({
  children,
  ...props
}: RoundedButtonProps) {
  return (
    <button {...props} className={styles.button__rounded}>
      {children}
    </button>
  );
}
