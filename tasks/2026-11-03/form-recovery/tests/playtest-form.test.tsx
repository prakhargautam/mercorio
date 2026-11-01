import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlaytestForm } from '../src/playtest-form';

describe('PlaytestForm task acceptance checks', () => {
  it('rejects a URL with whitespace and malformed URL syntax', async () => {
    const user = userEvent.setup();
    render(<PlaytestForm />);
    await user.type(screen.getByLabelText(/playtest title/i), 'Spring test');
    await user.type(screen.getByLabelText(/build url/i), 'https://');
    await user.click(screen.getByRole('button', { name: /create playtest/i }));
    expect(await screen.findByText(/enter a valid url/i)).toBeInTheDocument();
  });

  it('preserves user input after a simulated server failure', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup();
    render(<PlaytestForm />);
    const title = screen.getByLabelText(/playtest title/i);
    const url = screen.getByLabelText(/build url/i);
    await user.type(title, 'server error demo');
    await user.type(url, 'https://example.com/build');
    await user.click(screen.getByRole('button', { name: /create playtest/i }));
    expect(await screen.findByRole('status')).toHaveTextContent(/could not save/i);
    expect(title).toHaveValue('server error demo');
    expect(url).toHaveValue('https://example.com/build');
    vi.useRealTimers();
  });
});

