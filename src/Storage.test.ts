import { window } from './globals/window';
import Storage from './Storage';
import { Transaction } from './types/Transaction';
import MockFetch from './Fetch';
import { FetchedTransaction } from './types/IFetchedTransaction';

jest.mock('./globals/window', () => ({
  window: {
    localStorage: {
      getItem: jest.fn(),
      setItem: jest.fn(),
    },
  },
}));

jest.mock('./Fetch');

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
  test('two records', async () => {
    // Arrange
    const expectedFetchedDate: string = '2022-05-01';
    const expectedDate = new Date(expectedFetchedDate);
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
    const expectedTransactions: Array<Transaction> = [
      expectedTransaction1,
      expectedTransaction2,
    ];

    const expectedFetchedTransaction1: FetchedTransaction = {
      date: expectedFetchedDate,
      name: expectedName,
      value: expectedValue,
    };
    const expectedFetchedTransaction2: FetchedTransaction = {
      date: expectedFetchedDate,
      name: expectedName,
      value: expectedValue,
    };
    const expectedFetchedTransactions: Array<FetchedTransaction> = [
      expectedFetchedTransaction1,
      expectedFetchedTransaction2,
    ];

    MockFetch.getTransactions = jest
      .fn(async () => expectedFetchedTransactions);

    // Act
    const actualTransactions: Array<Transaction> = await Storage.readTransactions();

    // Assert
    expect(actualTransactions).toEqual(expectedTransactions);
    expect(MockFetch.getTransactions).toBeCalled();
  });
  test('0 records', async () => {
    // Arrange
    const expectedTransactions: Array<Transaction> = [];

    MockFetch.getTransactions = jest
      .fn()
      .mockReturnValue(expectedTransactions);

    // Act
    const actualTransactions: Array<Transaction> = await Storage.readTransactions();

    // Assert
    expect(actualTransactions).toEqual(expectedTransactions);
    expect(MockFetch.getTransactions).toBeCalled();
  });
});
