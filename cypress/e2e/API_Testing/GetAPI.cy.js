describe('Read the Data from API', () => {


    it('Get the details', () => {
        cy.request('GET', 'https://dummy.restapiexample.com/api/v1/employees').then((response)=>{
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
        })
       
    })
  
  })