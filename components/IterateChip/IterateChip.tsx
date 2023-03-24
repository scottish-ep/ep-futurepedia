import { useState, useEffect } from 'react';

import styles from "./IterateChip.module.scss";
import classNames from 'classnames';

interface IterateChipInterface {
  children: any
}

const IterateChip = (props: IterateChipInterface ) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCurrentIndex((prevTime) => (prevTime + 1) % 3);
    }, 3000);

    return () => clearInterval(myInterval);
  }, []);

  return (
    <div className={styles.chip__wrapper}>
      {
        children.map((item: any, index: number) => {
          return (
            <div key={index} className={classNames(styles.chip, item.props.dataIndex != currentIndex ? styles.hide : "")}>
              {item}
            </div>
          )
        })
      }
    </div>
  )
}

export default IterateChip;