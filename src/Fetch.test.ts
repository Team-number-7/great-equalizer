import { global } from './globals/global';
import Fetch, { URL } from './Fetch';
import { Transaction } from './types/Transaction';

jest.mock('./globals/global', () => ({
  global: {
    fetch: jest.fn(),
  },
}));

describe('fetching data', () => {
  describe('geting data', () => {
    test('happy path', async () => {
      // Arrange
      const expectedDate = new Date('2022-05-01');
      const expectedName = 'Пиросмани';
      const expectedValue = 70;
      const expectedPath = URL;
      const expectedOptions = { method: 'GET' };

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

      const expectedData = [
        expectedTransaction1,
        expectedTransaction2,
      ];

      const mockResponse: Partial<Response> = { json: async () => expectedData };
      const mockFetch = jest.fn(async () => mockResponse as Response);

      global.fetch = mockFetch;

      // Act
      const actualData = await Fetch.getTransactions();

      // Assert
      expect(actualData).toEqual(expectedData);
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toBeCalledWith(expectedPath, expectedOptions);
    });
  });
  describe('posting data', () => {
    test('happy path', async () => {
      // Arrange
      const expectedDate = new Date('2022-05-01');
      const expectedName = 'Пиросмани';
      const expectedValue = 70;
      const expectedPath = URL;
      const expectedTransaction: Transaction = {
        date: expectedDate,
        name: expectedName,
        value: expectedValue,
      };

      const expectedOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expectedTransaction),
      };

      const mockResponse: Partial<Response> = { };
      const mockFetch = jest.fn(async () => mockResponse as Response);
      global.fetch = mockFetch;

      // Act
      await Fetch.postTransaction(expectedTransaction);

      // Assert
      expect(mockFetch).toBeCalledWith(expectedPath, expectedOptions);
    });
  });
});
