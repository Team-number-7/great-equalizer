import mockAddClick from './addClick';
import addButtonEventListener from './addButtonEventListener';
import { document } from './globals/document';

jest.mock('./addClick');

const mockAddEventListener = jest.fn();
const expectedElement = {
  addEventListener: mockAddEventListener,
};

jest.mock('./globals/document', () => ({
  document: {
    querySelector: jest.fn(() => expectedElement),
  },
}));

test('addButtonEventListener', () => {
  // Arrange
  const expectedSelector = '#add';
  const expectedEventType = 'click';

  // Act
  addButtonEventListener();

  // Assert
  expect(document.querySelector).toBeCalledWith(expectedSelector);
  expect(mockAddEventListener).toBeCalledWith(expectedEventType, mockAddClick);
});
