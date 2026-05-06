import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "dark" | "light";
  size: "small" | "medium" | "large";
  buttonText: string;
}

export const Button = ({
  variant = "light",
  size,
  buttonText,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={`${styles["button"]} ${styles[`button-${variant}`]}`}
      {...rest}
    >
      {buttonText}
    </button>
  );
};
