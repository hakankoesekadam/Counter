import {FC} from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface Props {
  children: string;
  typeCount?: boolean;
  typeDelete?: boolean;
  onClick?: any;
}

const Button: FC<Props> = ({children, typeDelete, typeCount, onClick}) => {
  return (
      <button className={clsx(styles.button, {[styles.count]: typeCount,[styles.delete]: typeDelete})}
              onClick={onClick}
      >
        {children}
      </button>
  )
}
export default Button;