describe('Featured Products Length', () => {

    //Callback
    beforeEach(()=>{cy.visit('https://naveenautomationlabs.com/opencart/',{timeout: 120000 })}) 

    it('4 Featured Products', () => {

        cy.get(".product-layout").should('have.length',4)
    
    })
    

    it('Swiper Slider Next Arrow', () => {

        const clickSwiperNextButton = (times, delay = 2000) => {
            for (let i = 0; i < times; i++) {
                cy.get('div[class="slideshow swiper-viewport"] div[class="swiper-button-next"]').click()
                cy.wait(delay)
            }
          };
           // Click the Swiper next button 5 times
           //Overriding the delay value
         clickSwiperNextButton(5, 1000);
    
    })


    it('Swiper Slider Previous Arrow', () => {

        const clickSwiperPrevButton = (times, delay = 2000) => {
            for (let i = 0; i < times; i++) {
                cy.get('div[class="slideshow swiper-viewport"] div[class="swiper-button-prev"]').click()
                cy.wait(delay)
            }
          };
           // Click the Swiper next button 5 times
           //Overriding the delay value
           clickSwiperPrevButton(5, 1000);
    
    })

    
    it('Swiper Slider Both Arrows Together', () => {

        const clickSwiperNextButton = (times, delay = 2000) => {
            for (let i = 0; i < times; i++) {
                cy.get('div[class="slideshow swiper-viewport"] div[class="swiper-button-next"]').click()
                cy.wait(delay)
            }
          };
          
         clickSwiperNextButton(3, 500);


         const clickSwiperPrevButton = (times, delay = 2000) => {
            for (let i = 0; i < times; i++) {
                cy.get('div[class="slideshow swiper-viewport"] div[class="swiper-button-prev"]').click()
                cy.wait(delay)
            }
          };
        
        clickSwiperPrevButton(3, 500);

        //Again Clicking Twice

        clickSwiperNextButton(2, 1000);


    })

    




  })
