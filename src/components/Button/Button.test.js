import React from 'react';
import {screen, cleanup, render} from '@testing-library/react';

import Button from './index';

describe('<Button />', () => {
  const onClick = jest.fn();
  afterAll(() => {
    cleanup();
  })

  describe('Render button without crash', () => {
    beforeEach(() => {
      render(
        <Button onClick={onClick} name='test'>
          <span>test</span>
        </Button>,
      );
    })

    test('Check Button props', () => {
      const button = screen.getByRole('button');
      expect(button).toHaveClass('Button-root');
      button.click()
      expect(onClick).toHaveBeenCalled();
      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveAttribute('name', 'test');
    })
  })

})
