import { Transaction } from './types/Transaction';
import MockStorage from './Storage';
import loadData from './loadData';

jest.mock('./Storage');

test('test loadData', () => {
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

  const expectedTransactions: Array<Transaction> = [
    expectedTransaction1,
    expectedTransaction2,
  ];

  MockStorage.readTransactions = jest
    .fn()
    .mockReturnValue(expectedTransactions);

  // Act
  const actualTransactions = loadData();

  // Assert
  expect(MockStorage.readTransactions).toBeCalled();
  expect(actualTransactions).toEqual(expectedTransactions);
});
