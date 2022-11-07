describe('Landing Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://salty-sea-12550.herokuapp.com/api/v1/emotions', {
      fixture:'emotions.json'
    }).as('emotions')
    cy.visit('http://localhost:3000/')
  })

  it('Should render a header', () => {
    cy.get('Header')
      .should('be.visible')
      .should('contain', 'Cheers For Fears')
  })

  it('Should render the emotion query form', () => {
    cy.get('.main--container')
      .get('p')
      .should('contain', 'How are you feeling?')
      .get('button')
      .should('have.length', '2')
      .first()
      .should('contain', 'ANGER')
  })

  it('Should navigate to the requested resource page for a specific emotion when an emotion is picked', () => {
    cy.get('.main--container')
      .get('form')
      .get('button')
      .first()
      .click()

    cy.url('should.be', 'http://localhost:3000/anger')
  })
})