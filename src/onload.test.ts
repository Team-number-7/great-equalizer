import onload from './onload';
import mockFeatureToggle, { Features } from './featureToggle';
import mockAddButtonEventListener from './addButtonEventListener';

jest.mock('./addButtonEventListener');
jest.mock('./featureToggle');

test('test onload', () => {
  // Arrange
  const expectedFeatures: Features = {
    isUserName: true,
  };
  // Act
  onload();

  // Assert
  expect(mockFeatureToggle).toBeCalledWith(expectedFeatures);
  expect(mockAddButtonEventListener).toBeCalled();
});
