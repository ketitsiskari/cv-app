import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the Home component for the default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Your Home Component Text or Element Here')).toBeInTheDocument();
  });

  it('renders the InnerPage component for /inner route', () => {
    render(
      <MemoryRouter initialEntries={['/inner']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Your InnerPage Component Text or Element Here')).toBeInTheDocument();
  });
});
