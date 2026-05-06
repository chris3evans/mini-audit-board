import type { ButtonHTMLAttributes } from "react";
import styles from "./HeaderFilterButton.module.scss";

export interface IHeaderFilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  filterActive: boolean;
}

export const HeaderFilterButton = ({
  buttonText,
  filterActive,
  ...rest
}: IHeaderFilterButtonProps) => {
  return (
    <button
      className={`${styles["header-column"]} ${filterActive && styles["filter-active"]}`}
      {...rest}
    >
      <h3>{buttonText}</h3>
    </button>
  );
};
