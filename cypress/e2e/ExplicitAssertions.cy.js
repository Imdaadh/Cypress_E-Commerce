describe('Explicit Assertions', () => {

    beforeEach(()=>{cy.visit('https://opensource-demo.orangehrmlive.com/',{timeout: 120000 })}) 


    //BDD Approach "Given Page, When User Enter UN and PW, Then User Navigates to Dashboard "

    it('Given UN and PW, When Navigating to Dashboard, Then UN should be Equal', () => {
        
        cy.get("[name='username']").type("Admin")
        cy.get("[name='username']").should('have.value','Admin')

        cy.get("[name='password']").type("admin123")
        cy.get("[name='password']").should('have.value','admin123')



        cy.get(".oxd-button").click()


        let ExpName = "manda user"

        cy.get(".oxd-userdropdown-name").then( (expName)=>{

            let actName = expName.text()
            expect(actName).to.equal(ExpName)
            // expect(actName).to.not.equal(ExpName)

            //TDD Style
            assert.equal(actName,ExpName)
        })

    })
  
  })