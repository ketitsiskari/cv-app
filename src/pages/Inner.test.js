import React from 'react';
import { render, fireEvent, act, screen, cleanup } from '@testing-library/react';
import InnerPage from './Inner';

jest.mock('../components/Box/index', () => () => <div>Box</div>);
jest.mock('../components/Expertise/index', () => () => <div>Expertise</div>);
jest.mock('../components/Timeline/index', () => () => <div>Timeline</div>);
jest.mock('../components/Panel/index', () => () => <div>Panel</div>);
jest.mock('../components/Portfolio/index', () => () => <div>Portfolio</div>);
jest.mock('../components/Address/index', () => () => <div>Address</div>);
jest.mock('../components/Feedback/index', () => () => <div>Feedback</div>);
jest.mock('../components/Button', () => () => <button>Button</button>);
jest.mock('../components/Skills', () => () => <div>Skills</div>);

describe('InnerPage Component', () => {
    let originalInnerWidth;

    const renderComponent = (width = global.innerWidth) => {
      originalInnerWidth = global.innerWidth;
      global.innerWidth = width;
      render(<InnerPage />);
    };
  
    afterEach(() => {
        global.innerWidth = originalInnerWidth;
        cleanup();
      });

        describe('Rendering', () => {
            it('renders the Box section', () => {
              renderComponent();
              expect(screen.getByText('Box')).toBeInTheDocument();
            });
        
            it('renders the Timeline section', () => {
              renderComponent();
              expect(screen.getByText('Timeline')).toBeInTheDocument();
            });
            it('renders the Expertise section', () => {
                renderComponent();
                expect(screen.getByText('Expertise')).toBeInTheDocument();
            });
            it('renders the Skills section', () => {
                renderComponent();
                expect(screen.getByText('Skills')).toBeInTheDocument();
            });
            it('renders the Portfolio section', () => {
                renderComponent();
                expect(screen.getByText('Portfolio')).toBeInTheDocument();
            });
            it('renders the Contact section', () => {
                renderComponent();
                expect(screen.getByText('Address')).toBeInTheDocument();
            });
            it('renders the Feedback section', () => {
                renderComponent();
                expect(screen.getByText('Feedback')).toBeInTheDocument();
            });

      });
  
    describe('Panel Toggle', () => {
      it('toggles the panel when the button is clicked', () => {
        renderComponent();
        const button = screen.getByText('Button');
        expect(document.body).toContainElement(screen.getByText('Panel'));
        fireEvent.click(button);
        expect(document.body).not.toContainElement(screen.getByText('Panel'));
        fireEvent.click(button);
        expect(document.body).toContainElement(screen.getByText('Panel'));
      });
  
      it('hides the panel on smaller screens on initial render', () => {
        renderComponent(400);
        expect(document.body).not.toContainElement(screen.getByText('Panel'));
      });
  
      it('shows the panel on larger screens on initial render', () => {
        renderComponent(1000);
        expect(document.body).toContainElement(screen.getByText('Panel'));
      });
  
      it('hides the panel on resize to smaller screens', () => {
        renderComponent();
        global.innerWidth = 400;
        act(() => {
          global.dispatchEvent(new Event('resize'));
        });
        expect(document.body).not.toContainElement(screen.getByText('Panel'));
      });
  
      it('shows the panel on resize to larger screens', () => {
        renderComponent(400);
        global.innerWidth = 1000;
        act(() => {
          global.dispatchEvent(new Event('resize'));
        });
        expect(document.body).toContainElement(screen.getByText('Panel'));
      });
      it('adjusts panel visibility based on window resize', () => {
        renderComponent(460);
        expect(document.body).toContainElement(screen.getByText('Panel'));
    
        act(() => {
            global.innerWidth = 400; 
            global.dispatchEvent(new Event('resize'));
        });
    
        expect(document.body).not.toContainElement(screen.getByText('Panel'));
    
        act(() => {
            global.innerWidth = 500; 
            global.dispatchEvent(new Event('resize'));
        });
    
        expect(document.body).toContainElement(screen.getByText('Panel'));
    });
    });
});