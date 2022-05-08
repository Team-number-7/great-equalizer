import { window } from './globals/window';
import storeTransaction from './storage';
import { Transaction } from './addTransaction';

jest.mock('./globals/window', () => ({
  window: {
    localStorage: {
      getItem: jest.fn(),
      setItem: jest.fn(),
    },
  },
}));

test('test storage', () => {
  // Arrange
  const expectedDate = new Date('2022-05-01');
  const expectedName = 'Пиросмани';
  const expectedValue = 70;

  const expectedTransaction: Transaction = {
    date: expectedDate,
    name: expectedName,
    value: expectedValue,
  };

  const expectedPreviousCount: number = 2;
  const expectedNextCount: number = expectedPreviousCount + 1;
  const expectedCounterKey: string = 'counter';
  const expectedKey: string = `${expectedNextCount}`;
  const expectedTransactionValue: string = JSON.stringify(expectedTransaction);
  const expectedCounterValue: string = `${expectedNextCount}`;

  const mockGetItem = jest.fn()
    .mockReturnValue(`${expectedPreviousCount}`);
  const mockSetItem = jest.fn();

  window.localStorage.setItem = mockSetItem;
  window.localStorage.getItem = mockGetItem;

  // Act
  storeTransaction(expectedTransaction);

  // Assert
  expect(mockGetItem).toBeCalledWith(expectedCounterKey);
  expect(mockSetItem).toBeCalledWith(expectedKey, expectedTransactionValue);
  expect(mockSetItem).toBeCalledWith(expectedCounterKey, expectedCounterValue);
});
