import React from 'react';
import { includeClassNames, css } from '../../../Utils/componentDefaults';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Column = ({ useFlex, responsive, width, className: _className, children, ...otherProps }) => {
  const _width = `column_${width}_12`;
  const traits = [styles[_width]];
  const className =
    typeof _className === 'string' ? [_className] : _className;
  className && includeClassNames(className, traits);

  if (useFlex) traits.push(styles.flexbox_col);
  else traits.push(styles.column);
  if (responsive) traits.push(styles.responsive);

  return (
    <div className={css(traits)} {...otherProps} data-testid="column">
      {children}
    </div>
  );
};

Column.defaultProps = {
  width: 12,
  useFlex: false,
  className: [],
  responsive: true
};

Column.propTypes = {
  useFlex: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  responsive: PropTypes.bool,
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

export default Column;
