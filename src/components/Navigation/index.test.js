import React from 'react';
import { render, fireEvent, act, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './index';
import navItems from '../../modules/naviagtionData';
import scrollToElement from '../../modules/scroll';

jest.mock('../../modules/scroll', () => jest.fn());
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span>Icon</span>
}));

describe('Navigation Component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800
    });
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
  });

  it('renders correctly', () => {
    render(<Navigation />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  it('renders all navigation items', () => {
    render(<Navigation />);
    const renderedItems = screen.getAllByRole('button');
    expect(renderedItems.length).toBe(navItems.length);
  });

  it('sets an item as active when clicked', () => {
    render(<Navigation />);
    const firstItem = screen.getByTestId(`nav-item-${navItems[0].label}`);
    fireEvent.click(firstItem);
    expect(firstItem).toHaveClass('active');
  });

  it('renders label if window width > 600', () => {
    render(<Navigation />);
    expect(screen.getByText(navItems[0].label)).toBeInTheDocument();
  });

  it('does not render label if window width <= 600', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500
    });
    render(<Navigation />);
    expect(screen.queryByText(navItems[0].label)).not.toBeInTheDocument();
  });

  it('calls scrollToElement when an item is clicked', () => {
    render(<Navigation />);
    const firstItem = screen.getByTestId(`nav-item-${navItems[0].label}`);
    fireEvent.click(firstItem);
    expect(scrollToElement).toHaveBeenCalledWith(navItems[0].id);
  });

  it('sets the correct active section based on scroll', () => {
    render(<Navigation />);
    act(() => {
       const mockedBounds = {
          top: window.innerHeight / 2 - 50,
          bottom: window.innerHeight / 2 + 50,
       };
       HTMLElement.prototype.getBoundingClientRect = jest.fn(() => mockedBounds);
       window.dispatchEvent(new Event('scroll'));
    });
    const activeItem = screen.getByRole('button', { name: navItems[0].label });
    expect(activeItem).toHaveClass('active');
  });

  it('adds event listeners on mount and removes on unmount', () => {
    const { unmount } = render(<Navigation />);
    expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
    expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
    unmount();
    expect(window.removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
