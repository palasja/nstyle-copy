import { render, screen } from '@testing-library/react';
import FeedbackInfo from './feedbackInfo';

beforeEach(() => {
  render(<FeedbackInfo />);
});

test('phone link has tel:', () => {
  expect(screen.getByTestId<HTMLLinkElement>('phone_image').href).toMatch('tel:');
});

test('equal phone link', () => {
  expect(screen.getByTestId<HTMLLinkElement>('phone_image').href).toEqual(
    screen.getByTestId<HTMLLinkElement>('phone_number').href
  );
});

test('map link to google', () => {
  expect(screen.getByTestId<HTMLLinkElement>('map_image').href).toMatch(
    'https://www.google.com/maps'
  );
});

test('equal map link', () => {
  expect(screen.getByTestId<HTMLLinkElement>('map_image').href).toEqual(
    screen.getByTestId<HTMLLinkElement>('map_string').href
  );
});
