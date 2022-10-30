describe('Resource Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('.main--container')
      .get('form')  
      .get('button')
      .first()
      .click();

    cy.get('.main--container')
      .get('form')
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

  it('Should take the user back to the landing page when the start again button is pressed', () => {
    cy.get('.main--container')
      .get('button')
      .first()
      .click();

    cy.url('should.be', 'http://localhost:3000');
  });

  it('Should take the user back to the add resource page when the add message button is clicked', () => {
    cy.get('.main--container')
      .get('button[name="addMessage"]')
      .click();

    cy.url('should.be', 'http://localhost:3000/');
  });
})