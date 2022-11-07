describe('Resource Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://salty-sea-12550.herokuapp.com/api/v1/emotions', {
      fixture: 'emotions.json'
    }).as('emotions')

    cy.visit('http://localhost:3000')

    cy.get('.main--container')
      .get('form')  
      .get('button')
      .first()
      .click()

    cy.get('.main--container')
      .get('form')
      .get('button')
      .first()
      .click().wait(1000)
  })
  
  it('Should render a header', () => {
    cy.get('Header')
      .should('be.visible')
      .should('contain', 'Cheers For Fears')
  })

  it('Should be able to post a message', () => {
    cy.intercept('POST', 'https://salty-sea-12550.herokuapp.com/api/v1/quotes', {
      statusCode: 201,
      body: {
          "id": 50,
          "emotion_id": 1,
          "content": "This is a test"
      }
    })
      .get('.resource--button')
      .first()
      .click()
      .get('form').get('input[name="resource"]').type('This is a test')
      .get('.submit').click()
      .get('p').contains('New quotes added!')
  })

  it('Should get an error if post is unsuccessful', () => {
    cy.intercept('POST', 'https://salty-sea-12550.herokuapp.com/api/v1/quotes', {
      statusCode: 401,
      body: {
        message: 'Sorry an error has occurred. Please try again.'
      }
    })
      .get('.resource--button')
      .first()
      .click()
      .get('form').get('input[name="resource"]').type('This is a test')
      .get('.submit').click()
      .get('p').contains('Sorry an error has occurred. Please try again.')
  })

})