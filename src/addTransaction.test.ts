import addTransaction from './addTransaction';
import { document } from './globals/document';
import MockStorage from './Storage';
import { Transaction } from './types/Transaction';

const mockInsertAdjacentHTML = jest.fn();
const expectedElement = {
  insertAdjacentHTML: mockInsertAdjacentHTML,
};
jest.mock('./storage');

jest.mock('./globals/document', () => ({
  document: {
    querySelector: jest.fn(() => expectedElement),
  },
}));

test('test addTransaction', () => {
  // Arrange
  const expectedDate = new Date('2022-05-01');
  const expectedName = 'Пиросмани';
  const expectedValue = 70;

  const expectedTransaction: Transaction = {
    date: expectedDate,
    name: expectedName,
    value: expectedValue,
  };

  const expectedSelector = '#transaction';
  const expectedPosition = 'afterbegin';
  const expectedText = `<div class="dates__date" data-cy="date">${expectedDate.toDateString()}</div><ul class="dates__details"><li class="dates__transaction"><span class="dates__transaction-text" data-cy="name">${expectedName}</span><span class="dates__transaction-number" data-cy="value">${expectedValue}</span></li></ul>`;

  // Act
  addTransaction(expectedTransaction);

  // Assert
  expect(document.querySelector).toBeCalledWith(expectedSelector);
  expect(mockInsertAdjacentHTML).toBeCalledWith(expectedPosition, expectedText);
  expect(MockStorage.storeTransaction).toBeCalledWith(expectedTransaction);
});
