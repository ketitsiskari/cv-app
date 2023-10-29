import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoBox from './index';

describe('<PhotoBox />', () => {
  test('renders without crashing', () => {
    render(<PhotoBox name="Test User" avatar="/path/to/avatar.png" />);
    const photoBoxElement = screen.getByTestId('photo-box');
    expect(photoBoxElement).toBeInTheDocument();
  });

  test('displays user image, name, title, and description correctly', () => {
    render(<PhotoBox name="Test User" title="Developer" description="Just a test description" avatar="/path/to/avatar.png" />);
    
    const userImage = screen.getByAltText('Test User');
    const userName = screen.getByText('Test User');
    const userTitle = screen.getByText('Developer');
    const userDescription = screen.getByText('Just a test description');
    
    expect(userImage).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(userTitle).toBeInTheDocument();
    expect(userDescription).toBeInTheDocument();
  });

  test('does not display title and description when viewType is 2', () => {
    render(<PhotoBox name="Test User" title="Developer" description="Just a test description" avatar="/path/to/avatar.png" viewType={2} />);
    
    const userTitle = screen.queryByText('Developer');
    const userDescription = screen.queryByText('Just a test description');
    
    expect(userTitle).not.toBeInTheDocument();
    expect(userDescription).not.toBeInTheDocument();
  });
});
