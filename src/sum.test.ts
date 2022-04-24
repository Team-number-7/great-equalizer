import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
    // Arrange
    const expected_first_arg = 1;
    const expected_second_arg = 2;
    const expected_result = 3;
    
    // Act
    const actual_result = sum(expected_first_arg, expected_second_arg);
    
    // Assert
    expect(actual_result).toBe(expected_result)
});

