import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Feedback } from './index';

const mockData = [
  {
    feedback: "Test feedback 1",
    reporter: {
      photoUrl: "/path/to/photo1.jpg",
      name: "Reporter 1",
      citeUrl: "https://www.example1.com"
    }
  },
  {
    feedback: "Test feedback 2",
    reporter: {
      photoUrl: "/path/to/photo2.jpg",
      name: "Reporter 2",
      citeUrl: "https://www.example2.com"
    }
  }
];

describe('<Feedback />', () => {

  test('renders without crashing', () => {
    render(<Feedback data={mockData} />);
    const feedbackSection = screen.getByTestId('feedback-section');
    expect(feedbackSection).toBeInTheDocument();
  });

  test('displays "Feedback" title correctly', () => {
    render(<Feedback data={mockData} />);
    const feedbackTitle = screen.getByText('Feedback');
    expect(feedbackTitle).toBeInTheDocument();
  });

  test('renders feedback items correctly', () => {
    render(<Feedback data={mockData} />);
    
    mockData.forEach(item => {
      const feedbackText = screen.getByText(item.feedback);
      const reporterImage = screen.getByAltText(item.reporter.name);
      const reporterName = screen.getByText(item.reporter.name);
      const citeUrl = screen.getByText(item.reporter.citeUrl.replace(/^(https?:\/\/)?(www\.)?/, ""));
      
      expect(feedbackText).toBeInTheDocument();
      expect(reporterImage).toBeInTheDocument();
      expect(reporterName).toBeInTheDocument();
      expect(citeUrl).toBeInTheDocument();
    });
  });

  test('scroll-to-top button functionality', () => {
    render(<Feedback data={mockData} />);
    const scrollButton = screen.getByRole('button');
    fireEvent.click(scrollButton);
    expect(scrollButton).toBeInTheDocument();
  });
});

