describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://demo.guru99.com/insurance/v1/index.php')
    //Accept cookies
    cy.get('#email').type("nidhi.into.pgt@gmail.com")
    cy.clear ("cookie")
    cy.get('#password').type("nidhi@123")
    cy.get(':nth-child(3) > .btn').click()
    //Verify login
  })
})
//Attomation code