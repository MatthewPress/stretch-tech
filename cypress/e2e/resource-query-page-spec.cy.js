describe('Resource Query Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('.main--container')
      .get('button')
      .first()
      .click();
  })
  
  it('Should render a header', () => {
    cy.get('Header')
      .should('be.visible')
      .should('contain', 'Cheers For Fears')
  });

  it('Should render the resource query form', () => {
    cy.get('.main--container')
      .get('p')
      .should('contain', 'Would you like some words of encouragement or coping strategies?')
      .get('button')
      .should('have.length', '2')
      .first()
      .should('contain', 'WORDS');
  });

  it('Should navigate to the requested resource page for a specific emotion when an emotion is picked', () => {
    cy.get('.main--container')
      .get('button')
      .first()
      .click();

    cy.url('should.be', 'http://localhost:3000/anger/words');
  });
})