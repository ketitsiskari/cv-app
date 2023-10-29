import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from './Home';

jest.mock('../components/PhotoBox', () => () => <div>PhotoBox</div>);
jest.mock('../components/Button', () => () => <button>Button</button>);

describe('<Home />', () => {
  const history = createMemoryHistory();

  it('renders the Home component without crashing', () => {
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const homeContainer = screen.getByTestId('home-container');
    expect(homeContainer).toBeInTheDocument();
  });

  it('displays the PhotoBox component with appropriate content', () => {
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Programmer. Creative. Innovator')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet, consectetuer adipiscing elit./)).toBeInTheDocument();
  });

  it('redirects to the /inner route when the "Know more" button is clicked', () => {
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const button = screen.getByText('Button');
    fireEvent.click(button);
    expect(history.location.pathname).toBe('/inner');
  });


});
