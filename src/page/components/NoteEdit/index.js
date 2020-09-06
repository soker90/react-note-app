import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CheckIcon, DeleteIcon, UndoIcon, Button, CircleIcon,
} from 'components';
import { deleteNote, updateNote, updateColor } from 'page/modules/actions';

import { BUTTONS_COLOR } from './constants';
import './styles.css';

const NoteEdit = ({
  message, id, goBack, dispatch,
}) => {
  const [newMessage, setNewMessage] = useState(message);

  const _handleDelete = () => {
    dispatch(deleteNote(id));
  };

  const _handleUpdate = () => {
    dispatch(updateNote(id, newMessage));
    goBack();
  };

  /**
   * @param {string} value
   * @private
   */
  const _handleChangeText = ({ target: { value } }) => {
    setNewMessage(value);
  };

  /**
   * Handle click for change color button
   * @param {string} color
   * @private
   */
  const _handleClickColor = color => {
    dispatch(updateColor(id, color));
    goBack();
  };

  /**
   * Render button for change color
   * @param {string} color
   * @returns {Button}goBack();
   * @private
   */
  const _renderButtonColor = color => (
    <Button key={color} onClick={() => _handleClickColor(color)} name={color}>
      <CircleIcon fill={color} />
    </Button>
  );

  return (
    <>
      <textarea
        className='NoteEdit-message'
        onChange={_handleChangeText}
        defaultValue={message}
      />
      <div className='NoteEdit-button-container'>
        <Button onClick={goBack} data-cy='undo-button'><UndoIcon /></Button>
        <Button onClick={_handleDelete} data-cy='delete-button'><DeleteIcon /></Button>
        <Button onClick={_handleUpdate} data-cy='update-button'><CheckIcon /></Button>
        {BUTTONS_COLOR.map(_renderButtonColor)}
      </div>
    </>
  );
};

NoteEdit.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,

};

NoteEdit.displayName = 'NoteEdit';

export default NoteEdit;
