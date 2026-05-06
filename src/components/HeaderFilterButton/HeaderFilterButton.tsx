import type { ButtonHTMLAttributes } from "react";
import styles from "./HeaderFilterButton.module.scss";

export interface IHeaderFilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export const HeaderFilterButton = ({
  buttonText,
  ...rest
}: IHeaderFilterButtonProps) => {
  return (
    <button className={styles["header-column"]} {...rest}>
      <h3>{buttonText}</h3>
    </button>
  );
};
