import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from '.';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

test('show and hide more services by hover', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  // more services hide
  expect(screen.getByTestId('drop-down-element')).not.toBeVisible();
  // more services show after mousenter on link
  fireEvent.mouseEnter(screen.getByTestId('drop-down-link'));
  expect(screen.getByTestId('drop-down-element')).toBeVisible();
  // more services still show after mousemove on moreService block
  setTimeout(() => {
    fireEvent.mouseEnter(screen.getByTestId('drop-down-element'));
  }, 500);
  expect(screen.getByTestId('drop-down-element')).toBeVisible();
  // more services hide after mousemove on other element
  setTimeout(() => {
    fireEvent.mouseEnter(screen.getAllByRole('link')[2]);
    expect(screen.getByTestId('drop-down-element')).not.toBeVisible();
  }, 1000);
});

test('save active class after mousover', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  fireEvent.mouseEnter(screen.getByTestId('drop-down-link'));
  setTimeout(() => {
    const lastLink = screen.getAllByRole('link')[screen.getAllByRole('link').length - 1];
    fireEvent.click(lastLink);
    fireEvent.mouseEnter(screen.getAllByRole('link')[2]);
    expect(screen.getAllByRole('link')[0]).toHaveClass('navigation-panel_active');
    expect(lastLink).toHaveClass('navigation-panel_more-services__active');
  }, 500);
});

test('hover add class navigation-panel_active', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  fireEvent.click(screen.getAllByRole('link')[0]);
  expect(screen.getAllByRole('link')[0]).toHaveClass('navigation-panel_active');
});

test('logo has to be on elemet', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  expect(screen.getByTestId('logo-link')).toBeInTheDocument();
  expect(screen.getByTestId('logo-link')).toContainHTML('img');
});

test('navigates home when you click the logo', () => {
  render(
    <MemoryRouter initialEntries={['/Discount']}>
      <Navigation />
    </MemoryRouter>
  );

  expect(screen.getAllByRole('link')[1]).toHaveClass('navigation-panel_active');
  fireEvent.click(screen.getByTestId('logo-link'));
  expect(
    screen.getAllByRole('link').some((a) => {
      return a.classList.contains('navigation-panel_active');
    })
  ).toBeFalsy();
});
