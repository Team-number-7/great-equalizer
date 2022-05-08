import onload from './onload';
import mockFeatureToggle, { Features } from './featureToggle';
import mockAddButtonEventListener from './addButtonEventListener';
import mockLoadData from './loadData';

jest.mock('./addButtonEventListener');
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
  expect(mockAddButtonEventListener).toBeCalled();
  expect(mockLoadData).toBeCalled();
});
