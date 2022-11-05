describe('Error Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  
  it('Should display an error message (404 status code) if emotions are unable to be displayed on the screen', () => {
    cy.intercept('GET', 'https://salty-sea-12550.herokuapp.com/api/v1/emotions', {
      statusCode: 404,
      body: { message: "404: Why not start at the beginning?" },
    });
    cy.contains(".resource-display", "404: Why not start at the beginning?");
    });
  
  it('Should show an error page if the user tries to skip the forms', () => {
    cy.visit('http://localhost:3000/angry');
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