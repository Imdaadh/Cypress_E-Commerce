describe('Title Validation', () => {

  it('verify title-positive', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.title().should('eq',"OrangeHRM")
  })

  it('verify negative-positive1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.title().should('not.eq',"OrangeHRM124")
  })

  it('verify negative-positive2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.title().should('eq',"OrangeHRM124")
  })



})