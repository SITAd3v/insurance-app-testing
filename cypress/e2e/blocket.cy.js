describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.blocket.se/')
    cy.get('#sp_message_iframe_960943').click()
    cy.get('.react-autosuggest__input').type('Bilar')
   
    

  })
})