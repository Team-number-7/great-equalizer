import IDay from '../types/IDay';
import { Transaction } from '../types/Transaction';
import addTransactionReducer from './reducers';

describe('addTransaction', () => {
  test('test addTransaction with different date', () => {
    // Arrange
    const expectedNewDate = new Date('2022-05-02');
    const expectedNewName = 'Пиросмани';
    const expectedNewValue = 70;

    const expectedTransaction: Transaction = {
      date: expectedNewDate,
      name: expectedNewName,
      value: expectedNewValue,
    };

    const expectedDate = new Date('2022-05-01');
    const expectedSecondDate = new Date('2022-04-01');
    const expectedName = 'Pyat';
    const expectedValue = 567;

    const expectedState: Array<IDay> = [
      {
        date: expectedDate,
        transactions: [
          {
            name: expectedName,
            value: expectedValue,
          },
        ],
      },
      {
        date: expectedSecondDate,
        transactions: [
          {
            name: expectedName,
            value: expectedValue,
          },
        ],
      },
    ];

    const expectedNewState: Array<IDay> = [
      {
        date: expectedDate,
        transactions: [
          {
            name: expectedName,
            value: expectedValue,
          },
        ],
      },
      {
        date: expectedSecondDate,
        transactions: [
          {
            name: expectedName,
            value: expectedValue,
          },
        ],
      },
      {
        date: expectedNewDate,
        transactions: [
          {
            name: expectedNewName,
            value: expectedNewValue,
          },
        ],
      },
    ];

    // Act
    const actualNewState: Array<IDay> = addTransactionReducer(expectedState, expectedTransaction);
    // Assert
    expect(actualNewState).not.toBe(expectedState);
    expect(actualNewState).toEqual(expectedNewState);
  });

  test('test addTransaction with same date', () => {
    // Arrange
    const expectedNewName = 'Пиросмани';
    const expectedNewValue = 70;
    const expectedDate = new Date('2022-05-01');
    const expectedSecondDate = new Date('2022-04-01');

    const expectedTransaction: Transaction = {
      date: expectedDate,
      name: expectedNewName,
      value: expectedNewValue,
    };

    const expectedName = 'Pyat';
    const expectedValue = 567;

    const expectedState: Array<IDay> = [
      {
        date: expectedDate,
        transactions: [
          {
            name: expectedName,
            value: expectedValue,
          },
        ],
      },
      {
        date: expectedSecondDate,
        transactions: [
          {
            name: expectedName,
            value: expectedValue,
          },
        ],
      },
    ];

    const expectedNewState: Array<IDay> = [
      {
        date: expectedDate,
        transactions: [
          {
            name: expectedName,
            value: expectedValue,
          },
          {
            name: expectedNewName,
            value: expectedNewValue,
          },
        ],
      },
      {
        date: expectedSecondDate,
        transactions: [
          {
            name: expectedName,
            value: expectedValue,
          },
        ],
      },
    ];

    // Act
    const actualNewState: Array<IDay> = addTransactionReducer(expectedState, expectedTransaction);
    // Assert
    expect(actualNewState).not.toBe(expectedState);
    expect(actualNewState).toEqual(expectedNewState);
  });
});
