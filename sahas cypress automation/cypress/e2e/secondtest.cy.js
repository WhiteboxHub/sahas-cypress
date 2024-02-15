



describe('cypresstesting', () => {


  it('test1', () => {

    cy.visit('https://www.google.com')
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")


  })

})