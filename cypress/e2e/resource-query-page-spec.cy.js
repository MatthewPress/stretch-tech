describe('Resource Query Page', () => {
  beforeEach(() => {

  cy.intercept('GET', 'https://salty-sea-12550.herokuapp.com/api/v1/emotions', {
    fixture:'emotions.json'
  }).as('emotions')

  cy.visit('http://localhost:3000');

  cy.get('.main--container')
    .get('form')
    .get('button').first().contains('ANGER')
    .click()
    .url().should('eq', 'http://localhost:3000/anger')
  })
  
  it('Should render a header', () => {
    cy.get('Header')
      .should('be.visible')
      .should('contain', 'Cheers For Fears')
  });

  it('Should render the resource query form', () => {
    cy.get('.main--container')
      .get('form')
      .get('p')
      .should('contain', 'Would you like some words of encouragement or coping strategies?')
      .get('button')
      .should('have.length', '2')
      .first()
      .should('contain', 'QUOTES');
  });

  it('Should navigate to the requested resource page for a specific emotion when a resource is picked', () => {
    cy.get('.main--container')
      .get('form')
      .get('button').first().click()
      .url().should('eq', 'http://localhost:3000/anger/quotes')
  });

})