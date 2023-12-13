describe('Amazon Signup Test', () => {
  it('Should sign up on Amazon', () => {
    // Visit the Amazon signup page
    cy.visit('https://www.amazon.com');

    // Click on the 'Account & Lists' dropdown
    cy.get('#nav-link-accountList').click();

    // Click on the 'Start here.' link to navigate to the signup page
    cy.get('#createAccountSubmit').click();

    // Fill in the signup form
    cy.get('#ap_customer_name').type('lavanya');
    cy.get('#ap_email').type('lavanya@gmail.com');
    cy.get('#ap_password').type('1234');
    cy.get('#ap_password_check').type('1234');

    // Click on the 'Create your Amazon account' button
    cy.get('#continue').click();

    // Handle any additional steps in the signup process if necessary
    // (e.g., verifying email, providing additional details, etc.)

    // Assertions (adjust these based on the actual behavior of the Amazon signup process)
    cy.url().should('include', 'amazon.com'); // Assuming successful signup redirects to the main page
    cy.get('.nav-line-1').should('contain', 'Hello, Your Name'); // Assuming the user's name is displayed after signup
  });
});
