describe('Landing Page', () => {
  it('Should render a header', () => {
    cy.visit('http://localhost:3000/')
      .get('Header')
      .should('be.visible')
      .should('contain', 'Cheers For Fears')
  })
})