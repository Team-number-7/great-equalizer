import Storage from './Storage';
import { Transaction } from './types/Transaction';
import MockFetch from './Fetch';
import { FetchedTransaction } from './types/IFetchedTransaction';

jest.mock('./Fetch');

describe('test Storage.storeTransaction', () => {
  test('happy path', async () => {
    // Arrange
    const expectedDate = new Date('2022-05-01');
    const expectedName = 'Пиросмани';
    const expectedValue = 70;

    const expectedTransaction: Transaction = {
      date: expectedDate,
      name: expectedName,
      value: expectedValue,
    };

    // Act
    await Storage.storeTransaction(expectedTransaction);

    // Assert
    expect(MockFetch.postTransaction).toBeCalledWith(expectedTransaction);
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
