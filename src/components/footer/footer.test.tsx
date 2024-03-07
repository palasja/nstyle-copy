import { MemoryRouter } from 'react-router-dom';
import Footer from '.';
import { fireEvent, render, screen } from '@testing-library/react';

test('navigates home when you click the logo', () => {
  render(
    <MemoryRouter initialEntries={['/Services']}>
      <Footer />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId('logo-link'));
  expect(screen.getByTestId('logo-link').classList.contains('active')).toBeTruthy();
});
