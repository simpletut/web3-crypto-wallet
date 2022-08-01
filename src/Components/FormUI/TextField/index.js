import React from 'react';
import { useField } from 'formik';
import styles from './styles.module.scss';

const TextfieldWrapper = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const hasErrors = meta.touched && meta.error;
  const _classNames = [styles.textField];
  if (hasErrors) _classNames.push(styles.invalid);

  return (
    <div className={_classNames.join(' ')} data-testid="textfield">
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {hasErrors && (
        <div className={styles.error}>{meta.error}</div>
      )}
      <span className={styles.marginBottom} />
    </div>
  );
};

export default TextfieldWrapper;