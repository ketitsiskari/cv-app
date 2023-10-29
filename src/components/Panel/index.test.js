import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Panel from './index';

jest.mock('../PhotoBox', () => () => <div>PhotoBox Component</div>);
jest.mock('../Navigation', () => () => <div>Navigation Component</div>);
jest.mock('../Button', () => ({ onClick }) => <button onClick={onClick}>Button Component</button>);

describe('Panel Component', () => {

    test('renders without crashing', () => {
        render(
            <MemoryRouter>
                <Panel isPanelOpen={false} togglePanel={() => {}} />
            </MemoryRouter>
        );
        const panelContainer = screen.getByTestId('panel-container');
        expect(panelContainer).toBeInTheDocument();
    });

    test('hamburger button appearance based on isPanelOpen prop', () => {
        const { rerender } = render(
            <MemoryRouter>
                <Panel isPanelOpen={false} togglePanel={() => {}} />
            </MemoryRouter>
        );
        expect(screen.getByText('Button Component')).not.toHaveClass('open');

        rerender(
            <MemoryRouter>
                <Panel isPanelOpen={true} togglePanel={() => {}} />
            </MemoryRouter>
        );
        expect(screen.getByText('Button Component')).toHaveClass('open');
    });

    test('main container renders when isPanelOpen is true', () => {
        render(
            <MemoryRouter>
                <Panel isPanelOpen={true} togglePanel={() => {}} />
            </MemoryRouter>
        );
        expect(screen.getByText('PhotoBox Component')).toBeInTheDocument();
        expect(screen.getByText('Navigation Component')).toBeInTheDocument();
    });

    test('clicking the "Go back" button navigates to root', () => {
        let testHistory;
        render(
            <MemoryRouter initialEntries={['/initial']}>
                <Route>
                    {({ history }) => {
                        testHistory = history;
                        return <Panel isPanelOpen={true} togglePanel={() => {}} />;
                    }}
                </Route>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Button Component'));
        expect(testHistory.location.pathname).toBe('/');
    });

    test('clicking the hamburger menu button calls the togglePanel function', () => {
        const mockToggle = jest.fn();
        render(
            <MemoryRouter>
                <Panel isPanelOpen={false} togglePanel={mockToggle} />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Button Component'));
        expect(mockToggle).toHaveBeenCalledTimes(1);
    });

});
