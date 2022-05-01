import featureToggle, { Features } from './featureToggle';
import { document } from './globals/document';

const mockSetAttribute = jest.fn();
const expectedLogo = {
  setAttribute: mockSetAttribute,
};
jest.mock('./globals/document', () => ({
  document: {
    getElementById: jest.fn(() => expectedLogo),
  },
}));

test('featureToggle test', () => {
  // Arrange
  const expectedFeatures: Features = {
    isUserName: false,
  };
  const expectedId = 'header__logo';
  const expectedAttribute = 'style';
  const expectedValue = 'visibility: hidden;';
  // Act
  featureToggle(expectedFeatures);

  // Assert
  expect(document.getElementById).toBeCalledWith(expectedId);
  expect(mockSetAttribute).toBeCalledWith(expectedAttribute, expectedValue);
});
