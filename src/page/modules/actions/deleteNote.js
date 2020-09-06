import { DELETE_NOTE } from '../types';

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id,
});
