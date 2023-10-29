import experiences from './Expertise';

describe('Experiences Data', () => {

    it('should have the correct structure', () => {
        experiences.forEach(exp => {
            expect(exp).toHaveProperty('date');
            expect(typeof exp.date).toBe('string');

            expect(exp).toHaveProperty('info');
            expect(exp.info).toHaveProperty('company');
            expect(exp.info).toHaveProperty('job');
            expect(exp.info).toHaveProperty('description');

            expect(typeof exp.info.company).toBe('string');
            expect(typeof exp.info.job).toBe('string');
            expect(typeof exp.info.description).toBe('string');
        });
    });

    it('should have non-empty properties', () => {
        experiences.forEach(exp => {
            expect(exp.date.trim().length).not.toBe(0);
            expect(exp.info.company.trim().length).not.toBe(0);
            expect(exp.info.job.trim().length).not.toBe(0);
            expect(exp.info.description.trim().length).not.toBe(0);
        });
    });


});

