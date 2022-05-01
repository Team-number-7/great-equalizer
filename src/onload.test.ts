import onload from './onload';
import mockFeatureToggle, { Features } from './featureToggle';

jest.mock('./featureToggle');

test('test onload', () => {
  // Arrange
  const expectedFeatures: Features = {
    isUserName: false,
  };
  // Act
  onload();

  // Assert
  expect(mockFeatureToggle).toBeCalledWith(expectedFeatures);
});
