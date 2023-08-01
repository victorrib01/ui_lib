import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import Input from './Input';

describe('Running Test for Zame Input', () => {
  test('Check placeholder in Input', () => {
    render(<Input placeholder="Hello Zame" />);
    expect(screen.getByPlaceholderText('Hello Zame')).toHaveAttribute(
      'placeholder',
      'Hello Zame',
    );
  });

  test('renders the Input component', async () => {
    render(<Input placeholder="Zame" />);
    const input = screen.getByPlaceholderText('Zame') as HTMLInputElement;
    userEvent.type(input, 'Hello world!');
    await waitFor(() => expect(input.value).toBe('Hello world!'));
  });
});
