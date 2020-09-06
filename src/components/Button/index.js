import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ onClick, children, ...rest }) => (
  <button
    className='Button-root'
    onClick={onClick}
    type='button'
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

Button.displayName = 'Button';

export default Button;
