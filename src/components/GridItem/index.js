import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const GridItem = ({
  children, onClick, color, ...rest
}) => (
  <div className='GridItem-root' onClick={onClick} style={{ backgroundColor: color }} {...rest}>
    {children}
  </div>
);

GridItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
  color: PropTypes.string,
};

GridItem.defaultProps = {
  color: 'white',
};

GridItem.displayName = 'GridItem';
export default GridItem;
