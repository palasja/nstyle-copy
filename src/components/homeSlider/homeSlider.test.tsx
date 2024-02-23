import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomeSlider from '.';

test('name should be on page', () => {
  render(
    <BrowserRouter>
      <HomeSlider />
    </BrowserRouter>
  );
  expect(screen.getAllByTestId('slider-panel')).toHaveLength(5);
});

test('name should be on page', () => {
  render(
    <BrowserRouter>
      <HomeSlider />
    </BrowserRouter>
  );
  const curEl = screen
    .getAllByTestId('text_service-name')
    .find((el) => el.classList.contains('slider-panel__active'));
  screen.debug(curEl);
  fireEvent.click(screen.getByTestId('last-button'));
  const lastEl = screen
    .getAllByTestId('text_service-name')
    .find((el) => el.classList.contains('slider-panel__active'));
  screen.debug(lastEl);
  expect(curEl === lastEl).toBeFalsy;
});
