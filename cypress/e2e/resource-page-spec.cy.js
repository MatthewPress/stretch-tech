describe('Resource Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('.main--container')
      .get('button')
      .first()
      .click();

      cy.get('.main--container')
      .get('button')
      .first()
      .click();
  });
  
  it('Should render a header', () => {
    cy.get('Header')
      .should('be.visible')
      .should('contain', 'Cheers For Fears')
  });

  it('Should render a resource', () => {
    cy.get('.main--container')
      .get('p')
      .contains('Don\'t be angry')
  });
})