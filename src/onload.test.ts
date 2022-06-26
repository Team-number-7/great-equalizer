import onload from './onload';
import mockFeatureToggle, { Features } from './featureToggle';
import mockLoadData from './loadData';

jest.mock('./featureToggle');
jest.mock('./loadData');

test('test onload', () => {
  // Arrange
  const expectedFeatures: Features = {
    isUserName: true,
  };

  // Act
  onload();

  // Assert
  expect(mockFeatureToggle).toBeCalledWith(expectedFeatures);
  expect(mockLoadData).toBeCalled();
});
