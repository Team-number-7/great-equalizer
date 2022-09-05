import onload from './onload';
import mockLoadData from './loadData';

jest.mock('./featureToggle');
jest.mock('./loadData');

test('test onload', async () => {
  // Arrange

  // Act
  await onload();

  // Assert
  expect(mockLoadData).toBeCalled();
});
