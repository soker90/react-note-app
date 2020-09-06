import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';

import {mockNotes} from 'page/modules/mock-notes';
import {ADD_NOTE} from '../modules/types';
import useNotes from './useNotes';

describe('useNotes', () => {
  describe('Add note to hook', () => {
    const message = 'This is a test note';
    const id = 12;
    let hookValues;

    beforeAll(() => {
      const {result} = renderHook(() => useNotes());

      hookValues = result;
      const [, setNote] = hookValues.current;

      act(() => {
        setNote(({
          type: ADD_NOTE,
          payload: {id, message},
        }))
      })
    })

    test('A new message has been added', () => {
      const notes = hookValues.current[0];
      expect(notes.length).toBe(mockNotes.length + 1);
    })

    test('The last message is correct', () => {
      const notes = hookValues.current[0];
      const lastItem = notes[notes.length - 1];
      expect(lastItem.id).toBe(id);
      expect(lastItem.message).toBe(message);
    })

  })

  // TODO Tests for delete, update and changes with actions
})
