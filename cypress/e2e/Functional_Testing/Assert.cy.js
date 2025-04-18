describe('Explicit Assertions', () => {

    beforeEach(()=>{cy.visit('https://opensource-demo.orangehrmlive.com/',{timeout: 120000 })}) 


    //TDD Approach, Writing the testcase to pass the code "

    it('Expected name should equal to actual name', () => {
        
        cy.get("[name='username']").type("Admin")
        cy.get("[name='username']").should('have.value','Admin')

        cy.get("[name='password']").type("admin123")
        cy.get("[name='password']").should('have.value','admin123')



        cy.get(".oxd-button").click()


        let ExpName = "manda user"

        cy.get(".oxd-userdropdown-name").then( (expName)=>{

            let actName = expName.text()
   
            //TDD Style
            assert.equal(actName,ExpName)
            // assert.notEqual(actName,ExpName) // Negative Test Case this should fail "comments"
           
        })

    })
  
  })