import addTransaction, { Transaction } from './addTransaction';
import { document } from './globals/document';

const mockInsertAdjacentHTML = jest.fn();
const expectedElement = {
  insertAdjacentHTML: mockInsertAdjacentHTML,
};

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
  const expectedText = `<div class="dates__date">${expectedDate.toDateString()}</div><ul class="dates__details"><li class="dates__transaction"><span class="dates__transaction-text">${expectedName}</span><span class="dates__transaction-number">${expectedValue}</span></li></ul>`;

  // Act
  addTransaction(expectedTransaction);

  // Assert
  expect(document.querySelector).toBeCalledWith(expectedSelector);
  expect(mockInsertAdjacentHTML).toBeCalledWith(expectedPosition, expectedText);
});
