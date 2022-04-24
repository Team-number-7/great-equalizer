import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  // Arrange
  const expectedFirstArg = 1;
  const expectedSecondArg = 2;
  const expectedResult = 3;

  // Act
  const actualResult = sum(expectedFirstArg, expectedSecondArg);

  // Assert
  expect(actualResult).toBe(expectedResult);
});
