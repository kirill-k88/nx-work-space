import { FC } from 'react';

import styles from './Digit.module.scss';

interface IDigitProps {
  number: number;
}

export const Digit: FC<IDigitProps> = ({ number }) => {
  return (
    <div className={styles.digit}>
      <span className={styles.digit__span}>{number}</span>
    </div>
  );
};
