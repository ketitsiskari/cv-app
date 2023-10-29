import React from 'react';
import { render, screen } from '@testing-library/react';
import Expertise from './index'

describe('<Expertise />', () => {
  
  const mockData = [
    { 
      info: { company: 'Company A', job: 'Developer', description: 'Some description' }, 
      date: '2020-2023' 
    },
    { 
      info: { company: 'Company B', job: 'Designer', description: 'Another description' }, 
      date: '2018-2020' 
    }
  ];

  test('renders without crashing', () => {
    render(<Expertise data={mockData} />);
    const expertiseContainer = screen.getByTestId('expertise-container');
    expect(expertiseContainer).toBeInTheDocument();
  });

  test('displays "Experience" title correctly', () => {
    render(<Expertise data={mockData} />);
    const experienceTitle = screen.getByText('Experience');
    expect(experienceTitle).toBeInTheDocument();
  });

  test('renders expertise data correctly', () => {
    render(<Expertise data={mockData} />);
    
    const companyA = screen.getByText('Company A');
    const companyB = screen.getByText('Company B');
    const dateA = screen.getByText('2020-2023');
    const dateB = screen.getByText('2018-2020');
    const jobA = screen.getByText('Developer');
    const jobB = screen.getByText('Designer');
    const descriptionA = screen.getByText('Some description');
    const descriptionB = screen.getByText('Another description');
    
    expect(companyA).toBeInTheDocument();
    expect(companyB).toBeInTheDocument();
    expect(dateA).toBeInTheDocument();
    expect(dateB).toBeInTheDocument();
    expect(jobA).toBeInTheDocument();
    expect(jobB).toBeInTheDocument();
    expect(descriptionA).toBeInTheDocument();
    expect(descriptionB).toBeInTheDocument();
  });

});

