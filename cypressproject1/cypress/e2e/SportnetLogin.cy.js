
it('passes', () => {

    cy.viewport(1440,1220)
    cy.visit('https://sportnetit.com/en_EN')
    cy.wait(5000)

    //click on popup
    cy.get('button[class="needsclick klaviyo-close-form kl-private-reset-css-Xuajs1"]').click()

    //CLICK ON MAIN MENU CAT RUNNING
    cy.get('.level0.first > .level-top').click({ force: true })

    // Clicking on product 
    cy.get('#product-item-info_81089 > .details > .product > .product-item-link').click()
    cy.wait(4000)
    
    //Click on Add to cart button
    cy.get('button[class="action primary tocart"]').click()
    cy.wait(5000)

    //click on checkout button
    cy.get('button[class="action primary checkout"]').click()
    cy.wait(4000)

    // Click on email
    cy.get('.amcheckout-wrapper > #customer-email').type('usman.ali@rltsquare.com', { multiple: true, force: true })
    cy.wait(8000)

    //click on name
    cy.get('input[name="firstname"]').eq(0).type('umer', { multiple: true, force: true })
    cy.wait(2000)

    //click on last name
    cy.get('input[name="lastname"]').eq(0).type('ijaz', { multiple: true, force: true })
    cy.wait(2000)


    //click on address
    cy.get('input[name="street[0]"]').eq(0).type('pakistan', { multiple: true, force: true })
    cy.wait(2000)

    //click on city
    cy.get('input[name="city"]').eq(0).type('lahore', { multiple: true, force: true })
    cy.wait(2000)

    //click on postal code
    cy.get('input[name="postcode"]').eq(0).type('54125', { multiple: true, force: true })
    cy.wait(2000)

    //select state
    cy.get('input[name="region_id"]').select(['570','Ancona'], { multiple: true, force: true })

  })