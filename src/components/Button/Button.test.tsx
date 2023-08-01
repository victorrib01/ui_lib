import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Running Test for Zame Button', () => {
  test('Check Button Disabled', () => {
    render(<Button text="Button Zame" disabled />);
    expect(screen.getByRole('button', { name: 'Button Zame' })).toBeDisabled();
  });
});
