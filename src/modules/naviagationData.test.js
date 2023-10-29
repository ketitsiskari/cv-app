import navItems from './naviagtionData';

describe('navItems', () => {
  it('should be an array', () => {
    expect(Array.isArray(navItems)).toBeTruthy();
  });

  it('should have a certain length', () => {
    expect(navItems.length).toBe(7);
  });

  navItems.forEach(item => {
    describe(`item with id: ${item.id}`, () => {
      it('should have id, label, and icon properties', () => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('icon');
      });
    });
  });
});
