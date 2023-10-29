import { store } from './store';
import { addEducation } from '../features/education/educationSlice';
import { postSkills } from '../features/skills/skillsSlice';

describe('Redux Store', () => {
  it('should have the correct initial state for education', () => {
    const state = store.getState();
    expect(state.educations).toEqual([]);
  });

  it('should have the correct initial state for skills', () => {
    const state = store.getState();
    expect(state.skills).toEqual([]);
  });

  it('should handle the addEducation action correctly', () => {
    const newEducation = {
      id: 1,
      name: 'Test School',
    };
    store.dispatch(addEducation(newEducation));
    expect(store.getState().educations).toContainEqual(newEducation);
  });

  it('should handle the postSkills action correctly', () => {
    const newSkill = {
      id: 1,
      name: 'JavaScript',
    };
    store.dispatch(postSkills(newSkill));
    expect(store.getState().skills).toContainEqual(newSkill);
  });

});
