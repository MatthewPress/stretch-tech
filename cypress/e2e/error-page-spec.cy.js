describe('Error Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/angry');
  });

  it('Should show an error page if the user tries to skip the forms', () => {
    cy.get('.main--container')
      .contains('404: Why not start at the beginning?')
  });

  it('Should take the user back to the landing page when the start again button is pressed', () => {
    cy.get('.main--container')
      .get('button')
      .click();

    cy.url('should.be', 'http://localhost:3000');
  });
})