import onload from './onload';
import mockFeatureToggle from './featureToggle';

jest.mock('./featureToggle');

test('test onload', () => {
  // Arrange

  // Act
  onload();

  // Assert
  expect(mockFeatureToggle).toBeCalled();
});
