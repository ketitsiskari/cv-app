import scrollToElement from './scroll';

describe('scrollToElement', () => {
  it('should scroll to the element when it exists', () => {
    const getElementByIdMock = jest.spyOn(document, 'getElementById');
    const scrollIntoViewMock = jest.fn();

    getElementByIdMock.mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    });

    scrollToElement('elementId');

    expect(getElementByIdMock).toHaveBeenCalledWith('elementId');
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });

    getElementByIdMock.mockRestore();
  });

  it('should not scroll when the element does not exist', () => {
    const getElementByIdMock = jest.spyOn(document, 'getElementById');

    getElementByIdMock.mockReturnValue(null);

    scrollToElement('nonExistentElementId');

    expect(getElementByIdMock).toHaveBeenCalledWith('nonExistentElementId');
  });
});
