/* eslint-disable no-undef */
describe('My First Test', () => {
  it('Visits the Great Equilizer', () => {
    // Arrange
    const expectedDateInput = '2022-05-01';
    const expectedDate = new Date(expectedDateInput);
    const expectedDateString = expectedDate.toDateString();
    const expectedName = 'Пиросмани';
    const expectedValue = 70;
    const expectedValueString = `${expectedValue}`;

    cy.visit('https://team-number-7.github.io/great-equalizer/');
    cy.get('#date').type(expectedDateInput);
    cy.get('#name').type(expectedName);
    cy.get('#value').type(expectedValue);

    // Act
    cy.get('#add').click();

    // Assert
    cy.get('[data-cy=date]').should('have.text', expectedDateString);
    cy.get('[data-cy=name]').should('have.text', expectedName);
    cy.get('[data-cy=value]').should('have.text', expectedValueString);
  });
});
