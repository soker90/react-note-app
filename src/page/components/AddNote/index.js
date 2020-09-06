import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { addNote } from 'page/modules/actions';
import { GridItem, AddIcon } from 'components';

import './styles.css';

const AddNote = ({ dispatch }) => {
  const _handleAddClick = () => {
    dispatch(addNote());
  };

  return (
    <GridItem onClick={_handleAddClick} data-cy='new-note'>
      <p>
        <AddIcon height='20px' />
        {' '}
        <span>New Note</span>
      </p>
    </GridItem>
  );
};

AddNote.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

AddNote.displayName = 'AddNote';
export default memo(AddNote);
