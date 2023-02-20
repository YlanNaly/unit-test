describe('template spec', () => {
  xit('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('contains Kitchen',()=>{
    cy.visit('https://example.cypress.io').contains('Kitchen')
    cy.contains("children").click();
    cy.url().should('contains' , 'traversal');
  })

  xit("contains input todo" , ()=>{
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type("Lorem ipsum");
  })
})