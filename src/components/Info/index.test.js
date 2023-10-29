import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Info from './index';

describe('<Info />', () => {
    it('renders the text correctly', () => {
        const infoText = 'This is some information.';
        render(<Info text={infoText} />);
        const infoContainer = screen.getByText(infoText);
        expect(infoContainer).toBeInTheDocument();
    });
});
