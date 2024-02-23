import { fireEvent, render, screen } from '@testing-library/react';
import UppButton from '.';

test('hide on load', () => {
  render(<UppButton />);
  expect(screen.getByTestId('upp-button')).not.toBeVisible();
});

test('show after scroll 200', () => {
  render(<UppButton />);
  fireEvent.scroll(window, { target: { scrollY: 199 } });
  expect(screen.getByTestId('upp-button')).not.toBeVisible();
  fireEvent.scroll(window, { target: { scrollY: 200 } });
  expect(screen.getByTestId('upp-button')).toBeVisible();
});
