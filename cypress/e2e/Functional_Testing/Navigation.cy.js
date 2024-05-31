describe('CSSLocators', () => {

    //Callback
    beforeEach(()=>{
      cy.visit('https://saucelabs.com/') 
    }) 

    it('Navigation and Validating URL', () => {

      cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedAccentGreen.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedAccentGreen.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.css-as8hpy").click()

      cy.url().should('eq', 'https://saucelabs.com/sign-up')

    
    })


    it('Validate Page title and Hero Title', () => {

        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedAccentGreen.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedAccentGreen.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-disableElevation.MuiButton-fullWidth.css-as8hpy").click()
  
        cy.url().should('eq', 'https://saucelabs.com/sign-up')
  
        cy.title().should('eq',"Sign Up for a Free Trial | Sauce Labs") 
  
        //checks whether div element or
  
        cy.get("#title").contains("Start testing")
  
        //should contain searches the exact match for the element selected by the locator
  
        cy.get("#title").should('contain',"Start testing ")

        cy.get("#title").should('have.text',"Start testing in minutes")


      
    
      })

      it('Search Button Click', () => {

        cy.get(".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeLarge.css-1dyvkz7").click()
  
      })

  

  
  })