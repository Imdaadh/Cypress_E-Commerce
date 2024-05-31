describe('Assertions', () => {

    beforeEach(()=>{cy.visit('https://opensource-demo.orangehrmlive.com/',{timeout: 120000 })}) 

    it('URL Assertions', () => {
 
      cy.url().should('include','orangehrmlive')
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('contain','orangehrm')
    

    })
  
    it('URL Assertions with Should', () => {

            cy.url().should('include','orangehrmlive')
           .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
           .should('contain','orangehrm')
      
    })
  
    it('URL Assertions with And', () => {
        
            cy.url().should('include','orangehrmlive')
           .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
           .and('contain','orangehrm')
           .and('not.contain','orangehrm2')
      
    })

    it('Title Assertions', () => {
        
        cy.title().should('include','Orange')
       .and('eq', 'OrangeHRM')
       .and('contain','HRM')
       .and('not.contain','orangehrm2')
  
    })

    it('Logo Assertions Visible or Exist or Not', () => {
        
        cy.get('.orangehrm-login-branding > img').should('be.visible')
       .and('exist')
  
    })

    it('Only 5 Links Should Be Present', () => {
        
        cy.xpath('//a').should('have.length','5')
  
    })

    it('Correct Username and PW Provided or Not', () => {
        
        cy.get("[name='username']").type("Admin")
        cy.get("[name='username']").should('have.value','Admin')

        cy.get("[name='password']").type("admin123")
        cy.get("[name='password']").should('have.value','admin123')
        cy.get(".oxd-button").click()
  
    })
  
  })