import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './index';
import userEvent from '@testing-library/user-event';

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: () => <div data-testid="icon" />
  }));
  

describe('<Button />', () => {
    it('renders the button without crashing', () => {
        render(<Button text="Test Button" />);
        expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument();
    });

    it('renders the icon when provided', () => {
        render(<Button icon={{ icon: 'dummy-icon' }} text="Test Button with Icon" />);
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
    
    it('applies custom class when provided', () => {
        render(<Button className="test-class" text="Test Button with Class" />);
        const buttonElement = screen.getByRole('button', { name: /test button with class/i });
        expect(buttonElement).toHaveClass('test-class');
    });
    it('calls onClick when the button is clicked', () => {
        const handleClick = jest.fn();
        render(<Button text="Click me" onClick={handleClick} />);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        userEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });    
    
});
