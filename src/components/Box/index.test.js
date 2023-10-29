import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../Box/index'; 

describe('<About />', () => {
  test('renders without crashing', () => {
    render(<About />);
    const aboutSection = screen.getByTestId('about-section');
    expect(aboutSection).toBeInTheDocument();
  });

  test('displays Box component with appropriate props', () => {
    render(<About />);
    const titleText = screen.getByText('About me');
    const contentText = screen.getByText(/Lorem ipsum dolor sit amet, consectetuer adipiscing elit./);

    expect(titleText).toBeInTheDocument();
    expect(contentText).toBeInTheDocument();
  });
});
