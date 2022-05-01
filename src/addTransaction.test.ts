test('test addTransaction', () => {
  // Arrange
  const expectedTransaction: Transaction = {
    date: '2022-05-01',
    name: 'Пиросмани',
    value: 70,
  };
  // Act
  addTransaction(expectedTransaction);

  // Assert

  expect(mockQuerySelector).toBeCalledWith(expectedSelector);
  expect(mockInsertAdjacentHTML).toBeCalledWith(expectedPosition, expectedText);
});
