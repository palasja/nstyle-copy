import { render, screen } from '@testing-library/react';
import Header from '.';

test('navigates home when you click the logo', () => {
  render(<Header />);
  //  screen.debug(screen.getByRole('heading'))

  expect(screen.getByTestId('header').tagName).toBe('HEADER');
});
