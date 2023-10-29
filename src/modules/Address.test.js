import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './Address';

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: () => <div data-testid="icon" />,
}));

describe('<Address />', () => {
    const props = {
        phoneNumber: '123-456-7890',
        email: 'test@example.com',
        linkedInUrl: 'https://www.linkedin.com',
        facebookUrl: 'https://www.facebook.com',
        skypeUsername: 'skypeuser',
    };

    it('renders without crashing', () => {
        render(<Address {...props} />);
        const address = screen.getByTestId('address');
        expect(address).toBeInTheDocument();
    });

    it('renders the phone number', () => {
        render(<Address {...props} />);
        const phoneNumber = screen.getByText('123-456-7890');
        expect(phoneNumber).toBeInTheDocument();
    });

    it('renders the email', () => {
        render(<Address {...props} />);
        const email = screen.getByText('test@example.com');
        expect(email).toBeInTheDocument();
    });

    it('renders the LinkedIn link', () => {
        render(<Address {...props} />);
        const linkedInLink = screen.getByRole('link', { name: 'LinkedIn' });
        expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com');
    });

    it('renders the Facebook link', () => {
        render(<Address {...props} />);
        const facebookLink = screen.getByRole('link', { name: 'Facebook' });
        expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
    });

    it('renders the Skype link', () => {
        render(<Address {...props} />);
        const skypeLink = screen.getByRole('link', { name: 'Skype' });
        expect(skypeLink).toHaveAttribute('href', 'skype:skypeuser?chat');
    });
});
