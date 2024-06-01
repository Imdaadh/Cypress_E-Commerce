describe('Create the Data from API', () => {

    Cypress.config('baseUrl', 'https://dummy.restapiexample.com/api/v1/')


    it('Create the details', () => {
        const bodyData = {"name":"New Name","salary":"123","age":"23"}
        cy.request('POST', '/create', bodyData)
        .its('body')
        .its('data')
        .should('include', { name: 'New Name' });  //it keyword used to go in nested way

    })
  
  })