import { global } from './globals/global';
import Fetch from './Fetch';
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
      const expectedPath = 'http://web-lb-247099307.us-east-1.elb.amazonaws.com/transactions';
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

      const mockFetch = jest.fn()
        .mockReturnValueOnce({ json: async () => expectedData });

      global.fetch = mockFetch;

      // Act
      const actualData = await Fetch.getTransactions();

      // Assert
      expect(actualData).toEqual(expectedData);
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toBeCalledWith(expectedPath, expectedOptions);
    });
  });
});
