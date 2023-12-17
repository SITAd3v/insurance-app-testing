describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.blocket.se/')
    cy.get('#sp_message_iframe_960943').click()
  
    cy.get('.Profile__Wrapper-sc-exqh0k-0 > .StyledLink-sc-eac612-0').click()
   
    

  })
})