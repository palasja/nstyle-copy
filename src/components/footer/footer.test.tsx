import { MemoryRouter, BrowserRouter } from 'react-router-dom';
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

test('instagramm link must to be', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  expect(screen.getByText(/Очаровательная леди/i)).toBeInTheDocument();
});
