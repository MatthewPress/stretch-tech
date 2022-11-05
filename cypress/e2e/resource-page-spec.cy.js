describe('Resource Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://salty-sea-12550.herokuapp.com/api/v1/emotions', {
      fixture: 'emotions.json'
    }).as('emotions')

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
      .click().wait(1000);
  });
  
  it.skip('Should render a header', () => {
    cy.get('Header')
      .should('be.visible')
      .should('contain', 'Cheers For Fears')
  });

  it('Should render a resource', () => {
    cy.intercept('GET', 'https://salty-sea-12550.herokuapp.com/api/v1/quotes', {
      fixture: 'singleQuote.json'
    })
    cy.get('.main--container')
      .get('p')
    cy.fixture('singleQuote.json')
      .then(quoteDetails => {
        expect(quoteDetails.content).to.eq("Anger makes you smaller")
      }).as('content')
  });

  it.skip('Should take the user back to the landing page when the start again button is pressed', () => {
    cy.get('.main--container')
      .get('button')
      .first()
      .click();

    cy.url('should.be', 'http://localhost:3000');
  });

  it.skip('Should take the user back to the add resource page when the add message button is clicked', () => {
    cy.get('.main--container')
      .get('button[name="addMessage"]')
      .click();

    cy.url('should.be', 'http://localhost:3000/');
  });
})