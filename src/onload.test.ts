import onload from './onload';
import mockFeatureToggle from './featureToggle';

jest.mock('./featureToggle');

test('test onload', () => {
  // Arrange
  const expectedFeatures = {
    isUserName: false,
  };
  // Act
  onload();

  // Assert
  expect(mockFeatureToggle).toBeCalledWith(expectedFeatures);
});
