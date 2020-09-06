import { useReducer } from 'react';

import { notesReducer } from 'page/modules/notes-reducer';
import { mockNotes } from 'page/modules/mock-notes';

const useNotes = () => {
  const [notes, setNotes] = useReducer(
    notesReducer,
    mockNotes,
  );

  /**
   * Set action in reducer
   * @param {Object} action
   */
  const setNotesFromAction = action => {
    setNotes(action);
  };

  return [
    notes,
    setNotesFromAction,
  ];
};

export default useNotes;
