import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Skills } from './index';
import configureStore from 'redux-mock-store'; 
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('<Skills />', () => {
    let store;

    beforeEach(() => {
        store = mockStore({ 
            skills: {
                data: [],
                status: 'idle',
                skillsIsOpen: false
            }
        });
        
        store.dispatch = jest.fn();
    });

    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <Skills />
            </Provider>
        );
    });

    it('dispatches fetchSkills on mount', () => {
        render(
            <Provider store={store}>
                <Skills />
            </Provider>
        );
        
        expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function)); 
    });

});
