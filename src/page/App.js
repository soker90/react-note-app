import React from 'react';

import MainLayout from 'layouts/MainLayout';

import { useNotes } from 'page/hooks';
import { AddNote, Note } from 'page/components';

import './App.css';

const App = () => {
  const [notes, dispatch] = useNotes();

  /**
   * Render a note card
   * @param {number} id
   * @param {string} message
   * @returns {JSX.Element}
   * @private
   */
  const _renderNote = ({ id, message, color }) => (
    <Note key={id} message={message} id={id} dispatch={dispatch} color={color} />
  );

  return (
    <MainLayout>
      {notes.map(_renderNote)}
      <AddNote dispatch={dispatch} />
    </MainLayout>
  );
};

App.displayName = 'App';
export default App;
