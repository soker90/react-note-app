import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { GridItem } from 'components';

import NoteEdit from 'page/components/NoteEdit';
import NoteView from 'page/components/NoteView';

const Note = ({
  message, id, dispatch, color,
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const _handleClick = () => {
    setIsEditable(true);
  };

  const _handleClickUndo = () => {
    setIsEditable(false);
  };

  const _renderNote = () => (
    isEditable
      ? (
        <NoteEdit
          message={message}
          id={id}
          goBack={_handleClickUndo}
          dispatch={dispatch}
        />
      )
      : <NoteView message={message} onClick={_handleClick} />
  );

  return (
    <GridItem key={id} color={color}>
      {_renderNote()}
    </GridItem>
  );
};

Note.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Note.displayName = 'Note';

export default Note;
