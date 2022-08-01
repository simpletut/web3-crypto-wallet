import React from 'react';
import { includeClassNames, css } from './../../../Utils/componentDefaults';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const ClearFix = ({ className: _className, ...otherProps }) => {
  const traits = [styles.clear_fix];
  const className =
    typeof _className === 'string' ? [_className] : _className;
  className && includeClassNames(className, traits);

  return (
    <div className={css(traits)} {...otherProps} data-testid="clearfix" />
  );
};

ClearFix.defaultProps = {
  className: [],
};

ClearFix.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
};

export default ClearFix;
