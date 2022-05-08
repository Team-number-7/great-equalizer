import { window } from './globals/window';
import Storage from './Storage';
import { Transaction } from './types/Transaction';

jest.mock('./globals/window', () => ({
  window: {
    localStorage: {
      getItem: jest.fn(),
      setItem: jest.fn(),
    },
  },
}));
describe('test storage', () => {
  test('happy path', () => {
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
    const expectedTransactionValue: string = JSON.stringify(expectedTransaction);
    const expectedCounterValue: string = `${expectedNextCount}`;

    const mockGetItem = jest.fn()
      .mockReturnValue(`${expectedPreviousCount}`);
    const mockSetItem = jest.fn();

    window.localStorage.setItem = mockSetItem;
    window.localStorage.getItem = mockGetItem;

    // Act
    Storage.storeTransaction(expectedTransaction);

    // Assert
    expect(mockGetItem).toBeCalledWith(expectedCounterKey);
    expect(mockSetItem).toBeCalledWith(expectedCounterValue, expectedTransactionValue);
    expect(mockSetItem).toBeCalledWith(expectedCounterKey, expectedCounterValue);
  });
  test('no counter', () => {
    // Arrange
    const expectedDate = new Date('2022-05-01');
    const expectedName = 'Пиросмани';
    const expectedValue = 70;

    const expectedTransaction: Transaction = {
      date: expectedDate,
      name: expectedName,
      value: expectedValue,
    };

    const expectedNextCount: number = 0;
    const expectedCounterKey: string = 'counter';
    const expectedTransactionValue: string = JSON.stringify(expectedTransaction);
    const expectedCounterValue: string = `${expectedNextCount}`;

    const mockGetItem = jest.fn()
      .mockReturnValue(null);
    const mockSetItem = jest.fn();

    window.localStorage.setItem = mockSetItem;
    window.localStorage.getItem = mockGetItem;

    // Act
    Storage.storeTransaction(expectedTransaction);

    // Assert
    expect(mockGetItem).toBeCalledWith(expectedCounterKey);
    expect(mockSetItem).toBeCalledWith(expectedCounterValue, expectedTransactionValue);
    expect(mockSetItem).toBeCalledWith(expectedCounterKey, expectedCounterValue);
  });
});
