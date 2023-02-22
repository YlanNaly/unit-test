describe('template spec', () => {
  xit('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  xit('contains Kitchen',()=>{
    cy.visit('https://example.cypress.io').contains('Kitchen')
    cy.contains("children").click();
    cy.url().should('contains' , 'traversal');
  })

  it("contains input todo" , ()=>{
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type("Lorem ipsum");
  })
  it("contains input todo after enter" , ()=>{
    let text = "Lorem ipsum"
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type('todo{enter}');
    cy.get('[data-testid="test-todo-0-container"]').contains("todo")
  })
  it("card done most have text todo",()=>{
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type('todo{enter}');
    cy.get('[data-testid="test-todo-0"]').check();
    cy.get('[data-testid="test-todo-0-container"]').contains("todo")
  })
})