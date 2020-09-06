import { ADD_NOTE } from '../types';

/**
 * This id isn't good idea for a real app
 * @returns {number}
 * @private
 */

const _generateId = () => Math.floor(Math.random() * 300);

export const addNote = () => ({
  type: ADD_NOTE,
  payload: { id: _generateId(), message: 'Write your note here' },
});
