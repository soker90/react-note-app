import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './styles.css';

const GridContainer = ({ children, className, ...rest }) => (
  <div className={clsx(className, 'GridContainer-root')} {...rest}>
    {children}
  </div>
);

GridContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
};

GridContainer.displayName = 'GridContainer';
export default GridContainer;
