import { UPDATE_COLOR } from '../types';

export const updateColor = (id, color) => ({
  type: UPDATE_COLOR,
  payload: { id, color },
});
