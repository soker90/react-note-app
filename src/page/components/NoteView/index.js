import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NoteView = ({ message, onClick }) => (
  <div onClick={onClick} className='NoteView-root'>
    <p>{message}</p>
  </div>
);

NoteView.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

NoteView.displayName = 'NoteView';

export default NoteView;
