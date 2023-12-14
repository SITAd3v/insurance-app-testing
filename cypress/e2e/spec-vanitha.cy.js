describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.airindia.com')
    cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
    
    cy.get('.show-all-container > .cancel')
  })
})