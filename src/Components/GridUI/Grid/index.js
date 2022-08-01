import React from 'react';
import ClearFix from './../ClearFix';
import { includeClassNames, css } from '../../../Utils/componentDefaults';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Grid = ({ useFlex, className: _className, nestedGrid, children, ...otherProps }) => {
  const traits = [styles.grid];
  const className =
    typeof _className === 'string' ? [_className] : _className;
  className && includeClassNames(className, traits);

  if (useFlex) traits.push(styles.flexbox);
  if (nestedGrid) traits.push(styles.nestedGrid);

  return [
    <div key={1} className={css(traits)} {...otherProps} data-testid="grid">
      {children}
    </div>,
    <ClearFix key={2} data-test="clearFix" />
  ];
};

Grid.defaultProps = {
  useFlex: false,
  nestedGrid: false,
  className: ''
};

Grid.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  useFlex: PropTypes.bool,
  nestedGrid: PropTypes.bool,
};

export default Grid;
