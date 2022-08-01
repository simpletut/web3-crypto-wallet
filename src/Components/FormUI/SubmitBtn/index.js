import React from 'react';
import styles from './styles.module.scss';

const SubmitBtn = ({
  children,
  ...otherProps
}) => {
  return (
    <button className={styles.btn} {...otherProps} data-testid="btn">
      {children}
    </button>
  );
};

export default SubmitBtn;
