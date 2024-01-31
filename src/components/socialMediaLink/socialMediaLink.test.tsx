import { render, screen } from '@testing-library/react';
import SocialMediaLink from '.';

beforeEach(() => {
  render(<SocialMediaLink />);
});

test('7 links in element', () => {
  expect(screen.getAllByRole<HTMLLinkElement>('link')).toHaveLength(7);
});

test('all link has aria-label tag', () => {
  expect(
    screen.getAllByRole<HTMLLinkElement>('link').every((a) => {
      return a.ariaLabel == null;
    })
  ).toBeFalsy();
});

test('image satisfy link and aria-label', () => {
  expect(
    screen.getAllByRole<HTMLLinkElement>('link').every((a) => {
      const regStr = a.ariaLabel as string;
      const reg = new RegExp(regStr, 'i');
      return reg.test(a.href) && reg.test(a.innerHTML);
    })
  ).toBeTruthy();
});
