import {
  ADD_NOTE, DELETE_NOTE, UPDATE_COLOR, UPDATE_NOTE,
} from './types';

const updateNote = ({ state, action, param }) => {
  const indexElement = state.findIndex(({ id }) => id === action.payload.id);
  const newState = state.slice();

  if (indexElement !== undefined) {
    newState[indexElement] = {
      ...newState[indexElement],
      [param]: action.payload[param],
    };
  }

  return newState;
};

const reducer = {
  [ADD_NOTE]: (state, action) => state.concat(action.payload),
  [DELETE_NOTE]: (state, action) => state.filter(({ id }) => id !== action.id),
  [UPDATE_NOTE]: (state, action) => updateNote({ state, action, param: 'message' }),
  [UPDATE_COLOR]: (state, action) => updateNote({ state, action, param: 'color' }),
};
export const notesReducer = (state, action) => reducer[action.type](state, action);
