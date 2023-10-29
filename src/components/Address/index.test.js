import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import MyAddress from './index';

describe('<MyAddress />', () => {
    
    it('renders without crashing', () => {
        render(<MyAddress />);
        expect(screen.getByTestId('contacts-section')).toBeInTheDocument();
    });

    it('displays phone number, email, LinkedIn, Facebook, and Skype information', () => {
        render(<MyAddress />);

        expect(screen.getByText('+995 557 72 77 88')).toBeInTheDocument();
        
        expect(screen.getByText('ketitsiskaridze@gmail.com')).toBeInTheDocument();
        
        const linkedIn = screen.getByTestId('linkedin-link');
        expect(linkedIn).toBeInTheDocument();
        expect(linkedIn).toHaveAttribute('href', 'https://www.linkedin.com/in/keti-tsiskaridze-0938b4283/');
        
        const facebook = screen.getByTestId('facebook-link'); 
        expect(facebook).toBeInTheDocument();
        expect(facebook).toHaveAttribute('href', 'https://www.facebook.com/keti.tsiskaridze');
        
        expect(screen.getByText('your.skype.username')).toBeInTheDocument();
    });
});