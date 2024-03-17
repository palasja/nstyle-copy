import { fireEvent, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FeedbackForm from '.';
import { vi } from 'vitest';
import { FormValues } from '../../type/feedbackFormType';

test('all form fields', () => {
  render(<FeedbackForm />);

  expect(screen.getByTestId('sendButton')).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Имя' })).toBeInTheDocument();
  expect((screen.getByRole('textbox', { name: 'Имя' }) as HTMLInputElement).type).toBe('text');
  expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
  expect((screen.getByRole('textbox', { name: 'Email' }) as HTMLInputElement).type).toBe('text');
  expect(screen.getByRole('textbox', { name: 'Phone' })).toBeInTheDocument();
  expect((screen.getByRole('textbox', { name: 'Phone' }) as HTMLInputElement).type).toBe('text'); // expect(screen.getAllByTestId('errorMessage')).toHaveLength(6);
  expect(screen.getByRole('textbox', { name: 'Тема' })).toBeInTheDocument();
  expect((screen.getByRole('textbox', { name: 'Тема' }) as HTMLInputElement).type).toBe('text');
  expect(screen.getByRole('textbox', { name: 'Сообщение' })).toBeInTheDocument();
  expect((screen.getByRole('textbox', { name: 'Сообщение' }) as HTMLInputElement).type).toBe(
    'textarea'
  );
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
  expect((screen.getByRole('button') as HTMLInputElement).type).toBe('submit');
});

test('count error by send empty form', async () => {
  // setup userEvent
  function setup(jsx: JSX.Element) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

  const mockSave = vi.fn();
  const { user } = setup(<FeedbackForm submitAction={mockSave} />);

  await user.click(screen.getByTestId('sendButton'));
  expect(screen.getAllByTestId('errorMessage')).toHaveLength(6);
});

test('not send data befor validation', async () => {
  // setup userEvent
  function setup(jsx: JSX.Element) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

  const mockSave = vi.fn();
  const { user } = setup(<FeedbackForm submitAction={mockSave} />);

  await user.click(screen.getByTestId('sendButton'));
  expect(mockSave).toHaveBeenCalledTimes(0);
});

test('validation email', async () => {
  // setup userEvent
  function setup(jsx: JSX.Element) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

  const mockSave = vi.fn();
  const { user } = setup(<FeedbackForm submitAction={mockSave} />);
  await user.click(screen.getByTestId('sendButton'));
  expect(screen.getAllByTestId('errorMessage')).toHaveLength(6);

  await user.type(screen.getByRole('textbox', { name: /email/i }), 'qwe@qwe.qw');
  fireEvent.blur(screen.getByRole('textbox', { name: /email/i }));
  expect(screen.getAllByTestId('errorMessage')).toHaveLength(5);
});

test('sent form', async () => {
  // setup userEvent
  function setup(jsx: JSX.Element) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

  const mockSave = vi.fn().mockImplementation((a: FormValues) => a);
  const { user } = setup(<FeedbackForm submitAction={mockSave} />);

  await user.type(screen.getByRole('textbox', { name: /имя/i }), 'qwe');
  await user.type(screen.getByRole('textbox', { name: /email/i }), 'qwe@qwe.qw');
  await user.type(screen.getByRole('textbox', { name: /phone/i }), '80291111111');
  await user.type(screen.getByRole('textbox', { name: /тема/i }), 'qwe');
  await user.type(screen.getByRole('textbox', { name: /сообщение/i }), 'qwe');
  await fireEvent.click(screen.getByRole('checkbox'));

  await user.click(screen.getByTestId('sendButton'));
  expect(mockSave).toHaveBeenCalledTimes(1);
  expect(mockSave).toHaveReturnedWith({
    name: 'qwe',
    email: 'qwe@qwe.qw',
    phone: '80291111111',
    theme: 'qwe',
    message: 'qwe',
    agree: 'agree',
  });
});

test('agree checkbox', async () => {
  // setup userEvent
  function setup(jsx: JSX.Element) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

  const mockSave = vi.fn();
  const { user } = setup(<FeedbackForm submitAction={mockSave} />);

  await user.type(screen.getByRole('textbox', { name: /имя/i }), 'qwe');
  await user.type(screen.getByRole('textbox', { name: /email/i }), 'qwe@qwe.qw');
  await user.type(screen.getByRole('textbox', { name: /phone/i }), '80291111111');
  await user.type(screen.getByRole('textbox', { name: /тема/i }), 'qwe');
  await user.type(screen.getByRole('textbox', { name: /сообщение/i }), 'qwe');

  await user.click(screen.getByTestId('sendButton'));
  expect(mockSave).toHaveBeenCalledTimes(0);
  fireEvent.click(screen.getByRole('checkbox'));
  await user.click(screen.getByTestId('sendButton'));
  expect(mockSave).toHaveBeenCalledTimes(1);
});
