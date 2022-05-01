import mockAddTransaction, { Transaction } from './addTransaction';
import { document } from './globals/document';
import addClick from './addClick';

jest.mock('./addTransaction');

jest.mock('./globals/document', () => ({
  document: {
    getElementById: jest.fn(),
  },
}));

test('test addTransaction', () => {
  // Arrange
  const expectedDate = new Date('2022-05-01');
  const expectedName = 'Пиросмани';
  const expectedValue = 70;

  const expectedDateElement = {
    value: expectedDate,
  };

  const expectedNameElement = {
    value: expectedName,
  };

  const expectedValueElement = {
    value: expectedValue,
  };
  const expectedTransaction: Transaction = {
    date: expectedDate,
    name: expectedName,
    value: expectedValue,
  };

  const expectedDateId = 'date';
  const expectedNameId = 'name';
  const expectedValueId = 'value';

  const mockGetElementById = jest
    .fn()
    .mockReturnValue('default')
    .mockReturnValueOnce(expectedDateElement)
    .mockReturnValueOnce(expectedNameElement)
    .mockReturnValueOnce(expectedValueElement);

  document.getElementById = mockGetElementById;

  // Act
  addClick();

  // Assert
  expect(mockGetElementById).toBeCalledWith(expectedDateId);
  expect(mockGetElementById).toBeCalledWith(expectedNameId);
  expect(mockGetElementById).toBeCalledWith(expectedValueId);
  expect(mockAddTransaction).toBeCalledWith(expectedTransaction);
});
