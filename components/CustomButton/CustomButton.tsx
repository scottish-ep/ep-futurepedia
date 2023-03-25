import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import styles from "./CustomButton.module.scss";

interface CustomButtonInterface {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  children: any;
  clickFunction?: any;
  btnUrl?: string;
  notiCount?: number;
  className?: string;
}

const CustomButton = (props: CustomButtonInterface) => {
  const {
    bgColor,
    textColor,
    borderColor,
    hoverBgColor,
    hoverTextColor,
    hoverBorderColor,
    children,
    clickFunction = () => {},
    btnUrl = "",
    notiCount,
    className,
  } = props;

  const [textCol, setTextCol] = useState(textColor);
  const [btnCol, setBtnCol] = useState(bgColor);
  const [bordCol, setBordCol] = useState(borderColor);

  return (
    <div className={classNames(styles.btn__wrapper, className)}>
      {notiCount && <div className={styles.noti_chip}>{notiCount}</div>}
      {!btnUrl ? (
        <button
          style={{
            color: textCol,
            backgroundColor: btnCol,
            borderColor: bordCol,
            transition: "0.3s",
          }}
          className={styles.btn}
          onMouseEnter={() => {
            setTextCol(hoverTextColor);
            setBtnCol(hoverBgColor);
            setBordCol(hoverBorderColor);
          }}
          onMouseLeave={() => {
            setTextCol(textColor);
            setBtnCol(bgColor);
            setBordCol(borderColor);
          }}
          onClick={clickFunction}
        >
          {children}
        </button>
      ) : (
        <Link
          href={btnUrl}
          style={{
            color: textCol,
            backgroundColor: btnCol,
            borderColor: bordCol,
            transition: "0.3s",
          }}
          className={classNames(styles.btn, className)}
          onMouseEnter={() => {
            setTextCol(hoverTextColor);
            setBtnCol(hoverBgColor);
            setBordCol(hoverBorderColor);
          }}
          onMouseLeave={() => {
            setTextCol(textColor);
            setBtnCol(bgColor);
            setBordCol(borderColor);
          }}
          onClick={clickFunction || ""}
        >
          {children}
        </Link>
      )}
    </div>
  );
};

export default CustomButton;
