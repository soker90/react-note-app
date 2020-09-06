import React from 'react';

const CircleIcon = props => (
  <svg viewBox='0 0 120 120' {...props}>
    <circle cx={60} cy={60} r={50} />
  </svg>
);

CircleIcon.displayName = 'CircleIcon';

export default CircleIcon;
