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
describe('test Storage.storeTransaction', () => {
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

describe('test Storage.readTransactions', () => {
  test('four records', () => {
    // Arrange
    const expectedDate = new Date('2022-05-01');
    const expectedName = 'Пиросмани';
    const expectedValue = 70;

    const expectedTransaction1: Transaction = {
      date: expectedDate,
      name: expectedName,
      value: expectedValue,
    };
    const expectedTransaction2: Transaction = {
      date: expectedDate,
      name: expectedName,
      value: expectedValue,
    };
    const expectedTransaction3: Transaction = {
      date: expectedDate,
      name: expectedName,
      value: expectedValue,
    };
    const expectedTransaction4: Transaction = {
      date: expectedDate,
      name: expectedName,
      value: expectedValue,
    };
    const expectedTransactions: Array<Transaction> = [
      expectedTransaction1,
      expectedTransaction2,
      expectedTransaction3,
      expectedTransaction4,
    ];

    const expectedCounterKey: string = 'counter';
    const expectedTransactionKey1: string = `${0}`;
    const expectedTransactionKey2: string = `${1}`;
    const expectedTransactionKey3: string = `${2}`;
    const expectedTransactionKeyLast: string = `${3}`;

    const mockGetItem = jest
      .fn()
      .mockReturnValue('default')
      .mockReturnValueOnce(expectedTransactionKeyLast)
      .mockReturnValueOnce(JSON.stringify(expectedTransaction1))
      .mockReturnValueOnce(JSON.stringify(expectedTransaction2))
      .mockReturnValueOnce(JSON.stringify(expectedTransaction3))
      .mockReturnValueOnce(JSON.stringify(expectedTransaction4));

    window.localStorage.getItem = mockGetItem;

    // Act
    const actualTransactions: Array<Transaction> = Storage.readTransactions();

    // Assert
    expect(actualTransactions).toEqual(expectedTransactions);
    expect(mockGetItem).toBeCalledWith(expectedCounterKey);
    expect(mockGetItem).toBeCalledWith(expectedTransactionKey1);
    expect(mockGetItem).toBeCalledWith(expectedTransactionKey2);
    expect(mockGetItem).toBeCalledWith(expectedTransactionKey3);
    expect(mockGetItem).toBeCalledWith(expectedTransactionKeyLast);
  });
  test('0 records', () => {
    // Arrange
    const expectedTransactions: Array<Transaction> = [];

    const expectedCounterKey: string = 'counter';
    const expectedCounterValue: string = null;

    const mockGetItem = jest
      .fn()
      .mockReturnValue('default')
      .mockReturnValueOnce(expectedCounterValue);

    window.localStorage.getItem = mockGetItem;

    // Act
    const actualTransactions: Array<Transaction> = Storage.readTransactions();

    // Assert
    expect(actualTransactions).toEqual(expectedTransactions);
    expect(mockGetItem).toBeCalledWith(expectedCounterKey);
  });
});
