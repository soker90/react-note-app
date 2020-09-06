import React from 'react';
import {screen, cleanup, render} from '@testing-library/react';

import MainLayout from './index';

describe('MainLayout', () => {
  const testString = 'Test';

  afterAll(() => {
    cleanup();
  })

  describe('Render layout without crash', () => {
    beforeEach(() => {
      render(
        <MainLayout>
          <p>{testString}</p>
        </MainLayout>,
      );
    })

    test('Render children prop', () => {
      const stringFound = screen.getByText(testString);
      expect(stringFound).toBeInTheDocument();
    })

    test('Render topbar title', () => {
      const topBarTitle = screen.getByText(/NOTES APP/i);
      expect(topBarTitle).toBeInTheDocument();
    })
  })

})
