describe('Login Validation', () => {

    // //Callback
    beforeEach(()=>{cy.visit('https://opensource-demo.orangehrmlive.com/',{timeout: 120000 })}) 

    it('Login', () => {

      cy.get("[name='username']").type("Admin")
      cy.get("[name='password']").type("admin123")
      cy.get(".oxd-button").click()


      // Header title after the Login should equal to
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

      // Header title after the Login should equal to
      cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('contain',"Dashboard")

    
    })


    it('Invalid Login', () => {

      cy.get("[name='username']").type("Admin2")
      cy.get("[name='password']").type("admin123")
      cy.get(".oxd-button").click()

      cy.get(".oxd-text").should('contain',"Invalid credentials")

    
    })


  })
