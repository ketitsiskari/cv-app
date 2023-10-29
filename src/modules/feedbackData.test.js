import feedbackData from './feedbackData';

describe('Feedback Data', () => {

    it('should have the correct structure', () => {
        feedbackData.forEach(item => {
            expect(item).toHaveProperty('feedback');
            expect(typeof item.feedback).toBe('string');

            expect(item).toHaveProperty('reporter');
            expect(item.reporter).toHaveProperty('photoUrl');
            expect(item.reporter).toHaveProperty('name');
            expect(item.reporter).toHaveProperty('citeUrl');

            expect(typeof item.reporter.photoUrl).toBe('string');
            expect(typeof item.reporter.name).toBe('string');
            expect(typeof item.reporter.citeUrl).toBe('string');
        });
    });

    it('should have non-empty properties', () => {
        feedbackData.forEach(item => {
            expect(item.feedback.trim().length).not.toBe(0);
            expect(item.reporter.photoUrl.trim().length).not.toBe(0);
            expect(item.reporter.name.trim().length).not.toBe(0);
            expect(item.reporter.citeUrl.trim().length).not.toBe(0);
        });
    });

});

