import { UPDATE_NOTE } from '../types';

export const updateNote = (id, message) => ({
  type: UPDATE_NOTE,
  payload: { id, message },
});
